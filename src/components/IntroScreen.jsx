import { ArrowUpRight, Sparkles } from "lucide-react";

function IntroScreen({ onEnter }) {
  return (
    <div className="intro-screen">

      <div className="intro-noise" />

      <div className="intro-orb intro-orb-one" />
      <div className="intro-orb intro-orb-two" />


      <div className="intro-top">

        <span>
          KR / 2026
        </span>

        <span>
          PORTFOLIO
        </span>

      </div>


      <div className="welcome">

        <div className="welcome-small">

          <Sparkles size={16} />

          <span>
            WELCOME
          </span>

        </div>


        <h1>
          hii<span>.</span>
        </h1>


        <p>
          I'm Kritika.
          <br />

          A designer figuring out
          <br />

          how to make ideas move.
        </p>


        <button
          className="enter-button"
          onClick={onEnter}
        >

          <span>
            ENTER PORTFOLIO
          </span>

          <span className="enter-icon">
            <ArrowUpRight size={18} />
          </span>

        </button>

      </div>


      <div className="intro-side-text">
        SCROLL IS OVERRATED.
        <br />
        JUST COME IN.
      </div>


      <div className="intro-bottom-text">

        <span>
          GRAPHIC DESIGN
        </span>

        <span>
          UI / UX
        </span>

        <span>
          FRONTEND
        </span>

      </div>

    </div>
  );
}

export default IntroScreen;