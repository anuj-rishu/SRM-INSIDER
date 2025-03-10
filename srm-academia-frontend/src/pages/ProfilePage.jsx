import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:9000';

function ProfilePage({ token, onLogout }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userResponse = await axios.get(`${API_URL}/user`, {
          headers: {
            'X-CSRF-Token': token
          }
        });
        
        const profileResponse = await axios.get(`${API_URL}/profile`, {
          headers: {
            'X-CSRF-Token': token
          }
        });
        
        setProfile({
          ...userResponse.data,
          ...profileResponse.data
        });
      } catch (err) {
        setError('Failed to fetch profile data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  const handleLogout = async () => {
    try {
      await axios.delete(`${API_URL}/logout`, {
        headers: {
          'X-CSRF-Token': token
        }
      });
      onLogout();
    } catch (err) {
      console.error('Logout failed:', err);
      // Force logout even if API call fails
      onLogout();
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-lg text-gray-700">Loading profile...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          <div className="text-red-500 text-center mb-4">{error}</div>
          <button 
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-8">
      {/* Header with logout */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Student Profile</h1>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm9 12V5h-2v10h2zm-4 0V5H6v10h2z" clipRule="evenodd" />
            </svg>
            Logout
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Left side - Photo */}
            <div className="md:w-1/3 bg-gray-50 flex flex-col items-center justify-center p-8 border-r border-gray-200">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 shadow-md mb-4">
                {profile?.photoBase64 ? (
                  <img 
                    src={profile.photoBase64} 
                    alt="Profile" 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{profile?.name || 'Student'}</h2>
              <p className="text-gray-500 mt-1">{profile?.regNumber}</p>
            </div>
            
            {/* Right side - Details */}
            <div className="md:w-2/3 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-4">Academic Information</h3>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Department</p>
                  <p className="font-medium text-gray-800">{profile?.department || 'N/A'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Program</p>
                  <p className="font-medium text-gray-800">{profile?.program || 'N/A'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Semester</p>
                  <p className="font-medium text-gray-800">{profile?.semester || 'N/A'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Section</p>
                  <p className="font-medium text-gray-800">{profile?.section || 'N/A'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Batch</p>
                  <p className="font-medium text-gray-800">{profile?.batch || 'N/A'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Academic Year</p>
                  <p className="font-medium text-gray-800">{profile?.year || 'N/A'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Mobile</p>
                  <p className="font-medium text-gray-800">{profile?.mobile || 'N/A'}</p>
                </div>
              </div>
              
              {/* Advisors section */}
              {profile?.advisors?.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-4">Advisors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profile.advisors.map((advisor, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-4 shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 rounded-full p-2 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </div>
                          <p className="font-semibold text-blue-800">{advisor.role}</p>
                        </div>
                        <p className="text-gray-700 font-medium">{advisor.name}</p>
                        <p className="text-gray-600 text-sm mt-1">{advisor.email}</p>
                        <p className="text-gray-600 text-sm">{advisor.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;