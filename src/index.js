// // import React from "react";
// // import ReactDOM from "react-dom";
// // import {BrowserRouter, Route} from "react-router-dom";

// // function Home() {
// //   return (
// //     <div>
// //       <h1>Home!</h1>
// //     </div>
// //   );
// // }

// // function App() {
// //   return <Home />;
// // }

// // // ReactDOM.render(<App />, document.getElementById("root"));

// // ReactDOM.render(
// //   <BrowserRouter>
// //     <Route path="/">
// //       <Home />
// //     </Route>
// //   </BrowserRouter>,
// //   document.getElementById("root")
// // );

// // .src/index.js

// // import React from "react";
// // import ReactDOM from "react-dom";
// // // Step 1. Import react-router functions
// // import { BrowserRouter, Route, Switch } from "react-router-dom";

// // function Home() {
// //   return (
// //     <div>
// //       <h1>Home!</h1>
// //     </div>
// //   );
// // }

// // function About() {
// //   return (
// //     <div>
// //       <h1>This is my about component!</h1>
// //     </div>
// //   );
// // }

// // function Login() {
// //   return (
// //     <div>
// //       <h1>Login</h1>
// //       <form>
// //         <div>
// //           <input type="text" name="username" placeholder="Username" />
// //         </div>
// //         <div>
// //           <input type="password" name="password" placeholder="Password" />
// //         </div>
// //         <input type="submit" value="Submit" />
// //       </form>
// //     </div>
// //   );
// // }

// // // Step 2. Use <Route> components to define client-side routes in our app
// // // function App() {
// // //   return (
// // //     <Route path="/">
// // //       <Home />
// // //     </Route>
// // //   );
// // // }
// // function App() {
// //   return (
// //     <Switch>
// //       <Route exact path="/about">
// //         <About />
// //       </Route>
// //       <Route path="/login">
// //         <Login />
// //       </Route>
// //       <Route path="/">
// //         <Home />
// //       </Route>
// //     </Switch>
// //   );
// // }

// // // Step 3. Use <BrowserRouter> component to wrap the entire application and provide React Router context features
// // ReactDOM.render(
// //   <BrowserRouter>
// //     <App />
// //   </BrowserRouter>,
// //   document.getElementById("root")
// // );


// import React from "react";
// import ReactDOM from "react-dom";
// /* Add NavLink to import */
// import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

// /* Add basic styling for NavLinks */
// const linkStyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// };

// /* define the NavBar component */
// function NavBar() {
//   return (
//     <div>
//       <NavLink
//         to="/"
//         /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//         exact
//         /* add styling to Navlink */
//         style={linkStyles}
//         /* add prop for activeStyle */
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/about"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/login"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Login
//       </NavLink>
//     </div>
//   );
// }

// function Home() {
//   return <h1>Home!</h1>;
// }

// function About() {
//   return <h1>This is my about component!</h1>;
// }

// function Login() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// /* add the NavBar component to our App component */
// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Switch>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/login">
//           <Login />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// ReactDOM.render(
//   <BrowserRouter>
//     <NavBar />
//     <Switch>
//       <Route exact path="/about">
//         <About />
//       </Route>
//       <Route exact path="/login">
//         <Login />
//       </Route>
//       <Route exact path="/">
//         <Home />
//       </Route>
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );


// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);