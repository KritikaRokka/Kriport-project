import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FloatingNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    // If we're already on the landing page
    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // Go back to landing page first
      navigate("/");

      // Wait for the landing page to render
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }

    setOpen(false);
  };

  const goToContact = () => {
    navigate("/contact");
    setOpen(false);
  };

  return (
    <header className="floating-navigation">

      {/* LOGO */}
      <button
        className="nav-brand"
        onClick={() => scrollToSection("home")}
      >
        <span className="nav-brand-mark">K</span>
        <span>KRITIKA</span>
      </button>

      {/* NAVIGATION */}
      <nav className={open ? "nav-menu open" : "nav-menu"}>

        <button onClick={() => scrollToSection("home")}>
          HOME
        </button>

        <button onClick={() => scrollToSection("work")}>
          WORK
        </button>

        <button onClick={() => scrollToSection("about")}>
          ABOUT
        </button>

        <button onClick={() => scrollToSection("experience")}>
          EXPERIENCE
        </button>

      </nav>

      {/* LET'S TALK */}
      <button
        className="nav-talk"
        onClick={goToContact}
      >
        <span>LET'S TALK</span>
        <ArrowUpRight size={15} />
      </button>

      {/* MOBILE MENU */}
      <button
        className="nav-mobile"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? (
          <X size={18} />
        ) : (
          <Menu size={18} />
        )}
      </button>

    </header>
  );
}

export default FloatingNav;
