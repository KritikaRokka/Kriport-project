import { useEffect, useState } from "react";

function CustomCursor() {

  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {

    const move = (event) => {

      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

    };


    const handleOver = (event) => {

      const interactive =
        event.target.closest(
          "button, a, .project-card, .skill"
        );

      setHovering(Boolean(interactive));
    };


    window.addEventListener("mousemove", move);

    document.addEventListener(
      "mouseover",
      handleOver
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        move
      );

      document.removeEventListener(
        "mouseover",
        handleOver
      );

    };

  }, []);


  return (
    <>
      <div
        className={
          hovering
            ? "custom-cursor hover"
            : "custom-cursor"
        }
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      <div
        className="cursor-dot"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

    </>
  );
}

export default CustomCursor;