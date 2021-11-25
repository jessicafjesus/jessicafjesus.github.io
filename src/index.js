import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//esta parte a comentario é a que importa, mas nao tive tempo de fazer tudo e deixar sem erros
//link: https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {
//   Navigation,
//   Footer,
//   Home,
//   About,
//   Contact,
//   Blog,
//   Posts,
//   Post,
// } from "./components";

// ReactDOM.render(
//   <Router>
//     <Navigation />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/blog" element={<Blog />}>
//         <Route path="" element={<Posts />} />
//         <Route path=":postSlug" element={<Post />} />
//       </Route>
//     </Routes>
//     <Footer />
//   </Router>,

//   document.getElementById("root")
// );

// serviceWorker.unregister();