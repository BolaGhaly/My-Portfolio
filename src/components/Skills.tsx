import Skills_Logos from "../utils/Skills_Logos";

const Skills = () => {
  return (
    <section className="skills-section s-3" id="skills">
      <h2 className="section-title">Skills &amp; Tools</h2>
      <div className="skills-container-div">
        <ul className="skills-container-ul">
          {Skills_Logos.map((x, index) => {
            return (
              <li key={index}>
                <div className="skills-container-item">
                  <img src={x.src} alt={x.alt} height={35} width={35} />
                  <p>{x.p}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="skills-p">...and learning more every day!</p>
      </div>
    </section>
  );
};

export default Skills;
