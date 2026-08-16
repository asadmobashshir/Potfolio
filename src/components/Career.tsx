import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Team Member</h4>
                <h5>IEEE Jamia Hamdard Student Branch</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Contributed to the creative team, designing visual content and
              branding material for society events and outreach campaigns.
              Collaborated with cross-functional teams to plan and promote
              technical workshops, seminars, and flagship events.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science</h4>
                <h5>Jamia Hamdard · New Delhi</h5>
              </div>
              <h3>2023–27</h3>
            </div>
            <p>
              Pursuing a Bachelor's in Computer Science, building a strong
              foundation in software engineering, data structures, algorithms,
              and modern development practices.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;