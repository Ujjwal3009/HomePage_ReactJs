import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import GovernmentAndLGU from "./components/GovernmentAndLGU";
import Solutions from "./components/Solutions";
import SystemsIntegration from "./components/SystemsIntegration";
import TelcomSolutions from "./components/TelcomSolutions";
import EnterpriseSolutions from "./components/EnterpriseSolutions";
import Partners from "./components/Partners";
import Company from "./components/Company";
import ContactUs from "./components/ContactUs";
//import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  //in app.js is what shows everything on our webpage
  //we can write our js in here

  return (
    <div className="App">
      <Header />
      <WelcomePage />
      <GovernmentAndLGU />
      <Solutions />
      <SystemsIntegration />
      <TelcomSolutions />
      <EnterpriseSolutions />
      <Partners />
      <Company />
      <ContactUs />
      {/* footer */}

    </div>
  );
}

export default App;


// ============For=Single=Page=Action===========
// <Router>
// <Header />

// <Route path="/" exact>
//   <WelcomePage />
// </Route>

// <Route path="/GovernmentAndLGU">
//   <GovernmentAndLGU />
//   {/* WhatWeDo */}
// </Route>

// <Route path="/Solutions">
//   <Solutions />
//   {/* SolutionsWeDeliver */}
// </Route>

// <Route path="/SystemsIntegration">
//   <SystemsIntegration />
//   {/* CoveredSupport */}
// </Route>

// <Route path="/TelcomSolutions">
//   <TelcomSolutions />
//   {/* /TelcomSolutions */}
// </Route>

// <Route path="/EnterpriseSolutions">
//   <EnterpriseSolutions />
//   {/* /EnterpriseSolutions */}
// </Route>

// <Route path="/Partners">
//   {/* Partners */}
// </Route>

// <Route path="/ContactUs">
//   {/* ContactUs */}
// </Route>

// <Route>
//   {/* Footer */}
// </Route>
  

// </Router>