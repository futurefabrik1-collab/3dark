import UserLandingPage from "@/components/UserLandingPage";

const Producers = () => {
  return (
    <UserLandingPage
      title="Für Produzenten & Creative Directors"
      subtitle="Produktionsreife Umgebungen"
      challenge={{
        title: "Die Herausforderung",
        description: "Die Erfassung realer Umgebungen für Storytelling, VFX und immersive Projekte ist zeitintensiv und kostspielig.",
      }}
      approach={{
        title: "Unser Ansatz",
        description: "Wir liefern volumetrische 3D-Umgebungen, bereit für Unreal, Unity und filmische Pipelines.",
      }}
      benefits={{
        title: "Was dies ermöglicht",
        items: [
          "Schnellere Produktions-Workflows",
          "Hoher visueller Realismus",
          "Flexible Kamera- und Szenenkontrolle",
          "Virtual Production bereit",
          "Keine Standortsuche erforderlich",
          "Wiederholbare Umgebungserfassung",
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
