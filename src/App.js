import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotPassword" element={<ResetPassword />} />
        <Route path="checkEmail/:email" element={<EmailPrompt />} />
        <Route path="resetPassword/:email" element={<ResetPassword2 />} />
        <Route path="createAccount" element={<CreateAccount />} />
        <Route
          path="createAccount/user/:username"
          element={<UserRegistration />}
        />
        <Route
          path="createAccount/artisan/:username"
          element={<ArtisanRegistration />}
        />

        Routes for User Page
        <Route path="login/user" element={<UserPage />}>
          <Route path="home" element={<Home />} />
          <Route path="home/viewProfile/:id" element={<ArtisanProfile2 />} />
          <Route path="editProfile" element={<Profile />} />
          <Route path="review" element={<Review />} />
          <Route path="maps" element={<Map />} />
        </Route>

        Routes for Artisan Page
        <Route path="login/artisan" element={<ArtisanPage />}>
          <Route path="home" element={<ArtisanProfile />} />
          <Route path="home/bookings" element={<ArtisanBookings />} />
          <Route path="editProfile" element={<EditArtisanProfile />} />
          <Route path="maps" element={<Map />} />
          <Route path="payments" element={<Payments />} />
        </Route>

        Routes for admin 
        <Route path="login/admin" element={<AdminPage />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="manageUsers" element={<UserManagement />} />
          <Route path="manageArtisans" element={<ArtisanManagement />} />
          <Route path="verifyRegistration" element={<VerifyRegistration />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
