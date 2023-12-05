import React, { useState, useEffect } from "react";
import style from "../styles/Section/SectionDesign";
import steve from "../assets/img/steve.jpg";
import { useSpring, animated } from "react-spring";

const Section = () => {
  const [isVisible, setIsVisible] = useState(false);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    config: { duration: 1000 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition =
        document.getElementById("apple-section").offsetTop;

      if (scrollPosition > sectionPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <animated.div style={fadeIn}>
      <style.Wrapper id="apple-section">
        <h1>Introduction about Apple Inc.</h1>
        <style.Details>
          <img src={steve} alt="" />
          <p>
            Founded in 1976 by{" "}
            <strong>Steve Jobs, Steve Wozniak, and Ronald Wayne,</strong> Apple
            Inc. has become a global icon in the technology industry.
            Headquartered in Cupertino, California, the company is renowned for
            its innovation, sleek design, and commitment to user-friendly
            technology. Apple's journey began with the creation of the first
            personal computer, the Apple I, and has since evolved into a
            powerhouse that produces a wide range of products, including the
            iconic iPhone, iPad, Macintosh computers, Apple Watch, and Apple TV.
            The company's software ecosystem, led by the macOS and iOS operating
            systems, has cultivated a dedicated user base. <br></br> <br></br>
            Known for its emphasis on design aesthetics and cutting-edge
            technology, Apple has consistently set industry standards. The
            company's retail stores, characterized by their distinctive
            architecture, provide a unique space for customers to experience and
            engage with Apple products. Beyond hardware, Apple has ventured into
            services like Apple Music, Apple TV+, and the App Store, further
            expanding its influence in the digital realm. With a commitment to
            environmental sustainability and a strong focus on privacy, Apple
            continues to shape the future of technology, influencing both
            consumer expectations and industry trends worldwide.<br></br>{" "}
            <br></br>
            Apple's emphasis on design is a hallmark of its brand. The sleek,
            minimalist aesthetic of its products, coupled with an unwavering
            focus on quality materials, has garnered admiration from consumers
            and competitors alike. The Apple Store, with its unique
            architectural designs and retail approach, has become a global
            destination for tech enthusiasts.
          </p>
        </style.Details>
      </style.Wrapper>
    </animated.div>
  );
};

export default Section;
