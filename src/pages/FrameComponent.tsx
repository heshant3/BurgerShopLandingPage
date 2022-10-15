import { FunctionComponent, useEffect } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.frameDiv}>
      <a className={styles.oderButtonA} data-animate-on-scroll>
        <div className={styles.oderNowDiv}>Oder Now</div>
      </a>
      <img
        className={styles.imgIcon}
        alt=""
        src="../img@2x.png"
        data-animate-on-scroll
      />
      <a className={styles.cutTextA} data-animate-on-scroll>
        <b className={styles.b}>$20.25</b>
        <img className={styles.vectorIcon} alt="" src="../vector-3.svg" />
      </a>
      <div className={styles.burgerSlashDiv} data-animate-on-scroll>
        <span>Burger</span>
        <span className={styles.slashSpan}>Slash</span>
      </div>
      <div className={styles.ourNEWAllNaturalWingsAre} data-animate-on-scroll>
        Our NEW all-natural wings are hormone and steroid free, sourced from
        local USA farms. Every order is freshly made, crisped to perfection,
        hand tossed, and served with a side of ranch. Available in Garlic
        Rosemary, Scorchin’ Hot, or Savory BBQ.
      </div>
      <b className={styles.b1} data-animate-on-scroll>
        $15.25
      </b>
      <div className={styles.menuDiv}>
        <div className={styles.logoDiv}>
          <div className={styles.burgerSlashDiv1}>
            <span>Burger</span>
            <span className={styles.slashSpan}>Slash</span>
          </div>
          <img className={styles.vectorIcon1} alt="" src="../vector-1.svg" />
        </div>
        <a className={styles.linkA}>
          <a className={styles.homeA}>
            <img className={styles.vectorIcon2} alt="" src="../vector-2.svg" />
            <div className={styles.homeDiv}>Home</div>
          </a>
          <div className={styles.menuDiv1}>Menu</div>
          <a className={styles.aboutUs}>About us</a>
          <a className={styles.aboutUs}>Contact Us</a>
        </a>
      </div>
      <div className={styles.burgerDiv} data-animate-on-scroll>
        Burger
      </div>
    </div>
  );
};

export default FrameComponent;
