const { Job } = require('@career-platform/models');

const JOBS_DATA = [
    { title: "SDE Intern", company: "Amazon", location: "Bangalore", mode: "Hybrid", experience: "Fresher", skills: ["Java", "Data Structures", "Algorithms"], source: "LinkedIn", postedDaysAgo: 1, salaryRange: "₹40k–₹60k/month Internship", applyUrl: "https://www.amazon.jobs/en/jobs/IN001", description: "Work on scalable systems and learn from senior engineers. You will contribute to design, code reviews, and deployment pipelines. Mentorship and learning sessions included." },
    { title: "Graduate Engineer Trainee", company: "TCS", location: "Chennai", mode: "Onsite", experience: "Fresher", skills: ["Java", "SQL", "Spring"], source: "Naukri", postedDaysAgo: 3, salaryRange: "3–5 LPA", applyUrl: "https://careers.tcs.com/job/IN002", description: "One-year structured program with rotations across projects. Training on Java, cloud basics, and agile. Conversion to full-time based on performance." },
    // Truncated for brevity - using just a few examples for seeding in this PoC to avoid massive file size
    { title: "Junior Backend Developer", company: "Razorpay", location: "Bangalore", mode: "Hybrid", experience: "0-1", skills: ["Node.js", "PostgreSQL", "Redis"], source: "LinkedIn", postedDaysAgo: 0, salaryRange: "6–10 LPA", applyUrl: "https://razorpay.com/jobs/IN003", description: "Build and maintain payment APIs and internal tools. You will work with product and design. Code quality and tests are part of daily workflow." }
];

const seedJobs = async () => {
    try {
        const count = await Job.countDocuments();
        if (count === 0) {
            await Job.insertMany(JOBS_DATA);
            console.log('Jobs seeded successfully');
        }
    } catch (error) {
        console.error('Error seeding jobs:', error);
    }
};

module.exports = { seedJobs };
