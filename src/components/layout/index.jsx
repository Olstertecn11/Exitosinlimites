import TopBar from "../topbar";
import Navbar from "../navbar";
import Footer from "../footer"
import React from "react";

export default function Layout({ children, isNavInside = false }) {

  let content = children;

  if (isNavInside) {
    content = React.cloneElement(children, {
      NavbarComponent: <Navbar />
    });
  }

  return (
    <div>
      <TopBar />

      {!isNavInside && <Navbar />}

      <main>
        {content}
      </main>
      <Footer />
    </div>
  );
}
