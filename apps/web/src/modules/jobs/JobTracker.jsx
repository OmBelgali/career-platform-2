import { useState, useEffect } from 'react';

export default function JobTracker() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch jobs", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-8">Loading jobs...</div>;

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Job Notification Tracker</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map(job => (
                    <div key={job._id || job.id} className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-semibold text-blue-600">{job.title}</h2>
                        <p className="text-gray-700 font-medium">{job.company}</p>
                        <div className="flex gap-2 text-sm text-gray-500 mt-2">
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.mode}</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{job.description}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-sm font-semibold text-green-700">{job.salaryRange}</span>
                            <a href={job.applyUrl} target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-3 py-1 rounded text-sm hoever:bg-blue-700">
                                Apply
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
