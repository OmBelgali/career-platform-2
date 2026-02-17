const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // For now, simple string ID
    personalInfo: {
        fullName: String,
        email: String,
        phone: String,
        linkedin: String,
        github: String,
        portfolio: String
    },
    education: [{
        institution: String,
        degree: String,
        year: String
    }],
    experience: [{
        company: String,
        role: String,
        duration: String,
        details: String
    }],
    skills: [String],
    projects: [{
        title: String,
        description: String,
        technologies: [String],
        link: String
    }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', ResumeSchema);
