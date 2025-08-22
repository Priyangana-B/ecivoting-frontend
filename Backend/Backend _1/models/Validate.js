// controllers/Validate.js
import mongoose from "mongoose";
import Voter from "./Voter.js";

/** ---------- helpers ---------- */

const escapeRegex = (s = "") =>
  s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const normalizePhone = (p = "") =>
  String(p).replace(/\D/g, "").slice(0, 10);

const isValidPhone = (p) => /^[6-9]\d{9}$/.test(p);
const isValidPincode = (p) => /^\d{6}$/.test(p);
const isValidEmail = (e = "") =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const isValidVoterIdFormat = (id = "") =>
  /^[A-Z]{3,5}\d{5,12}$/.test(id); // matches your EPICYYYY###### pattern too

const normalizeName = (s = "") => s.trim().replace(/\s+/g, " ");
const normLower = (s = "") => normalizeName(s).toLowerCase();
const toUpper = (s = "") => String(s).toUpperCase();

const generateEpic = () => {
  const code = "EPIC";
  const year = new Date().getFullYear();
  const randomPart = Math.floor(100000 + Math.random() * 900000); // 6 digits
  return `${code}${year}${randomPart}`;
};

/** ---------- registration (store) ---------- */
/** Optional: move your /api/voters logic here to keep code centralized. */
export const registerVoter = async (req, res) => {
  try {
    const data = { ...req.body };

    // Required fields (keep email required to match LokSabha auth flow)
    const required = [
      "fullName", "dob", "gender", "relationName",
      "addressLine1", "city", "state", "pincode",
      "mobile", "email"
    ];

    const missing = required.filter((f) => !data[f]);
    if (missing.length) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
        missingFields: missing
      });
    }

    // Normalize & validate
    data.fullName = normalizeName(data.fullName);
    data.relationName = normalizeName(data.relationName);
    data.city = normalizeName(data.city);
    data.state = normalizeName(data.state);
    data.mobile = normalizePhone(data.mobile);
    data.email = (data.email || "").trim();

    if (!isValidPhone(data.mobile)) {
      return res.status(400).json({ success: false, error: "Invalid mobile number" });
    }
    if (!isValidPincode(data.pincode)) {
      return res.status(400).json({ success: false, error: "Invalid pincode" });
    }
    if (!isValidEmail(data.email)) {
      return res.status(400).json({ success: false, error: "Invalid email address" });
    }
    if (data.aadhaar && !/^\d{12}$/.test(String(data.aadhaar))) {
      return res.status(400).json({ success: false, error: "Invalid Aadhaar number" });
    }

    // EPIC (voterId): accept from client if present, otherwise generate
    data.voterId = data.voterId ? toUpper(data.voterId) : generateEpic();
    if (!isValidVoterIdFormat(data.voterId)) {
      return res.status(400).json({ success: false, error: "Invalid Voter ID format" });
    }

    // Duplicate protections
    const dupByMobile = await Voter.findOne({ mobile: data.mobile });
    if (dupByMobile) {
      return res.status(400).json({ success: false, error: "Mobile number already registered" });
    }
    const dupByEpic = await Voter.findOne({ voterId: data.voterId });
    if (dupByEpic) {
      return res.status(400).json({ success: false, error: "Voter ID already exists, please resubmit" });
    }

    // Save
    const voter = new Voter(data);
    const saved = await voter.save();

    return res.status(201).json({
      success: true,
      message: "Voter registered successfully",
      data: saved
    });
  } catch (err) {
    console.error("registerVoter error:", err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

/** ---------- authentication (verify) ---------- */

//  POST /api/voters/authenticate
//  body: { voterId, email, mobile, fullName }
//  Matches exactly what your LokSabha.jsx collects
//  Case-insensitive compare for fullName/email; strict compare for mobile and voterId
 
export const authenticateVoter = async (req, res) => {
  try {
    let { voterId, email, mobile, fullName } = req.body || {};

    voterId = toUpper(voterId);
    mobile = normalizePhone(mobile);
    fullName = normalizeName(fullName);
    const nameLower = normLower(fullName);
    const emailLower = (email || "").trim().toLowerCase();

    // Basic payload checks
    if (!voterId || !email || !mobile || !fullName) {
      return res.status(400).json({
        success: false,
        error: "voterId, email, mobile and fullName are required"
      });
    }
    if (!isValidPhone(mobile)) {
      return res.status(400).json({ success: false, error: "Invalid mobile number" });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ success: false, error: "Invalid email address" });
    }
    if (!isValidVoterIdFormat(voterId)) {
      return res.status(400).json({ success: false, error: "Invalid Voter ID format" });
    }
    if (fullName.length < 3) {
      return res.status(400).json({ success: false, error: "Name must be at least 3 characters" });
    }

    // Find by voterId first (fast, exact)
    const voter = await Voter.findOne({ voterId }).lean();
    if (!voter) {
      return res.status(404).json({ success: false, error: "Voter ID not found" });
    }

    // Compare mobile strictly
    if (normalizePhone(voter.mobile) !== mobile) {
      return res.status(401).json({ success: false, error: "Mobile number does not match our records" });
    }

    // Compare email case-insensitively
    if ((voter.email || "").toLowerCase() !== emailLower) {
      return res.status(401).json({ success: false, error: "Email does not match our records" });
    }

    // Compare full name case-insensitively (trim + single spaces)
    if (normLower(voter.fullName) !== nameLower) {
      return res.status(401).json({ success: false, error: "Name does not match our records" });
    }

    // Success – return only safe fields needed by frontend
    const safe = {
      voterId: voter.voterId,
      fullName: voter.fullName,
      email: voter.email,
      mobile: voter.mobile,
      state: voter.state,
      city: voter.city
    };

    return res.status(200).json({
      success: true,
      message: "Authentication successful",
      data: safe
    });
  } catch (err) {
    console.error("authenticateVoter error:", err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};
