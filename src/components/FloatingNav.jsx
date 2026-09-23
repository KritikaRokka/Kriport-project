import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    setOpen(false);

    if (location.pathname === "/") {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return;
    }

    navigate("/");
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  const goToWork = () => {
    setOpen(false);
    navigate("/work");
  };

  const goToContact = () => {
    setOpen(false);
    navigate("/contact");
  };

  const isInnerPage = location.pathname !== "/";

  return (
    <header className={`floating-navigation ${isInnerPage ? "nav-inner" : ""}`}>
      <button
        className="nav-brand"
        onClick={() => scrollToSection("home")}
        aria-label="Go to home"
      >
        {!logoFailed ? (
          <img
            className="nav-logo-image"
            src="/logo.png"
            alt="Kritika logo"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <span className="nav-brand-mark">KR</span>
        )}

        <span>KRITIKA</span>
      </button>

      <nav className={open ? "nav-menu open" : "nav-menu"}>
        <button onClick={() => scrollToSection("home")}>HOME</button>
        <button onClick={goToWork}>WORK</button>
        <button onClick={() => scrollToSection("about")}>ABOUT</button>
        <button onClick={() => scrollToSection("experience")}>
          EXPERIENCE
        </button>
      </nav>

      <button className="nav-talk" onClick={goToContact}>
        <span>LET'S TALK</span>
        <ArrowUpRight size={15} />
      </button>

      <button
        className="nav-mobile"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
    </header>
  );
}

export default FloatingNav;
