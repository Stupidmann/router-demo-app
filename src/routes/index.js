import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "../views/Home"
import FourOFour from "../views/404"

export default function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={FourOFour} />
            </Routes>
        </Router>
    );
}