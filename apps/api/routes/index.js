const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobs.controller');
const resumeController = require('../controllers/resume.controller');
// const placementController = require('../controllers/placement.controller');

// Jobs Routes
router.get('/jobs', jobsController.getJobs);
router.get('/jobs/:id', jobsController.getJobById);

// Resume Routes
router.post('/resume', resumeController.saveResume);
router.get('/resume/:id', resumeController.getResume);

// Placement Routes (Placeholder)
router.get('/placement', (req, res) => {
    res.json({ message: "Placement service ready" });
});

module.exports = router;
