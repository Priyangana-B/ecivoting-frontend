import express from "express";
import SearchElectoralRoll from "../models/SearchElectoralRoll.js";

const router = express.Router();

// POST - Save form data
router.post("/", async (req, res) => {
  try {
    const {
      yourName,
      motherName,
      fatherName,
      dob,
      age,
      gender,
      aadhaarNo,
      nativeLanguage,
      yourAddress,
      state,
      district,
      assemblyName,
      pinCode,
    } = req.body;

    // Basic validation
    if (!yourName || !state) {
      return res
        .status(400)
        .json({ error: "Name and state are required." });
    }

    // Aadhaar validation (if given)
    if (aadhaarNo && !/^\d{12}$/.test(aadhaarNo)) {
      return res.status(400).json({ error: "Invalid Aadhaar number." });
    }

    // Pin code validation (if given)
    if (pinCode && !/^\d{6}$/.test(pinCode)) {
      return res.status(400).json({ error: "Invalid pin code." });
    }

    // Save record
    const newRecord = new SearchElectoralRoll({
      yourName,
      motherName,
      fatherName,
      dob,
      age,
      gender,
      aadhaarNo,
      nativeLanguage,
      yourAddress,
      state,
      district,
      assemblyName,
      pinCode,
    });

    const savedRecord = await newRecord.save();
    return res.status(201).json(savedRecord);
  } catch (err) {
    console.error("Server error:", err);
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ error: "Duplicate entry detected (Aadhaar)." });
    }
    return res
      .status(500)
      .json({ error: "Server error. Please try again later." });
  }
});

export default router;
