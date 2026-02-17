const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    mode: { type: String, enum: ['Onsite', 'Remote', 'Hybrid'], default: 'Onsite' },
    experience: { type: String }, // e.g. "Fresher", "0-1"
    skills: [String],
    source: { type: String },
    postedDaysAgo: { type: Number, default: 0 },
    salaryRange: { type: String },
    applyUrl: { type: String },
    description: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);
