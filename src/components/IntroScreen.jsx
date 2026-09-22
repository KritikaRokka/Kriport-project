import {
  motion,
} from "framer-motion";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";


function IntroScreen({
  onEnter,
}) {

  return (

    <div
      className="intro-screen"
    >

      <div
        className="intro-noise"
      />

      <div
        className="intro-orb intro-orb-one"
      />

      <div
        className="intro-orb intro-orb-two"
      />


      <motion.div
        className="intro-top"

        initial={{
          opacity: 0,
          y: -20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.7,
        }}
      >

        <span>
          KR / 2026
        </span>

        <span>
          PORTFOLIO
        </span>

      </motion.div>


      <div className="welcome">

        <motion.div
          className="welcome-small"

          initial={{
            opacity: 0,
            y: 15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.2,
          }}
        >

          <Sparkles size={16} />

          <span>
            WELCOME
          </span>

        </motion.div>


        <motion.h1

          initial={{
            opacity: 0,
            scale: 0.8,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          hii<span>.</span>
        </motion.h1>


        <motion.p

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.45,
          }}
        >
          I'm Kritika.
          <br />
          A designer figuring out
          <br />
          how to make ideas move.
        </motion.p>


        <motion.button

          className="enter-button"

          onClick={onEnter}

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.7,
          }}

          whileHover={{
            scale: 1.04,
          }}

          whileTap={{
            scale: 0.97,
          }}
        >

          <span>
            ENTER PORTFOLIO
          </span>

          <span className="enter-icon">

            <ArrowUpRight
              size={18}
            />

          </span>

        </motion.button>

      </div>


      <motion.div
        className="intro-side-text"

        initial={{
          opacity: 0,
          x: -20,
        }}

        animate={{
          opacity: 1,
          x: 0,
        }}

        transition={{
          delay: 1,
        }}
      >

        SCROLL IS OVERRATED.
        <br />
        JUST COME IN.

      </motion.div>


      <motion.div
        className="intro-bottom-text"

        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 1,
        }}
      >

        <span>
          GRAPHIC DESIGN
        </span>

        <span>
          UI / UX
        </span>

        <span>
          FRONTEND
        </span>

      </motion.div>

    </div>
  );
}

export default IntroScreen;