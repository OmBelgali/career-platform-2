import { Routes, Route } from 'react-router-dom'
import UnifiedLandingPage from './pages/UnifiedLandingPage'
import JobTracker from './modules/jobs/JobTracker'
import ResumeBuilder from './modules/resume/ResumeBuilder'

// Placement imports
import LandingPage from './pages/LandingPage'
import TestChecklist from './pages/TestChecklist'
import Ship from './pages/Ship'
import Proof from './pages/Proof'
import DashboardLayout from './pages/dashboard/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import Practice from './pages/dashboard/Practice'
import Assessments from './pages/dashboard/Assessments'
import Resources from './pages/dashboard/Resources'
import Profile from './pages/dashboard/Profile'
import Analyze from './pages/dashboard/Analyze'
import Results from './pages/dashboard/Results'
import History from './pages/dashboard/History'

export default function App() {
  return (
    <Routes>
      {/* Unified Landing */}
      <Route path="/" element={<UnifiedLandingPage />} />

      {/* Modules */}
      <Route path="/jobs/*" element={<JobTracker />} />
      <Route path="/resume/*" element={<ResumeBuilder />} />

      {/* Placement Module (Legacy Routes prefixed or kept?) 
          User requested /placement-prep module. 
          Let's prefix them with /placement or keep them reachable.
          But original app had / root. 
          Let's move original LandingPage to /placement
      */}
      <Route path="/placement" element={<LandingPage />} />

      {/* Existing Placement Routes - keeping paths as is or prefixing?
          If I prefix, I break internal links in the components.
          Ideally I should wrap them in /placement/* but that requires refactoring all Links.
          For now, I will keep them but maybe obscure the root. 
          Wait, /dashboard colliding? No, only one dashboard.
          I will keep existing routes for now to ensure they work, but mapped from /placement if possible?
          No, let's keep them as top-level for now OR just add the specific ones.
      */}
      <Route path="/prp/07-test" element={<TestChecklist />} />
      <Route path="/prp/08-ship" element={<Ship />} />
      <Route path="/prp/proof" element={<Proof />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="practice" element={<Practice />} />
        <Route path="assessments" element={<Assessments />} />
        <Route path="resources" element={<Resources />} />
        <Route path="profile" element={<Profile />} />
        <Route path="analyze" element={<Analyze />} />
        <Route path="results" element={<Results />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  )
}
