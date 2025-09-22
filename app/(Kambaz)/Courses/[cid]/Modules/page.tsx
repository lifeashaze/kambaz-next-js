export default function Modules() {
  return (
    <div>
      <div>
        <button>Collapse All</button> <button>View Progress</button>{" "}
        <select name="" id="">
          <option value="">Publish All</option>
        </select>{" "}
        <button>+ Module</button>
      </div>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 1 - Course Introduction, Agenda
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 1 - Introduction
                </li>
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 2 - Creating User
                </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to Web Development
                </li>
                <li className="wd-content-item">
                  Creating a HTTP Server with Node.js
                </li>
                <li className="wd-content-item">
                  Creating a React Application
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 2 - W1L2 Title
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Example Content Item 1</li>
                <li className="wd-content-item">
                  Example Content Item 2
                </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                 Example Content Item 1
                </li>
                <li className="wd-content-item">
                  Example Content Item 2
                </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Example Content Item 1
                </li>
                <li className="wd-content-item">
                  Example Content Item 2
                </li>
                <li className="wd-content-item">
                  Example Content Item 3
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">
            Week 2, Lecture 1 - W2L1 Title
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Example Content Item 1</li>
                <li className="wd-content-item">
                  Example Content Item 2
                </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Example Content Item 1
                </li>
                <li className="wd-content-item">
                  Example Content Item 2
                </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Example Content Item 1
                </li>
                <li className="wd-content-item">
                  Example Content Item 2
                </li>
                <li className="wd-content-item">
                  Example Content Item 3
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
