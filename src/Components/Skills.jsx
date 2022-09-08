import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="container py-5">
        <div className="skills-main">
          <h3>My Skills</h3>
          <p>Below are a few skills possess</p>
        </div>

        <div class="container wrapper">
          <div class="skills row">
            <div className="col-md-6">
              <h2>HTML</h2>
              <div class="progress-bar">
                <div class="html">
                  <span>90%</span>
                </div>
              </div>

              <h2>Python</h2>
              <div class="progress-bar">
                <div class="py">
                  <span>60%</span>
                </div>
              </div>

              <h2>Javascipt</h2>
              <div class="progress-bar">
                <div class="js">
                  <span>60%</span>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <h2>CSS</h2>
              <div class="progress-bar">
                <div class="css">
                  <span>85%</span>
                </div>
              </div>

              <h2>React</h2>
              <div class="progress-bar">
                <div class="react">
                  <span>50%</span>
                </div>
              </div>

              <h2>Django</h2>
              <div class="progress-bar">
                <div class="django">
                  <span>65%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
