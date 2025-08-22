// models/Application.js
import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  // Party Basic Information
  partyName: {
    type: String,
    required: true,
    trim: true
  },
  establishmentDate: { // Changed from dateOfEstablishment to match frontend
    type: Date,
    required: true
  },
  stateRegistration: {
    type: String,
    required: true
  },
  
  // Head Office Address
  headOfficeAddress: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  headOfficeState: {
    type: String,
    required: true
  },
  pinCode: {
    type: String,
    required: true,
    match: /^\d{6}$/
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  
  // President Details
  presidentName: {
    type: String,
    required: true,
    trim: true
  },
  presidentAadhaar: {
    type: String,
    required: true,
    match: /^\d{12}$/
  },
  presidentAddress: {
    type: String,
    required: true,
    trim: true
  },
  presidentPhone: {
    type: String,
    required: true
  },
  presidentEmail: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  
  // Bank Details
  bankName: {
    type: String,
    required: true,
    trim: true
  },
  branchName: {
    type: String,
    required: true,
    trim: true
  },
  accountNumber: {
    type: String,
    required: true
  },
  ifscCode: {
    type: String,
    required: true,
    match: /^[A-Z]{4}0[A-Z0-9]{6}$/
  },
  
  // Membership Details
  totalMembers: {
    type: Number,
    required: true,
    min: 100
  },
  maleMembers: {
    type: Number,
    required: true,
    min: 0
  },
  femaleMembers: {
    type: Number,
    required: true,
    min: 0
  },
  
  // Declarations
  declaration: {
    type: Boolean,
    required: true
  },
  undertaking: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Application', applicationSchema);
