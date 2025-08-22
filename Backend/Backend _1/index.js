// index.js
import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Voter from "./models/Voter.js";
import Application from "./models/Application.js";
import { authenticateVoter } from "./models/Validate.js";


dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 4500;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

// ========================
// Routes
// ========================

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "🗳️ Voting Registration & Applications System API",
    version: "2.0.0",
    systems: {
      voting: "Voter Registration System",
      applications: "Applications Management System"
    },
    endpoints: {
      // General
      "GET /": "API information",
      "GET /api/health": "Health check",
      
      // Voter Registration System
      "GET /api/voters": "Get all voters",
      "GET /api/voters/:id": "Get voter by ID",
      "POST /api/voters": "Register new voter",
      "PUT /api/voters/:id": "Update voter by ID",
      "DELETE /api/voters/:id": "Delete voter by ID",
      
      // Applications System
      "GET /api/applications": "Get all applications",
      "POST /api/applications": "Submit new application",
      "GET /api/applications/:id": "Get application by ID",
      "PUT /api/applications/:id": "Update application",
      "DELETE /api/applications/:id": "Delete application"
    }
  });
});

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Combined server is running",
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
    systems: {
      voting: "Active",
      applications: "Active"
    }
  });
});

// ========================
// VOTER REGISTRATION ROUTES
// ========================

// Get all voters
app.get("/api/voters", async (req, res) => {
  try {
    const voters = await Voter.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: voters.length,
      data: voters
    });
  } catch (err) {
    console.error("Get voters error:", err);
    res.status(500).json({ 
      success: false,
      error: "Failed to fetch voters" 
    });
  }
});

// Get voter by ID
app.get("/api/voters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        success: false,
        error: "Invalid voter ID format" 
      });
    }

    const voter = await Voter.findById(id);
    
    if (!voter) {
      return res.status(404).json({ 
        success: false,
        error: "Voter not found" 
      });
    }

    res.status(200).json({
      success: true,
      data: voter
    });
  } catch (err) {
    console.error("Get voter error:", err);
    res.status(500).json({ 
      success: false,
      error: "Server error" 
    });
  }
});

// Register new voter
app.post("/api/voters", async (req, res) => {
  try {
    const data = req.body;

    // Basic server-side validation
    const requiredFields = ['fullName','state','mobile', 'email', 'voterId'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        success: false,
        error: "Missing required fields",
        missingFields: missingFields
      });
    }

    // Check for duplicate mobile
    const existing = await Voter.findOne({ mobile: data.mobile });
    if (existing) {
      return res.status(400).json({ 
        success: false,
        error: "Mobile number already registered" 
      });
    }

    // Save to DB
    const voter = new Voter(data);
    const savedVoter = await voter.save();

    res.status(201).json({
      success: true,
      message: "Voter registered successfully",
      data: savedVoter
    });
  } catch (err) {
    console.error("Register voter error:", err);
    res.status(500).json({ 
      success: false,
      error: "Server error" 
    });
  }
});

// Authenticate voter (used by LokSabha portal)
app.post("/api/voters/authenticate", authenticateVoter);



// Update voter by ID
app.put("/api/voters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        success: false,
        error: "Invalid voter ID format" 
      });
    }

    // Check if mobile is being updated and not duplicate
    if (updateData.mobile) {
      const existing = await Voter.findOne({ 
        mobile: updateData.mobile, 
        _id: { $ne: id } 
      });
      
      if (existing) {
        return res.status(400).json({ 
          success: false,
          error: "Mobile number already registered" 
        });
      }
    }

    const updatedVoter = await Voter.findByIdAndUpdate(
      id, 
      updateData, 
      { new: true, runValidators: true }
    );

    if (!updatedVoter) {
      return res.status(404).json({ 
        success: false,
        error: "Voter not found" 
      });
    }

    res.status(200).json({
      success: true,
      message: "Voter updated successfully",
      data: updatedVoter
    });
  } catch (err) {
    console.error("Update voter error:", err);
    res.status(500).json({ 
      success: false,
      error: "Server error" 
    });
  }
});

// Delete voter by ID
app.delete("/api/voters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        success: false,
        error: "Invalid voter ID format" 
      });
    }

    const deletedVoter = await Voter.findByIdAndDelete(id);

    if (!deletedVoter) {
      return res.status(404).json({ 
        success: false,
        error: "Voter not found" 
      });
    }

    res.status(200).json({ 
      success: true,
      message: "Voter deleted successfully",
      data: deletedVoter
    });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ 
      success: false,
      error: "Server error" 
    });
  }
});

// ========================
// APPLICATIONS ROUTES
// ========================

// Get all applications
app.get("/api/applications", async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (err) {
    console.error("Get applications error:", err);
    res.status(500).json({ 
      success: false,
      error: "Failed to fetch applications" 
    });
  }
});

// Get application by ID
app.get("/api/applications/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        success: false,
        error: "Invalid application ID format" 
      });
    }

    const application = await Application.findById(id);
    
    if (!application) {
      return res.status(404).json({ 
        success: false,
        error: "Application not found" 
      });
    }

    res.status(200).json({
      success: true,
      data: application
    });
  } catch (err) {
    console.error("Get application error:", err);
    res.status(500).json({ 
      success: false,
      error: "Server error" 
    });
  }
});

// Submit new application
app.post("/api/applications", async (req, res) => {
  try {
    const data = req.body;

    // Basic validation
    const requiredFields = ['partyName', 'establishmentDate', 'stateRegistration', 'presidentName'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        success: false,
        error: "Missing required fields",
        missingFields: missingFields
      });
    }

    // Save to DB
    const application = new Application(data);
    const savedApplication = await application.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: savedApplication
    });
  } catch (err) {
    console.error("Submit application error:", err);
    res.status(500).json({ 
      success: false,
      error: "Server error" 
    });
  }
});

// Update application by ID
app.put("/api/applications/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        success: false,
        error: "Invalid application ID format" 
      });
    }

    const updatedApplication = await Application.findByIdAndUpdate(
      id, 
      updateData, 
      { new: true, runValidators: true }
    );

    if (!updatedApplication) {
      return res.status(404).json({ 
        success: false,
        error: "Application not found" 
      });
    }

    res.status(200).json({
      success: true,
      message: "Application updated successfully",
      data: updatedApplication
    });
  } catch (err) {
    console.error("Update application error:", err);
    res.status(500).json({ 
      success: false,
      error: "Server error" 
    });
  }
});

// Delete application by ID
app.delete("/api/applications/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        success: false,
        error: "Invalid application ID format" 
      });
    }

    const deletedApplication = await Application.findByIdAndDelete(id);

    if (!deletedApplication) {
      return res.status(404).json({ 
        success: false,
        error: "Application not found" 
      });
    }

    res.status(200).json({ 
      success: true,
      message: "Application deleted successfully",
      data: deletedApplication
    });
  } catch (err) {
    console.error("Delete application error:", err);
    res.status(500).json({ 
      success: false,
      error: "Server error" 
    });
  }
});

// Handle 404 for undefined routes - FIXED VERSION
app.use(/.*/, (req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
    message: `The route ${req.method} ${req.originalUrl} does not exist`,
    availableSystems: ["voters", "applications"]
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    success: false,
    error: "Internal server error"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Combined Server running on http://localhost:${PORT}`);
  console.log(`🗳️ Voter Registration System: Active`);
  console.log(`📋 Applications System: Active`);
  console.log(`📊 API Documentation available at http://localhost:${PORT}`);
});
