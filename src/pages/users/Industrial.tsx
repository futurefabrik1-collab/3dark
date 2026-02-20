import UserLandingPage from "@/components/UserLandingPage";

const Industrial = () => {
  return (
    <UserLandingPage
      title="For Industrial & Infrastructure Teams"
      subtitle="Digital Twin Solutions"
      challenge={{
        title: "The Challenge",
        description: "Industrial environments are complex and difficult to communicate across teams, stakeholders and public audiences.",
      }}
      approach={{
        title: "Our Approach",
        description: "We create photorealistic digital twins of real sites and integrate planning data where required.",
      }}
      benefits={{
        title: "What This Enables",
        items: [
          "Clear stakeholder alignment",
          "Better planning communication",
          "Improved presentations",
          "Reduced ambiguity",
          "Seamless integration with CAD/BIM systems",
          "Real-time site documentation",
        ],
      }}
      icon={
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
          <rect x="6" y="18" width="36" height="24" stroke="currentColor" strokeWidth="2" />
          <path d="M12 18V9h6v9M24 18V12h6v6M36 18V15" stroke="currentColor" strokeWidth="2" />
        </svg>
      }
    />
  );
};

export default Industrial;
