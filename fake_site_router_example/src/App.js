import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  const estimatedTime = "30 seconds";

  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <p>
        Welcome to our exciting adventure! Get ready to explore, learn, and have
        fun on our website. It'll take you an estimated {estimatedTime} to read
        it all.
      </p>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About Us</h1>
      <p>This website is fake</p>
      <p>
        Our website was made to show an example of Router function in React.
      </p>
    </>
  );
}

function HelloWorld() {
  return (
    <>
      <h1>Hello World</h1>
      <p>Goodbye!</p>
    </>
  );
}

function ContactUS() {
  return (
    <>
      <h1>Contact us</h1>
      <p>Email: secret</p>
      <p>Feel free to contact us</p>
    </>
  );
}

function App() {
  // Declare the pages variable using const
  const pages = [
    {
      f: Home,
      to: "",
      text: "Home"
    },
    {
      f: About,
      to: "/about",
      text: "About"
    },
    {
      f: HelloWorld,
      to: "/hello_world",
      text: "Hello World"
    },
    {
      f: ContactUS,
      to: "/contact_us",
      text: "Contact Us"
    }
  ];

  return (
    <Router>
      <nav>
        {pages.map((page, i) => (
          <li key={i}>
            <Link to={page.to}>{page.text}</Link>
          </li>
        ))}
      </nav>

      <Routes>
        {pages.map((page, i) => (
          <Route key={i} path={page.to} element={<page.f />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
