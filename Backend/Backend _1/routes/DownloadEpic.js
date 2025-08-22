import express from 'express';
import DownloadEpic from '../models/DownloadEpic.js';

const router = express.Router();

// POST - Submit Download E-EPIC form
router.post('/', async (req, res) => {
  try {
    const { fullName, mobile, aadhaar, voterId } = req.body;

    // Basic validation
    if (!fullName || !mobile || !voterId) {
      return res.status(400).json({ error: 'Full Name, Mobile, and Voter ID are required.' });
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      return res.status(400).json({ error: 'Invalid mobile number.' });
    }

    if (aadhaar && !/^[0-9]{12}$/.test(aadhaar)) {
      return res.status(400).json({ error: 'Invalid Aadhaar number.' });
    }

    if (!/^[A-Za-z]{3}[0-9]{7}$/.test(voterId)) {
      return res.status(400).json({ error: 'Invalid Voter ID format.' });
    }

    // Save the record
    const newRecord = new DownloadEpic({ fullName, mobile, aadhaar, voterId });
    const savedRecord = await newRecord.save();

    // Respond success
    res.status(201).json({
      success: true,
      message: 'Your E-EPIC request is recorded successfully.',
      record: savedRecord
    });

  } catch (err) {
    console.error('Server error:', err);

    if (err.code === 11000) {
      return res.status(400).json({ error: 'Duplicate entry: this Voter ID has already been submitted.' });
    }

    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

export default router;
