import UserLandingPage from "@/components/UserLandingPage";

const Marketing = () => {
  return (
    <UserLandingPage
      title="Für Marketing & Kommunikations-Verantwortliche"
      subtitle="Wirkungsvolle Digitale Assets"
      challenge={{
        title: "Die Herausforderung",
        description: "Die Kommunikation physischer Umgebungen durch Fotos und statische Visuals begrenzt das Engagement.",
      }}
      approach={{
        title: "Unser Ansatz",
        description: "Wir verwandeln reale Räume in interaktive, teilbare digitale Assets für Kampagnen und Stakeholder-Kommunikation.",
      }}
      benefits={{
        title: "Was dies ermöglicht",
        items: [
          "Stärkeres Engagement",
          "Differenzierte Präsentationen",
          "Interaktive Storytelling-Tools",
          "Social-Media-bereite Assets",
          "Teilbare Web-Erlebnisse",
          "Überzeugende Stakeholder-Kommunikation",
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
