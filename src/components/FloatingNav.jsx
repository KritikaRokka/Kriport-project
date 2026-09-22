import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

function FloatingNav() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const goHomeSection = (id) => {
    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/", {
        state: {
          skipIntro: true,
          scrollTo: id,
        },
      });
    }

    setOpen(false);
  };

  const goHome = () => {
    navigate("/", {
      state: {
        skipIntro: true,
      },
    });

    setOpen(false);
  };

  const goWork = () => {
    navigate("/work");
    setOpen(false);
  };

  const goContact = () => {
    navigate("/contact");
    setOpen(false);
  };

  return (
    <motion.header
      className="floating-navigation"
      initial={{
        opacity: 0,
        y: -35,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.button
        className="nav-brand"
        onClick={goHome}
        whileHover={{
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.96,
        }}
      >
        <span className="nav-logo">
          <img
            src="/assets/logo.png"
            alt="Kritika Rokka"
          />
        </span>

        <span>KRITIKA</span>
      </motion.button>

      <nav
        className={
          open
            ? "nav-menu open"
            : "nav-menu"
        }
      >
        <button onClick={goHome}>
          HOME
        </button>

        <button onClick={goWork}>
          WORK
        </button>

        <button
          onClick={() =>
            goHomeSection("about")
          }
        >
          ABOUT
        </button>

        <button
          onClick={() =>
            goHomeSection("experience")
          }
        >
          EXPERIENCE
        </button>
      </nav>

      <motion.button
        className="nav-talk"
        onClick={goContact}
        whileHover={{
          y: -3,
        }}
        whileTap={{
          scale: 0.96,
        }}
      >
        <span>LET'S TALK</span>
        <ArrowUpRight size={15} />
      </motion.button>

      <button
        className="nav-mobile"
        onClick={() =>
          setOpen(!open)
        }
        aria-label="Toggle navigation"
      >
        {open ? (
          <X size={18} />
        ) : (
          <Menu size={18} />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav-panel"
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
          >
            <button onClick={goHome}>
              HOME
            </button>

            <button onClick={goWork}>
              WORK
            </button>

            <button
              onClick={() =>
                goHomeSection("about")
              }
            >
              ABOUT
            </button>

            <button
              onClick={() =>
                goHomeSection("experience")
              }
            >
              EXPERIENCE
            </button>

            <button onClick={goContact}>
              LET'S TALK ↗
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default FloatingNav;