// import CssModule from "./components/cssModule"
// import "./app.css"
// import Form from "./components/form_css_global";
// import Form1 from "./components/FormReactBootstrap";
import LandingPage from "./pages/landingPage"
import Profile from "./pages/profile"
import NicoGanteng from "./pages/aboutUs"
import UserDetail from "./pages/userDetail"

import {Route, Routes, Link, BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import PrivateRoute from "./pages/PrivateRoutes"

function App() {
  return (
    <>
      <Router>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* <li>
                <Link to="/signin">Sign in</Link>
              </li> */}
            </ul>
          </nav>

          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/userdetail/:id" element={<UserDetail />} />

            <Route exact path="/" element={<PrivateRoute />} >
              <Route exact path="/about" element={<NicoGanteng />} />
              <Route exact path="/profile" element={<Profile />} />
            </Route>
          </Routes>

        </Router>
    </>
  );
}

export default App;
