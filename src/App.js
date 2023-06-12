import { Route, Routes } from "react-router-dom";
import Login from "./Shared Utils/Login/Login";
import CreateAccount from "./Shared Utils/Login/CreateAccount";
import UserRegistration from "./Components/Registration page/UserRegistration";
import ArtisanRegistration from "./Components/Registration page/ArtisanRegistration";
import HomePage from "./Components/Home page/HomePage";
import ResetPassword from "./Shared Utils/Login/ResetPassword";
import ResetPassword2 from "./Shared Utils/Login/ResetPassword2";
import Profile from './Shared Utils/Pages/Profile'
import Review from "./Components/User Page/Review";
import Home from './Components/User Page/Home'
import UserPage from "./Components/User Page/UserPage";
// import Searchbar from "./Shared Utils/Sidebar/Searchbar";

function App() {
  return (
    <div>
       <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="forgotPassword" element={<ResetPassword/>}/>
         <Route path='resetPassword' element={<ResetPassword2/>}/>
         <Route path="createAccount" element={<CreateAccount/>}/>
         <Route path="createAccount/user" element={<UserRegistration/>}/>
         <Route path="createAccount/artisan" element={<ArtisanRegistration/>}/>   
         <Route path="login/user/:username" element={<UserPage/>}>
          <Route path="" element={<Home/>}/>
          <Route path="editProfile" element={<Profile/>}/>
          <Route path="userReview" element={<Review/>}/>
         </Route>
      </Routes> 
      {/* <Searchbar/> */}
     
    </div>
  );
}

export default App;
