import { Route, Routes } from "react-router-dom";
import Login from "./Shared Utils/Login/Login";
import CreateAccount from "./Shared Utils/Login/CreateAccount";
import UserRegistration from "./Components/Registration page/UserRegistration";
import ArtisanRegistration from "./Components/Registration page/ArtisanRegistration";
import HomePage from "./Components/Home page/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/createAccount" element={<CreateAccount/>}/>
        <Route path="/userRegistration" element={<UserRegistration/>}/>
        <Route path="/artisanRegistration" element={<ArtisanRegistration/>}/>
      </Routes>
    </div>
  );
}

export default App;
