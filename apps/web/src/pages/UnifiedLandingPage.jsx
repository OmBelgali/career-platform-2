import { Link } from 'react-router-dom';

export default function UnifiedLandingPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Career Platform</h1>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl">
                Your all-in-one solution for job tracking, placement readiness, and resume building.
            </p>

            <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
                <Link to="/jobs" className="group block bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:border-blue-500">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">Job Tracker</h2>
                    <p className="text-gray-500">Track job applications and get daily notifications for relevant roles.</p>
                </Link>

                <Link to="/placement" className="group block bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:border-purple-500">
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">Placement Prep</h2>
                    <p className="text-gray-500">Prepare for interviews with checklists, practice tests, and analytics.</p>
                </Link>

                <Link to="/resume" className="group block bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:border-rose-500">
                    <div className="h-12 w-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4 text-rose-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-rose-600">Resume Builder</h2>
                    <p className="text-gray-500">Build professional, ATS-friendly resumes with AI assistance.</p>
                </Link>
            </div>

            <div className="mt-12 text-sm text-gray-400">
                &copy; 2026 Career Platform. All rights reserved.
            </div>
        </div>
    );
}
