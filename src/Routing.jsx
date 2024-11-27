import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivecyPolicy from "./component/privecypolicy";
import Navbar from './components/navbar/Navbar';
import SignUp from './components/signup/SignUp';
// import DeleteAccountPolicy from "./component/DeleteAccount";
// import TermsAndConditions from "./component/termsCondition";
import Response from './components/response/Response';
// import AboutUs from './component/AboutUs';



function Routing() {
    return (
      <div>
        <Router>  
          <Routes>
            <Route path="/privacyPolicy" element={<PrivecyPolicy />} />
            {/* <Route path="/deletePolicy" element={<DeleteAccountPolicy />} /> */}
            {/* <Route path="/termCondition" element={<TermsAndConditions />} /> */}
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/aboutus" element={<AboutUs />} /> */}
            <Route path="/response" element={<Response />} />
            <Route path="/" element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    );
  }
  
  export default Routing;