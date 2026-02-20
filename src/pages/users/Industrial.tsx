import UserLandingPage from "@/components/UserLandingPage";

const Industrial = () => {
  return (
    <UserLandingPage
      title="Für Industrie & Infrastruktur-Teams"
      subtitle="Digital Twin Lösungen"
      challenge={{
        title: "Die Herausforderung",
        description: "Industrielle Umgebungen sind komplex und schwer über Teams, Stakeholder und öffentliche Zielgruppen hinweg zu kommunizieren.",
      }}
      approach={{
        title: "Unser Ansatz",
        description: "Wir erstellen fotorealistische Digital Twins realer Standorte und integrieren bei Bedarf Planungsdaten.",
      }}
      benefits={{
        title: "Was dies ermöglicht",
        items: [
          "Klare Stakeholder-Abstimmung",
          "Bessere Planungskommunikation",
          "Verbesserte Präsentationen",
          "Reduzierte Mehrdeutigkeit",
          "Nahtlose Integration mit CAD/BIM-Systemen",
          "Echtzeit-Standortdokumentation",
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
