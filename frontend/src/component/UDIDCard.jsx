import React from "react";
import "./UDIDCard.css";

const UDIDCard = () => {
  const eligibility = [
    "Applicant should be a Person with Disability (PwD).",
    "Applicant must provide the required personal and identity details.",
    "The disability must be assessed by the competent medical authority.",
    "Applicant must complete the required verification and medical assessment process.",
    "Final disability certification and applicable disability percentage are determined by the competent medical authority according to government guidelines.",
  ];

  const documents = [
    "Aadhaar Card / Identity Proof",
    "Passport-size Photograph",
    "Mobile Number",
    "Address Proof / Address Details",
    "Medical Reports / Disability-related Documents, if available",
    "Existing Disability Certificate, if available",
    "Other supporting documents, if required by the concerned authority",
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Your Application",
      description:
        "Submit the UDID application along with the required information and documents.",
    },
    {
      number: "02",
      title: "Visit the Concerned Hospital / CMO Office",
      description:
        "After submitting the application, visit the concerned hospital or CMO office for verification and further processing.",
    },
    {
      number: "03",
      title: "Application Verification",
      description:
        "The concerned medical authority verifies the application and submitted documents.",
    },
    {
      number: "04",
      title: "Assessment by Specialist Doctors",
      description:
        "Specialist doctor(s) assess the disability and prepare the required medical report.",
    },
    {
      number: "05",
      title: "Review by Medical Board",
      description:
        "The Medical Board reviews the assessment and determines the type and applicable percentage of disability.",
    },
    {
      number: "06",
      title: "UDID Card & Disability Certificate",
      description:
        "After the assessment and verification are completed, the Disability Certificate and UDID Card are processed by the concerned authority.",
    },
  ];

  return (
    <section className="udid-card-section">

      {/* Header */}
      <div className="udid-card-header">

        <div className="udid-card-badge">
          UDID CARD
        </div>

        <h2>
          Want to Apply for a <span>UDID Card?</span>
        </h2>

        <p>
          Learn the required documents and follow the application
          process step by step.
        </p>

      </div>

      {/* Eligibility */}
      <div className="udid-info-container">

        <div className="udid-info-header">
          <div className="udid-info-badge">
            Eligibility
          </div>

          <h2>Eligibility Criteria</h2>

          <p>
            Applicants should meet the following basic requirements
            to apply for a UDID Card.
          </p>
        </div>

        <div className="udid-info-card">

          {eligibility.map((item, index) => (
            <div className="udid-info-item" key={index}>
              <span className="udid-check">
                ✓
              </span>

              <p>{item}</p>
            </div>
          ))}

        </div>

      </div>

      {/* Required Documents */}
      <div className="udid-info-container">

        <div className="udid-info-header">
          <div className="udid-info-badge">
            Documents
          </div>

          <h2>Required Documents</h2>

          <p>
            Keep these documents and details ready while applying
            for a UDID Card.
          </p>
        </div>

        <div className="udid-info-card">

          {documents.map((document, index) => (
            <div className="udid-info-item" key={index}>
              <span className="udid-check">
                ✓
              </span>

              <p>{document}</p>
            </div>
          ))}

        </div>

      </div>

      {/* Application Process */}
      <div className="udid-process-container">

        <div className="udid-info-header">
          <div className="udid-info-badge">
            Application Process
          </div>

          <h2>Steps to Get Your UDID Card</h2>

          <p>
            Follow these steps to complete the UDID Card and
            Disability Certificate process.
          </p>
        </div>

        <div className="udid-timeline">

          {steps.map((step) => (
            <div
              className="udid-timeline-item"
              key={step.number}
            >

              <div className="udid-timeline-number">
                {step.number}
              </div>

              <div className="udid-timeline-content">

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default UDIDCard;