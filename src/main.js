import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

/*Animation på desktop og op */
if (window.innerWidth > 760) {
  inView(".textinview", ({ target }) => {
    animate(target, { translateX: [-600, 0] }, { duration: 1 });
    return () => {
      animate(target, { translateX: [-600, 0] }, { duration: 1 });
    };
  });

  inView(".billedeview", ({ target }) => {
    animate(target, { translateX: [500, 0] }, { duration: 1 });
    return () => {
      animate(target, { translateX: [0, -500] }, { duration: 1 });
    };
  });

  // 1. billede animation
  inView(".rotate-in-center-1", ({ target }) => {
    animate(target, { rotate: -340 }, { duration: 2 });
    return () => {
      animate(target, { rotate: 200 });
    };
  });

  inView(".slide-in-left-1", ({ target }) => {
    animate(target, { translateX: [-600, 800] }, { duration: 1.5 });
    return () => {
      animate(target, { translateX: [-600, 800] }, { duration: 1.5 });
    };
  });

  // 2. billede animation
  inView(".rotate-in-center-2", ({ target }) => {
    animate(target, { rotate: 345 }, { duration: 2.5 });
    return () => {
      animate(target, { rotate: -200 });
    };
  });

  inView(".slide-in-left-2", ({ target }) => {
    animate(target, { translateX: [-600, 300] }, { duration: 2 });
    return () => {
      animate(target, { translateX: [-600, 300] }, { duration: 2 });
    };
  });

  // 3. billede animation
  inView(".rotate-in-center-3", ({ target }) => {
    animate(target, { rotate: -372 }, { duration: 2 });
    return () => {
      animate(target, { rotate: 200 });
    };
  });

  inView(".slide-in-left-3", ({ target }) => {
    animate(target, { translateX: [-600, 750] }, { duration: 1.5 });
    return () => {
      animate(target, { translateX: [-600, 750] }, { duration: 1.5 });
    };
  });

  //   lyd på billeder
  document.querySelector(".lyd1").addEventListener("click", callBackfunktion);

  function callBackfunktion() {
    console.log("callbackfunktion");
    document.querySelector("#swooshlyd").play();
  }
}

// stagger liste elementet, så de fader ind og kommer ind fra siden
// overskriften h4
inView(".staggeranimation", ({ target }) => {
  animate(
    target.querySelectorAll("h4"),
    { opacity: [0, 1] },
    {
      duration: 1,
      delay: stagger(0.8, { start: 0.25 }),
    }
  );
  return () => {
    animate(target, { opacity: [0, 1] }, { duration: 2 });
  };
});

// img elementer
inView(".staggeranimation", ({ target }) => {
  animate(
    target.querySelectorAll("img"),
    { opacity: [0, 1] },
    {
      duration: 3,
      delay: stagger(0.4, { start: 0.6 }),
    }
  );
  return () => {
    animate(target, { opacity: [0, 1] }, { duration: 2 });
  };
});

/* animationer på mobil */
if (window.innerWidth <= 760) {
}

// røde bjæke i toppen
scroll(animate(".progress-bar", { scaleX: [0, 1] }));

// animate(
//   [a, b, c],
//   { x: 100 },
//   { delay: stagger(0.1, { from: "last" }) } // 0.2, 0.1, 0
// );
