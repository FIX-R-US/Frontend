import { Route, Routes } from "react-router-dom";
import Login from "./Shared Utils/Login/Login";
import CreateAccount from "./Shared Utils/Login/CreateAccount";
import UserRegistration from "./Components/Registration page/UserRegistration";
import ArtisanRegistration from "./Components/Registration page/ArtisanRegistration";
import HomePage from "./Components/Home page/HomePage";
import ResetPassword from "./Shared Utils/Login/ResetPassword";
import ResetPassword2 from "./Shared Utils/Login/ResetPassword2";
// import Profile from './Shared Utils/Pages/Profile'
// import Home from "./Shared Utils/Pages/Home";

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
      </Routes> 
    </div>
  );
}

export default App;
