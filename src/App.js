import { Route, Routes } from "react-router-dom";
import Login from "./Shared Utils/Login/Login";
import CreateAccount from "./Shared Utils/Login/CreateAccount";
import UserRegistration from "./Components/Registration page/UserRegistration";
import ArtisanRegistration from "./Components/Registration page/ArtisanRegistration";
import HomePage from "./Components/Home page/HomePage";
import ResetPassword from "./Shared Utils/Login/ResetPassword";

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
        <Route path="/createAccount" element={<CreateAccount/>}/>
        {/* <Route index element={<CreateAccount/>}/> */}
          {/* <Route path="artisan" element={<ArtisanRegistration/>}/>
          <Route path="user" element={<UserRegistration/>}/>
        </Route> */}

        <Route path="/createAccount/user" element={<UserRegistration/>}/>
        <Route path="/createAccount/artisan" element={<ArtisanRegistration/>}/>
      </Routes> 
      {/* <ResetPassword/> */}
    </div>
  );
}

export default App;
