import UserLandingPage from "@/components/UserLandingPage";

const Cultural = () => {
  return (
    <UserLandingPage
      title="Für Kulturinstitutionen & Festivals"
      subtitle="Bewahrung & Interaktive Archive"
      challenge={{
        title: "Die Herausforderung",
        description: "Temporäre oder gefährdete Räume erfordern Bewahrung und Publikumsengagement über das physische Event hinaus.",
      }}
      approach={{
        title: "Unser Ansatz",
        description: "Wir erstellen interaktive Digital Twins und Archivumgebungen, die die Lebensdauer kultureller Räume verlängern.",
      }}
      benefits={{
        title: "Was dies ermöglicht",
        items: [
          "Langfristige Bewahrung",
          "Interaktive Archive",
          "Immersive Publikumserlebnisse",
          "Virtuelle Touren und Zeitreisen",
          "Weltweiter Bildungszugang",
          "Kulturerbe-Dokumentation",
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
