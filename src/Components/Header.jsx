import React from "react";

const Header = () => {
  const handleLinkClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home" onClick={(event) => handleLinkClick(event, "home")}>
        Home
      </a>
      <a href="#about" onClick={(event) => handleLinkClick(event, "about")}>
        About
      </a>
      <a href="#arts" onClick={(event) => handleLinkClick(event, "arts")}>
        My Gallery
      </a>
      <a
        href="#portfolio"
        onClick={(event) => handleLinkClick(event, "portfolio")}
      >
        Portfolio
      </a>
      <a href="#footer" onClick={(event) => handleLinkClick(event, "footer")}>
        Contact
      </a>
    </div>
  );
};

export default Header;