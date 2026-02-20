import UserLandingPage from "@/components/UserLandingPage";

const Cultural = () => {
  return (
    <UserLandingPage
      title="For Cultural Institutions & Festivals"
      subtitle="Preservation & Interactive Archives"
      challenge={{
        title: "The Challenge",
        description: "Temporary or endangered spaces require preservation and audience engagement beyond the physical event.",
      }}
      approach={{
        title: "Our Approach",
        description: "We build interactive digital twins and archival environments that extend the lifespan of cultural spaces.",
      }}
      benefits={{
        title: "What This Enables",
        items: [
          "Long-term preservation",
          "Interactive archives",
          "Immersive audience experiences",
          "Virtual tours and time-travel",
          "Educational access worldwide",
          "Heritage documentation",
        ],
      }}
      icon={
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
          <rect x="9" y="12" width="30" height="27" stroke="currentColor" strokeWidth="2" />
          <path d="M9 12L24 6l15 6M18 21h12M18 27h12M18 33h6" stroke="currentColor" strokeWidth="2" />
        </svg>
      }
    />
  );
};

export default Cultural;
