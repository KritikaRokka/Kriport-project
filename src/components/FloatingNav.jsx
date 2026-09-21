import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function FloatingNav() {

  const [open, setOpen] = useState(false);

  const navigate = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setOpen(false);
  };


  return (
    <header className="floating-navigation">

      <button
        className="nav-brand"
        onClick={() => navigate("home")}
      >

        <span className="nav-brand-mark">
          K
        </span>

        <span>
          KRITIKA
        </span>

      </button>


      <nav className={open ? "nav-menu open" : "nav-menu"}>

        <button onClick={() => navigate("home")}>
          HOME
        </button>

        <button onClick={() => navigate("work")}>
          WORK
        </button>

        <button onClick={() => navigate("about")}>
          ABOUT
        </button>

        <button onClick={() => navigate("experience")}>
          EXPERIENCE
        </button>

      </nav>


      <button
        className="nav-talk"
        onClick={() => navigate("contact")}
      >

        <span>
          LET'S TALK
        </span>

        <ArrowUpRight size={15} />

      </button>


      <button
        className="nav-mobile"
        onClick={() => setOpen(!open)}
      >

        {open
          ? <X size={18} />
          : <Menu size={18} />
        }

      </button>

    </header>
  );
}

export default FloatingNav;