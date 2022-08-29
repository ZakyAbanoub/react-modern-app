import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import styles from "./style";

import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

const App = () => {
  useEffect(() => {
    //Navbar
    gsap.from(".logo", { y: -300, rotate: 365, duration: 1 });
    gsap.from(".nav-link", {
      x: 800,
      stagger: 0.25,
      duration: 0.5,
    });

    //Hero
    let tl = gsap.timeline();
    tl.from(".home__first-section", {
      x: -1000,
      duration: 1,
    });
    tl.from(".home__second-section__image", {
      x: 1000,
      duration: 1,
    });

    //Business
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".business__first-section",
        toggleActions: "restart restart resume pause",
      },
    });
    t2.from(".business__first-section", {
      x: -1000,
      duration: 1,
    });
    t2.from(".business__second-section", {
      x: 1000,
      duration: 1,
    });

    //Billing
    let t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".billing__first-section",
        // toggleActions: "restart restart resume pause",
      },
    });
    t3.from(".billing__second-section", {
      x: 1000,
      duration: 1,
    });
    t3.from(".billing__first-section", {
      x: -1000,
      duration: 1,
    });

    //Card Deal
    let t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-deal__first-section",
        // toggleActions: "restart restart resume pause",
      },
    });
    t4.from(".card-deal__first-section", {
      opacity: 0,
      y: 100,
      duration: 1,
    });
    t4.from(".card-deal__second-section", {
      opacity: 0,
      y: 100,
      duration: 1,
    });
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar /> //Animation Done
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero /> //Animation Done
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business /> //Animation Done
          <Billing /> //Animation Done
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
