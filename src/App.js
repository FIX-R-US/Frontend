import { Route, Routes } from "react-router-dom";
import Login from "./Shared Utils/Login/Login";
import CreateAccount from "./Shared Utils/Login/CreateAccount";
import UserRegistration from "./Components/Registration page/UserRegistration";
import ArtisanRegistration from "./Components/Registration page/ArtisanRegistration";
import HomePage from "./Components/Home page/HomePage";
import ResetPassword from "./Shared Utils/Login/ResetPassword";
// import ResetPassword2 from "./Shared Utils/Login/ResetPassword2";
import Sidebar from "./Shared Utils/Sidebar/Sidebar";
import EditProfile from "./Shared Utils/Sidebar/EditProfile";
import Dashboard from "./Shared Utils/Sidebar/Dashboard";
import Comment from "./Shared Utils/Sidebar/Comment";
function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/resetPassword" element={<ResetPassword/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>
            <Route path="/createAccount/user" element={<UserRegistration/>}/>
            <Route path="/createAccount/artisan" element={<ArtisanRegistration/>}/>
        
        
      </Routes> 

      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/editProfile" element={<EditProfile/>}/>
          <Route path="/comment" element={<Comment/>}/>
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
