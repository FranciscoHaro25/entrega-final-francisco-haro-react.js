import React, { useEffect, useState } from "react";

function Elemento() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        style={{
          height: 1000,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
        }}
      >
        <h2>Posición del Scroll</h2>
        <p>Posición actual: {scrollPosition}</p>
      </section>
    </>
  );
}

export default Elemento;
