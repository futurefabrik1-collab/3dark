import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import illustrationScan from "@/assets/illustration-scan.jpg";

const projects = [
  {
    year: "2023",
    title: "GS Social Media Tour",
    subtitle: "SXSW-Kontext · Visual Storytelling",
    description: 'Unsere erste \u201eechte\u201c Gaussian-Splatting-Erfahrung: GS als visuelles Medium f\u00fcr kurze, starke Clips \u2013 kombiniert mit lokal produzierter, druckvoller Musik. Der Moment, in dem klar wurde: GS ist nicht nur Technik, sondern ein neues Erz\u00e4hlwerkzeug zwischen Fotografie, Film und 3D.',
    tag: "Content",
    showMedia: true,
  },
  {
    year: "2024",
    title: "Digital Twin Klärwerk Leipzig",
    subtitle: "Rosenthal · CAD-Integration · Unreal Engine",
    description: "Detaillierter GS-Scan des Klärwerks Rosenthal, zusammengeführt mit CAD-Daten in Unreal Engine. Zukünftige Baukörper und Veränderungen konnten visuell überzeugend kommuniziert werden. Ergebnis: Marketing-Material plus QR-code-basiertes interaktives 3D-Modell für Vor-Ort und Präsentationen.",
    tag: "Industrie",
    showMedia: true,
  },
  {
    year: "2024",
    title: "Alice im Wonderland",
    subtitle: "Kunstkraftwerk · Medienproduktion",
    description: "Gaussian Splatting wurde selbst zum Medium: Inhalte der Ausstellung wurden GS-basiert abstrahiert, neu gerahmt und in Szene gesetzt – aufregend, experimentell und passend zur Atmosphäre. Technisch anspruchsvoll, kreativ maximal dankbar.",
    tag: "Kultur",
    showMedia: true,
  },
  {
    year: "2024/25",
    title: "3D Digital Twin iBug Festival",
    subtitle: "Alignment \u00b7 Zusammenf\u00fchrung \u00b7 Modell-Bau",
    description: "Gelände und Artworks systematisch als 3DGS digitalisiert und zu einem konsistenten Gesamtmodell zusammengebaut. Die spannende Herausforderung: Wie zeigt man einen großen Twin performant und trotzdem beeindruckend – von Web bis Installation.",
    tag: "Kultur",
    showMedia: true,
  },
  {
    year: "2024/25",
    title: "iBug Time Machine & Digital Archive",
    subtitle: "Unity · First-Person · Zeitreise",
    description: "Begehbare Zeitmaschine in Unity: Frei \u00fcber das Gel\u00e4nde bewegen und nahtlos in 360\u00b0-Touren vergangener Jahrg\u00e4nge eintauchen \u2013 als w\u00fcrde man zwischen Zeitschichten hin- und herspringen. Ein wachsendes, spielerisch erforschbares Archiv der iBug-Geschichte.",
    tag: "Archiv",
    showMedia: true,
  },
  {
    year: "2025",
    title: "MACHN Festival",
    subtitle: "Digital Twin + Live-Orientierung · Festival-App",
    description: "3D Digital Twin als Orientierungssystem auf dem Festivalgelände, verknüpft mit Geo-/Live-Daten. Besucher:innen finden sich kontextbezogen zurecht – Points of Interest, Wege, aktuelle Hotspots. Direkt integriert in die Festival-App als praktisches Navigations- und Erlebnis-Feature.",
    tag: "Events",
    showMedia: true,
  },
  {
    year: "2025",
    title: "Digitales Archiv Berliner Clubkultur",
    subtitle: "TU Berlin · Seminarreihe",
    description: "Im Rahmen einer Seminarreihe mit der TU Berlin helfen wir, bedrohte Clubräume digital zu erhalten. Wir vermitteln Grundlagen des GS-Scannings und schaffen eine Basis für audiovisuelle Digital Twins einer verschwindenden Clubkultur – als Dokumentation, Zeitzeugnis und kreativer Rohstoff.",
    tag: "Forschung",
    showMedia: false,
  },
  {
    year: "Ongoing",
    title: "4D Gaussian Splatting",
    subtitle: "HTWK · Forschungsprojekt",
    description: "Gemeinsam mit der HTWK entwickeln wir eine 4D-Gaussian-Splatting-Pipeline – Fokus auf sparse Datensets und Novel View Synthesis. Parallel arbeiten wir an einem Kompressionsformat, um 4DGS-Assets effizient in Realtime-Engines einsetzen zu können.",
    tag: "Forschung",
    showMedia: false,
  },
  {
    year: "Ongoing",
    title: "Interaktive Lerninhalte",
    subtitle: "Deutsche Bahn · Gamified Training",
    description: "Spielerische, interaktive Formate für Erwachsenenlernen: Rangieren, Abläufe und Planspiele werden durch 3D-Modelle, reale Prozesslogik und Game-Mechaniken erweitert. Komplexe Vorgänge werden anschaulicher, merkbarer und praxisnäher.",
    tag: "Bildung",
    showMedia: false,
  },
  {
    year: "VFX",
    title: "Babylon Berlin – Drachenburg",
    subtitle: "Scan für Set Extension",
    description: "In der Serie Babylon Berlin demonstriert der Industrielle Alfred Nyssen einen ersten Raketenprototypen. Für die Außenshots der Drachenburg lieferten wir den 3D-Scan als VFX-Asset.",
    tag: "Film",
    showMedia: true,
  },
  {
    year: "VFX",
    title: "Alfons Zitterbacke",
    subtitle: "Scan für Set Extension",
    description: "3D-Set-Scanning für VFX-Workflows in der Filmproduktion – schnelle Erfassung, hohe Detailtreue, nahtlose Integration in Post-Production-Pipelines.",
    tag: "Film",
    showMedia: true,
  },
  {
    year: "2020+",
    title: "Abandoned Buildings Leipzig",
    subtitle: "Digitale Archivierung · Lost Places",
    description: "Fotorealistische Dokumentation und Digital-Twin-Aufbau von Orten, die vom Verfall bedroht sind: Alter Hafen Lindenau, Fabrik am Bahnbogen Leutzsch, Polygraphenwerk und Karl Krause Fabrik. Hochdetaillierte Zeitzeugnisse für Ausstellungen, Forschung und VR.",
    tag: "Archiv",
    showMedia: true,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background illustration */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url(${illustrationScan})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Projekt-Highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-xl">
            Timeline unserer Arbeit
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-16">
            {projects.map((project, i) => (
              <motion.div
                key={`${project.title}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * Math.min(i, 6) }}
                className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 md:gap-10"
              >
                {/* Year */}
                <div className="flex items-start">
                  <span className="font-mono text-xs tracking-[0.15em] text-primary bg-background relative z-10 pr-2">
                    {project.year}
                  </span>
                </div>

                {/* Content */}
                <div className={`grid grid-cols-1 ${project.showMedia ? 'lg:grid-cols-2' : ''} gap-8`}>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/30 px-3 py-1">
                        {project.tag}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-primary/80 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Media placeholder */}
                  {project.showMedia && (
                    <div className="aspect-video media-placeholder rounded-sm flex items-center justify-center">
                      <div className="relative z-10 text-center p-4">
                        <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                            <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                          {project.title} · GS Viewer
                        </p>
                        <p className="text-[10px] text-muted-foreground/50 mt-1">
                          Iframe / Video Platzhalter
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
