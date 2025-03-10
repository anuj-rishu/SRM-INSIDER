import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage'
import { useAuth } from '../context/AuthContext'
import Layout from '../components/Layout'
import NotFound from '../pages/NotFound'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  
  return children
}

const AppRoutes = () => {
  const { isAuthenticated } = useAuth()
  
  return (
    <Routes>
      <Route path="/login" element={
        isAuthenticated ? <Navigate to="/profile" replace /> : <LoginPage />
      } />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Layout>
            <ProfilePage />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/" element={<Navigate to={isAuthenticated ? "/profile" : "/login"} replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes