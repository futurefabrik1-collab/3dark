import UserLandingPage from "@/components/UserLandingPage";

const Producers = () => {
  return (
    <UserLandingPage
      title="For Producers & Creative Directors"
      subtitle="Production-Ready Environments"
      challenge={{
        title: "The Challenge",
        description: "Capturing real-world environments for storytelling, VFX and immersive projects is time-intensive and costly.",
      }}
      approach={{
        title: "Our Approach",
        description: "We deliver volumetric 3D environments ready for Unreal, Unity and cinematic pipelines.",
      }}
      benefits={{
        title: "What This Enables",
        items: [
          "Faster production workflows",
          "High visual realism",
          "Flexible camera and scene control",
          "Virtual production ready",
          "No location scouting required",
          "Repeatable environment capture",
        ],
      }}
      icon={
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
          <rect x="6" y="15" width="36" height="21" rx="1" stroke="currentColor" strokeWidth="2" />
          <path d="M18 24l9 6V18l-9 6z" fill="currentColor" />
        </svg>
      }
    />
  );
};

export default Producers;
