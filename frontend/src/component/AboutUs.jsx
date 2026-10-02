import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">

      {/* Header */}
      <div className="about-header">

        <span className="about-badge">
          🌱 About Saksham Setu
        </span>

        <h1>
          Empowering Through
          <span> Information & Awareness</span>
        </h1>

        <p>
          Saksham Setu is an information-based platform created to make
          disability-related information easier to understand and access.
        </p>

      </div>


      {/* Main Content */}
      <div className="about-content">

        <div className="about-block">
          <h2>About Saksham Setu</h2>

          <p>
            Saksham Setu is an information-based platform created to make
            disability-related information easier to understand and access.
            The platform brings important information about different types
            of disabilities, accessibility, NGOs, and the UDID Card together
            in one place.
          </p>

          <p>
            Our goal is to provide clear and useful information that can help
            persons with disabilities, their families, caregivers, and anyone
            interested in disability awareness.
          </p>
        </div>


        <div className="about-block">
          <h2>Our Mission</h2>

          <p>
            Our mission is to make reliable disability-related information
            simple, accessible, and easy to understand.
          </p>

          <p>
            Saksham Setu aims to help users learn about different disabilities,
            available support systems, accessibility, and important resources
            without having to search through multiple sources.
          </p>
        </div>


        <div className="about-block">
          <h2>Our Vision</h2>

          <p>
            Our vision is to contribute towards a more inclusive and
            accessible society where people with disabilities can easily
            find the information they need and understand the support
            available to them.
          </p>
        </div>


        <div className="about-block">
          <h2>What We Provide</h2>

          <ul>
            <li>
              <strong>Different Disabilities:</strong> Information about
              visual, hearing, speech, mobility, and intellectual disabilities.
            </li>

            <li>
              <strong>UDID Card:</strong> Information about required documents
              and the UDID application process.
            </li>

            <li>
              <strong>NGOs:</strong> Information about organizations working
              for persons with disabilities.
            </li>

            <li>
              <strong>Accessibility & Awareness:</strong> Information that
              promotes accessibility, inclusion, and better understanding
              of disabilities.
            </li>
          </ul>
        </div>


        <div className="about-block">
          <h2>Who We Aim to Help</h2>

          <p>
            Saksham Setu is designed for persons with disabilities, parents
            and family members, caregivers, students, educators, volunteers,
            NGOs, and anyone interested in learning more about disability
            and accessibility.
          </p>
        </div>

      </div>


      {/* Bottom Message */}
      <div className="about-bottom">
        <h2>
          Information that connects, awareness that empowers.
        </h2>

        <p>
          Together, we can help create a more inclusive and accessible society.
        </p>
      </div>

    </section>
  );
};

export default AboutUs;