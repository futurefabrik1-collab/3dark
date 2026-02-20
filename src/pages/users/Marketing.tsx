import UserLandingPage from "@/components/UserLandingPage";

const Marketing = () => {
  return (
    <UserLandingPage
      title="For Marketing & Communication Leaders"
      subtitle="High-Impact Digital Assets"
      challenge={{
        title: "The Challenge",
        description: "Communicating physical environments through photos and static visuals limits engagement.",
      }}
      approach={{
        title: "Our Approach",
        description: "We transform real spaces into interactive, shareable digital assets for campaigns and stakeholder communication.",
      }}
      benefits={{
        title: "What This Enables",
        items: [
          "Stronger engagement",
          "Differentiated presentations",
          "Interactive storytelling tools",
          "Social media ready assets",
          "Shareable web experiences",
          "Compelling stakeholder communication",
        ],
      }}
      icon={
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
          <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="2" />
          <path d="M24 12v12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      }
    />
  );
};

export default Marketing;
