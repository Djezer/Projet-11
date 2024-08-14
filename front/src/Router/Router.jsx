import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import User from "../Pages/User/User";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/user" element={<User />} />
        </Routes>
    )
}