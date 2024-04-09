import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";
import { Route, Routes } from "react-router-dom";
import UserDetail from "../components/UserDetail";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />}>
                <Route path="/user/:name" element={<UserDetail />} />
            </Route>
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default Routing;
