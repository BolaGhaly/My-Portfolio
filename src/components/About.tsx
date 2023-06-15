const About = () => {
  return (
    <section className="about-section s-2" id="about">
      <h2 className="section-title">About Me</h2>
      <p>
        I am a computer science graduate with a bachelor's degree from The City
        University of New York,{" "}
        <a
          href="https://www.csi.cuny.edu/"
          target="_blank"
          rel="noreferrer"
          className="about-links"
        >
          College of Staten Island
        </a>
        . As an experienced full stack developer with a strong focus on frontend
        development, I am passionate about creating engaging, user-friendly, and
        visually appealing web applications. With expertise in HTML, CSS,
        JavaScript, React, and other frontend technologies, I strive to deliver
        exceptional user interfaces and experiences through clean and scalable
        code. I love being intellectually curious and am always looking for
        opportunities to learn and grow my technical skills. Take a look at{" "}
        <a
          href="https://github.com/BolaGhaly"
          target="_blank"
          rel="noreferrer"
          className="about-links"
        >
          my work
        </a>{" "}
        and let's{" "}
        <a
          href="https://www.linkedin.com/in/bolaghaly/"
          target="_blank"
          rel="noreferrer"
          className="about-links"
        >
          connect
        </a>{" "}
        and{" "}
        <a href="#contact-me" className="about-links">
          collaborate
        </a>
        !
      </p>
    </section>
  );
};

export default About;
