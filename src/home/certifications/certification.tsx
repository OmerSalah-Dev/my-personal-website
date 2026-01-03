
import "./certification.css";
import coursesData from "./data/courses";
import { icons } from "./data/icons";

// Helper function to render stars based on rating
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <span key={i} className="star-filled">
          {icons.star}
        </span>
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <span key={i}>
          {icons.starHalf}
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="star-empty">
          {icons.starEmpty}
        </span>
      );
    }
  }
  return stars;
};

function Certifications() {

  return (
    <div className="certifications-main-container scroll-target" id="portfolio">
      <div className="certifications-header">
        <h2>Training & Certifications</h2>
        <p>Real courses, real projects, real skills that built my foundation</p>
      </div>
      <div className="grid-card-container">
        {coursesData.map((course) => (
          <div className="certifications-list-container" key={course.id}>
            <div className="certification-provider-badge">
                {course.providerIcon}
              <div className="provider-name">
                {course.provider}
              </div>
              
            </div>

            <div className={`certification-container-left ${course.glowClass}`}>
              <div className="grid-pattern"></div>
              <div className="glow-orb"></div>
              <div className="certification-icon icon-glow animate-float">{course.logo}</div>
              <h4>{course.category}</h4>
              <p>{course.categoryDescription}</p>
            </div>

            <div className="certification-container-right">
              <h4>{course.title}</h4>
              <p>{course.description}</p>

              <div className="rating-main-container">
                <div className="rating">
                  <span className="rating-score">{course.rating}</span>
                  <span className="rating-stars-container">
                    {renderStars(course.rating)}
                  </span>
                  <span className="rating-reviews">{course.reviews}</span>
                </div>
              </div>

              <hr className="certification-divider" />

              <div className="certification-footer">
                <div className="provider">
                  {course.providerIcon}
                  <span>{course.provider}</span>
                </div>
                <div className="duration">
                  {icons.duration}
                  <span>{course.duration}</span>
                </div>
                <div className="date-completed">
                  {icons.date}
                  <span>{course.dateCompleted}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
