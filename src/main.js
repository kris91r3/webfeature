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
}

/* animationer på mobil */
if (window.innerWidth <= 760) {
}

// røde bjæke i toppen
scroll(animate(".progress-bar", { scaleX: [0, 1] }));
