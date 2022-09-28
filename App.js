import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
    
    const App = () => {
     return (
<>
    <Router>
     <Navbar/>

     
     <Routes>
     <Route exact path="/" component={Home}>
     </Route>

     <Route exact path="/about" component={About}>
     </Route>

     <Route exact path="/blogs" component={Blogs}>
     </Route>

     <Route exact path="/contact" component={Contact}>
     </Route>

     <Route exact path="/signup" component={Signup}>
     </Route>

     <Route exact path="/login" component={Login}>
     </Route>

     </Routes>
    </Router>

    {/* <Home/> */}
    </>
  );
}

export default App;



// in react-dom vertion 6 this is how we Route our Components basic syntax :
// {/* <Routes>
//   <Route exact path="/" component={Home} />
//   <Route path="/quiz" component={Quiz} />
//   <Home /> // <-- remove this
// </Routes> */}