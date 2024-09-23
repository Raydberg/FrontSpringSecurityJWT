import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import {LoginPage,RegistrationPage} from './page/auth'
import { ProfilePage, UpdateUser, UserManagementPage } from './page/User'
import {Footer} from './components/Footer'
import { adminOnly } from './service/users.service'
function App() {
    return (
        <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Check if user is authenticated and admin before rendering admin-only routes */}
            {adminOnly() && (
              <>
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/admin/user-management" element={<UserManagementPage />} />
                <Route path="/update-user/:userId" element={<UpdateUser />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/login" />} />‰
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    )
}

export default App
