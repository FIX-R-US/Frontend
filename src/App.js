import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Shared Utils/Login/Login";
import CreateAccount from "./Shared Utils/Login/CreateAccount";
import UserRegistration from "./Components/Registration page/UserRegistration";
import ArtisanRegistration from "./Components/Registration page/ArtisanRegistration";
import ResetPassword from "./Shared Utils/Login/ResetPassword";
import ResetPassword2 from "./Shared Utils/Login/ResetPassword2";
import EmailPrompt from "./Shared Utils/Login/EmailPrompt";
import Profile from "./Components/User Page/Profile";
import Review from "./Components/User Page/Review";
import Home from "./Components/User Page/Home";
import UserPage from "./Components/User Page/UserPage";
import ArtisanProfile from "./Components/Artisan Page/ArtisanProfile";
import LandingPage from "./Components/Home page/LandingPage";
import ArtisanPage from "./Components/Artisan Page/ArtisanPage";
import AdminPage from "./Components/Admin page/AdminPage";
import UserManagement from "./Components/Admin page/UserManagement";
import ArtisanManagement from "./Components/Admin page/ArtisanManagement";
import Dashboard from "./Components/Admin page/Dashboard";
import Map from "./Shared Utils/Pages/Map";
import EditArtisanProfile from "./Components/Artisan Page/EditArtisanProfile";
import Payments from "./Components/Artisan Page/Payments";
import VerifyRegistration from "./Components/Admin page/VerifyRegistration";
import PageNotFound from "./Shared Utils/Pages/PageNotFound";
import ArtisanProfile2 from "./Components/Artisan Page/ArtisanProfile2";
import ArtisanBookings from "./Components/Artisan Page/ArtisanBookings";
import AboutUs from "./Components/Home page/AboutUs";

function App() {
  const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      return children;
    }
    return <Navigate to="/login" />;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotPassword" element={<ResetPassword />} />
        <Route path="checkEmail/:email" element={<EmailPrompt />} />
        <Route path="resetPassword/:email" element={<ResetPassword2 />} />
        <Route path="createAccount" element={<CreateAccount />} />
        <Route path="About" element={<AboutUs/>}/>
        <Route
          path="createAccount/user/:username"
          element={<UserRegistration />}
        />
        <Route
          path="createAccount/artisan/:username"
          element={<ArtisanRegistration />}
        />
        {/* Routes for User Page */}
        <Route
          path="login/user"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        >
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="home/viewProfile/:id"
            element={
              <ProtectedRoute>
                <ArtisanProfile2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="editProfile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="review"
            element={
              <ProtectedRoute>
                <Review />
              </ProtectedRoute>
            }
          />
          <Route
            path="maps"
            element={
              <ProtectedRoute>
                <Map />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* Routes for Artisan Page */}
        <Route
          path="login/artisan"
          element={
            <ProtectedRoute>
              <ArtisanPage />
            </ProtectedRoute>
          }
        >
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <ArtisanProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="home/bookings"
            element={
              <ProtectedRoute>
                <ArtisanBookings />
              </ProtectedRoute>
            }
          />
          <Route
            path="editProfile"
            element={
              <ProtectedRoute>
                <EditArtisanProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="maps"
            element={
              <ProtectedRoute>
                <Map />
              </ProtectedRoute>
            }
          />
          <Route
            path="payments"
            element={
              <ProtectedRoute>
                <Payments />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* Routes for admin */}
        <Route
          path="login/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        >
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="manageUsers"
            element={
              <ProtectedRoute>
                <UserManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="manageArtisans"
            element={
              <ProtectedRoute>
                <ArtisanManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="verifyArtisans"
            element={
              <ProtectedRoute>
                <VerifyRegistration />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
