const { Resume } = require('@career-platform/models');

exports.saveResume = async (req, res) => {
    try {
        const resume = new Resume(req.body);
        const savedResume = await resume.save();
        res.status(201).json(savedResume);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getResume = async (req, res) => {
    try {
        // Assuming getting by ID or some user identifier
        const resume = await Resume.findById(req.params.id);
        if (!resume) return res.status(404).json({ message: 'Resume not found' });
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
