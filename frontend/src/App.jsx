import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainSignup from './pages/CaptainSignup';
import CaptainLogin from './pages/CaptainLogin';
import Start from './pages/Start';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import UserProtectedWraper from './helpers/UserProtectedWraper';
import CaptainProtectedWraper from './helpers/CaptainProtectedWrapper';
import CaptainLogout from './pages/CaptainLogout';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/home" element={
          <UserProtectedWraper>
            <Home />
          </UserProtectedWraper>
        } />
        <Route path="/user/logout" element={
          <UserProtectedWraper>
            <UserLogout />
          </UserProtectedWraper>
        } />
        <Route path="/captain-home" element={
          <CaptainProtectedWraper>
            <CaptainHome />
          </CaptainProtectedWraper>} />
        <Route path="/captain/logout" element={
          <CaptainProtectedWraper>
            <CaptainLogout />
          </CaptainProtectedWraper>} />

      </Routes>
    </>
  )
}

export default App
