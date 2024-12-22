import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/Auth/RegisterPage'
import LoginPage from './pages/Auth/LoginPage'
import StepperPage from './pages/Stepper/StepperPage'
import Layout from './components/dashboard/Layout'
import Home from './pages/Dashboard/Home'
import Contacts from './pages/Dashboard/Contacts'
import Companies from './pages/Dashboard/Companies'
import CallLogs from './pages/Dashboard/CallLogs'
import User from './pages/Dashboard/User'
import VoiceLibrary from './pages/Dashboard/VoiceLibrary'
import Schedule from './pages/Dashboard/Schedule'
import Calendar from './pages/Dashboard/Calendar'
import { Toaster } from 'react-hot-toast'
import InvitationPage from './pages/Auth/InvitationPage'

function App() {


  return (

    <>
      <Toaster />
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LandingPage />} />
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

      </BrowserRouter>
    </>
  )
}

export default App
