import { Route, Routes } from "react-router-dom";
import Login from "./Shared Utils/Login/Login";
import CreateAccount from "./Shared Utils/Login/CreateAccount";
import UserRegistration from "./Components/Registration page/UserRegistration";
import ArtisanRegistration from "./Components/Registration page/ArtisanRegistration";
import ResetPassword from "./Shared Utils/Login/ResetPassword";
import ResetPassword2 from "./Shared Utils/Login/ResetPassword2";
import Profile from './Shared Utils/Pages/Profile'
import Review from "./Components/User Page/Review";
import Home from './Components/User Page/Home'
import UserPage from "./Components/User Page/UserPage";
// import ArtisanProfile from "./Components/Artisan Page/ArtisanProfile";
import LandingPage from "./Components/Home page/LandingPage";
// import AdminPage from "./Components/Admin page/AdminPage";
// import Searchbar from "./Shared Utils/Sidebar/Searchbar";
// import UserManagement from "./Components/Admin page/UserManagement";
// import ArtisanManagement from "./Components/Admin page/ArtisanManagement";
// import Map from "./Shared Utils/Pages/Map";

function App() {
  return (
    <div>
       <Routes>
         <Route path="/" element={<LandingPage/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="forgotPassword" element={<ResetPassword/>}/>
         <Route path='resetPassword' element={<ResetPassword2/>}/>
         <Route path="createAccount" element={<CreateAccount/>}/>
         <Route path="createAccount/user" element={<UserRegistration/>}/>
         <Route path="createAccount/artisan" element={<ArtisanRegistration/>}/>   
         <Route path="login/user" element={<UserPage/>}>
          <Route path="" element={<Home/>}/>
          <Route path="editProfile" element={<Profile/>}/>
          <Route path="review" element={<Review/>}/>
         </Route>
      </Routes> 
      {/* <UserManagement/> */}
      {/* <ArtisanManagement/> */}
      {/* <Map/> */}
    </div>
  );
}

export default App;
