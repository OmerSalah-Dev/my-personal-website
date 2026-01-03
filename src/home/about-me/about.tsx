import "./about.css";
import { BookIcon } from "./icons";

interface TimelineItem {
  year: string;
  title: string;
  tags: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "Aug 2024",
    title: "Foundations",
    tags: ["HTML", "CSS", "Responsive Design"],
  },
  {
    year: "Oct 2024",
    title: "JavaScript",
    tags: ["JavaScript", "ES6+"],
  },
  {
    year: "Mar 2025",
    title: "Backend",
    tags: ["Node.js", "Express", "MongoDB", "REST APIs", "GraphQL"],
  },
];

function About() {
  return (
    <div className="main-about-container scroll-target" id="about">
      <div className="about-header">
        <h2>About Me</h2>
        <p>Full-Stack Developer</p>
      </div>
      <div className="my-story-container">
        <h3>{BookIcon} Overview</h3>
        <div className="my-story-text">
          <p>
            Hi, I'm Omer. I build responsive web applications with 
            JavaScript, Node.js, and MongoDB.
          </p>

          <p>
            I've completed intensive training in frontend and backend 
            development, building projects like e-commerce platforms, 
            interactive UIs, and RESTful APIs with authentication 
            and database management.
          </p>


          <p>
           Self-taught developer with a focus on clean, 
           functional code.
          </p>
        </div>
        <div className="timeline-container">
          {timelineData.map((item) => {
            return (
              <div className="timeline-item" key={item.title}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.year}</span>
                  <h4>{item.title}</h4>
                  <div className="timeline-tags-container">
                    {item.tags.map((tag) => (
                      <span className="timeline-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;



          // <p>Hey! I'm Omer, and I build web applications.</p>

          // <p>
          //   A year ago, I wrote my first line of code. Today, I build full-stack
          //   applications using modern JavaScript and Node.js. The journey from
          //   first tutorial to deployed projects has been intense, challenging,
          //   and incredibly rewarding.
          // </p>

          // <p>
          //   These days, my work centers on developing real-world applications —
          //   from e-commerce platforms to social features and project tools —
          //   with each project helping me write better code and think more
          //   deeply.
          // </p>

          // <p>
          //   I’m self-taught and focused on getting better with every project.
          // </p>