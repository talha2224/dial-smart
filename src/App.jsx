import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
const LandingPage = lazy(() => import('./pages/LandingPage'));
const PolicyPage = lazy(() => import('./pages/PolicyPage'));
const Terms = lazy(() => import('./pages/TermsPage'));
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage'));
const OwnershipStatementPage = lazy(() => import('./pages/OwnershipStatementPage'));
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage'));
const LoginPage = lazy(() => import('./pages/Auth/LoginPage'));
const StepperPage = lazy(() => import('./pages/Stepper/StepperPage'));
const Layout = lazy(() => import('./components/dashboard/Layout'));
const Home = lazy(() => import('./pages/Dashboard/Home'));
const Contacts = lazy(() => import('./pages/Dashboard/Contacts'));
const Companies = lazy(() => import('./pages/Dashboard/Companies'));
const CallLogs = lazy(() => import('./pages/Dashboard/CallLogs'));
const User = lazy(() => import('./pages/Dashboard/User'));
const VoiceLibrary = lazy(() => import('./pages/Dashboard/VoiceLibrary'));
const Schedule = lazy(() => import('./pages/Dashboard/Schedule'));
const Calendar = lazy(() => import('./pages/Dashboard/Calendar'));
const InvitationPage = lazy(() => import('./pages/Auth/InvitationPage'));

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/privacy' element={<PolicyPage />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/refund' element={<RefundPolicyPage />} />
            <Route path='/ownership' element={<OwnershipStatementPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/user/account/inviation/:token' element={<InvitationPage />} />
            <Route path='/company/info' element={<StepperPage />} />

            <Route path='/dashboard/' element={<Layout />}>
              <Route path='home' element={<Home />} />
              <Route path='contacts' element={<Contacts />} />
              <Route path='companies' element={<Companies />} />
              <Route path='calls' element={<CallLogs />} />
              <Route path='users' element={<User />} />
              <Route path='voices' element={<VoiceLibrary />} />
              <Route path='schedule' element={<Schedule />} />
              <Route path='calendar' element={<Calendar />} />
            </Route>

          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
