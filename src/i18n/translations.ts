export type Lang = "en" | "de";

export const translations = {
  nav: {
    en: {
      work: "Work",
      about: "About",
      process: "Process",
      contact: "Contact",
    },
    de: {
      work: "Arbeit",
      about: "Über uns",
      process: "Prozess",
      contact: "Kontakt",
    },
  },

  hero: {
    en: {
      h2: "Digital twins that communicate. Archives that last.",
      h2Highlight: "Archives that last.",
      body: "We turn real environments into high-fidelity digital twins and interactive 3D records — for industrial communication, cultural preservation, and virtual production. Fast turnaround. Web-accessible. Production-ready.",
    },
    de: {
      h2: "Digitale Zwillinge, die kommunizieren. Archive, die bleiben.",
      h2Highlight: "Archive, die bleiben.",
      body: "Wir verwandeln reale Umgebungen in hochauflösende Digitale Zwillinge und interaktive 3D-Dokumente — für industrielle Kommunikation, kulturelle Bewahrung und Virtual Production. Schnelle Umsetzung. Web-zugänglich. Produktionsreif.",
    },
  },

  about: {
    en: {
      sectionLabel: "What We Do",
      intro1:
        "3DARK produces photorealistic digital twins and interactive 3D environments for industrial communication, cultural heritage preservation, and virtual production — capturing real sites at full fidelity and delivering them as web-accessible, engine-ready assets.",
      whoH2: "Who We Are",
    },
    de: {
      sectionLabel: "Was Wir Tun",
      intro1:
        "3DARK erstellt fotorealistische Digitale Zwillinge und interaktive 3D-Umgebungen für industrielle Kommunikation, kulturelle Bewahrung und Virtual Production — reale Standorte in voller Qualität erfasst und als web-zugängliche, engine-ready Assets geliefert.",
      whoH2: "Wer Wir Sind",
    },
  },

  whoItsFor: {
    en: {
      sectionLabel: "Who We Work With",
      h2: "For teams that need more than photographs",
      body: "Whether you are communicating complex infrastructure, capturing environments for production, preserving cultural space, or building immersive assets — we deliver spatial documentation that carries the specificity of the real thing.",
      learnMore: "Learn more",
      users: [
        { title: "Industry & Infrastructure", description: "Digital twins of facilities, plants, and complex infrastructure. Photorealistic spatial records for planning, communication, and stakeholder alignment — integrated with CAD and BIM workflows where required." },
        { title: "Producers & Creative Directors", description: "Real environments for VFX, virtual production, and immersive storytelling. Abandoned architecture, industrial ruins, complex interiors — scanned and delivered production-ready for Unreal, Unity, or Houdini. No location scouting required." },
        { title: "Cultural Institutions & Festivals", description: "Preserve spaces before they close, change, or disappear. Interactive 3D archives accessible from any browser — a navigable record for audiences, researchers, and future generations. A QR code on a poster and anyone can experience what you built." },
        { title: "Marketing & Communications", description: "Turn physical locations into high-fidelity interactive assets for campaigns, presentations, and stakeholder communication. Shareable from a link. No specialist hardware required." },
      ],
    },
    de: {
      sectionLabel: "Für Wen",
      h2: "Für Teams, die mehr als Fotos brauchen",
      body: "Ob Sie komplexe Infrastruktur kommunizieren, Umgebungen für Produktionen erfassen, kulturelle Räume bewahren oder immersive Assets entwickeln — wir liefern räumliche Dokumentation, die die Spezifität des Originals trägt.",
      learnMore: "Mehr erfahren",
      users: [
        { title: "Industrie & Infrastruktur", description: "Digitale Zwillinge von Anlagen, Fabriken und komplexer Infrastruktur. Fotorealistische Raum-Dokumente für Planung, Kommunikation und Stakeholder-Abstimmung — bei Bedarf mit CAD- und BIM-Integration." },
        { title: "Produzenten & Creative Directors", description: "Reale Umgebungen für VFX, Virtual Production und immersives Storytelling. Verlassene Architektur, Industrieruinen, komplexe Innenräume — gescannt und produktionsbereit für Unreal, Unity oder Houdini. Kein Location-Scouting erforderlich." },
        { title: "Kulturinstitutionen & Festivals", description: "Räume bewahren, bevor sie schließen, sich verändern oder verschwinden. Interaktive 3D-Archive, zugänglich aus jedem Browser — ein navigierbares Dokument für Publikum, Forschung und künftige Generationen. Ein QR-Code auf dem Plakat genügt." },
        { title: "Marketing & Kommunikation", description: "Physische Standorte in hochauflösende, interaktive Assets für Kampagnen, Präsentationen und Stakeholder-Kommunikation verwandeln. Per Link teilbar. Keine Spezialhardware erforderlich." },
      ],
    },
  },

  process: {
    en: {
      sectionLabel: "The Process",
      h2: "A pipeline built for real environments",
      body: "We work with spaces as they are — not as they should be. Our capture and reconstruction workflow is designed for difficult conditions: low light, complex geometry, inaccessible surfaces.",
      steps: [
        { title: "Capture", desc: "Multi-camera workflows producing hundreds to thousands of source images, adapted to the specific lighting and spatial conditions of each environment." },
        { title: "Reconstruction", desc: "Gaussian Splatting processing transforms raw image data into a navigable, photorealistic environment that preserves the visual character of the original space." },
        { title: "Optimisation", desc: "Real-time engine optimisation balancing visual fidelity with performance across web, desktop, and presentation environments." },
        { title: "Delivery", desc: "Production-ready assets for web viewers, game engines, VFX pipelines, or custom integrations. Accessible from a browser, without specialist hardware." },
      ],
    },
    de: {
      sectionLabel: "Der Prozess",
      h2: "Eine Pipeline für reale Umgebungen",
      body: "Wir arbeiten mit Räumen, wie sie sind — nicht wie sie sein sollten. Unser Capture- und Rekonstruktions-Workflow ist für schwierige Bedingungen ausgelegt: schlechtes Licht, komplexe Geometrie, schwer zugängliche Oberflächen.",
      steps: [
        { title: "Erfassung", desc: "Multi-Kamera-Workflows produzieren Hunderte bis Tausende von Quellbildern, angepasst an die spezifischen Licht- und Raumbedingungen jeder Umgebung." },
        { title: "Rekonstruktion", desc: "Gaussian-Splatting-Verarbeitung transformiert rohe Bilddaten in eine navigierbare, fotorealistische Umgebung, die den visuellen Charakter des Originalraums bewahrt." },
        { title: "Optimierung", desc: "Echtzeit-Engine-Optimierung, die visuelle Treue und Performance über Web, Desktop und Präsentationsumgebungen ausbalanciert." },
        { title: "Lieferung", desc: "Produktionsreife Assets für Web-Viewer, Game-Engines, VFX-Pipelines oder individuelle Integrationen. Zugänglich aus einem Browser, ohne Spezialhardware." },
      ],
    },
  },

  showreel: {
    en: {
      sectionLabel: "Current Project",
      h2: "iBug Festival — 4 years in 3D",
      body: "Since 2022 we have been the official spatial documentation partner of iBug, one of Europe's leading international street art festivals. Each year we capture the full festival environment in photorealistic 3D — building an interactive archive that lets anyone explore past and present editions of the event.",
    },
    de: {
      sectionLabel: "Aktuelles Projekt",
      h2: "iBug Festival — 4 Jahre in 3D",
      body: "Seit 2022 sind wir der offizielle Partner für räumliche Dokumentation des iBug, eines der führenden internationalen Street-Art-Festivals Europas. Jedes Jahr erfassen wir das gesamte Festival-Gelände in fotorealistischem 3D — und bauen ein interaktives Archiv auf, das es jedem ermöglicht, vergangene und aktuelle Ausgaben des Events zu erkunden.",
    },
  },

  projects: {
    en: {
      sectionLabel: "Project Highlights",
      h2: "A timeline of our work",
    },
    de: {
      sectionLabel: "Projekt-Highlights",
      h2: "Unsere Arbeit im Zeitverlauf",
    },
  },

  contactForm: {
    en: {
      namePlaceholder: "Your name",
      emailPlaceholder: "your.email@example.com",
      messagePlaceholder: "Tell us about your project...",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      messageLabel: "Message",
      submit: "Send message",
      submitting: "Sending...",
      successTitle: "Message sent",
      successDesc: "We will be in touch shortly.",
      errorTitle: "Error",
      errorDesc: "Message could not be sent. Please try again.",
      validationName: "Name must be at least 2 characters.",
      validationEmail: "Please enter a valid email address.",
      validationMessage: "Message must be at least 10 characters.",
    },
    de: {
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "ihre.email@beispiel.de",
      messagePlaceholder: "Erzählen Sie uns von Ihrem Projekt...",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      messageLabel: "Nachricht",
      submit: "Nachricht senden",
      submitting: "Wird gesendet...",
      successTitle: "Nachricht gesendet",
      successDesc: "Wir werden uns bald bei Ihnen melden.",
      errorTitle: "Fehler",
      errorDesc: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      validationName: "Name muss mindestens 2 Zeichen lang sein.",
      validationEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      validationMessage: "Nachricht muss mindestens 10 Zeichen lang sein.",
    },
  },

  cookie: {
    en: {
      title: "Cookie Notice",
      body: "We use cookies to remember your preferences and, with your consent, to analyse site usage via Google Analytics. Your data is processed in accordance with GDPR.",
      accept: "Accept",
      decline: "Decline",
    },
    de: {
      title: "Cookie-Hinweis",
      body: "Wir verwenden Cookies, um Ihre Einstellungen zu speichern und — mit Ihrer Zustimmung — die Website-Nutzung über Google Analytics zu analysieren. Ihre Daten werden gemäß DSGVO verarbeitet.",
      accept: "Akzeptieren",
      decline: "Ablehnen",
    },
  },

  userPages: {
    en: {
      ctaHeading: "Ready to document the space?",
      ctaButton: "Discuss your project",
      industrial: {
        title: "Industry & Infrastructure",
        subtitle: "Spatial Documentation",
        challenge: { title: "The challenge", description: "Industrial environments are complex and difficult to communicate across teams, stakeholders, and public audiences." },
        approach: { title: "Our approach", description: "We create photorealistic spatial records of real sites, integrating planning data where required." },
        benefits: { title: "What this enables", items: ["Clear stakeholder alignment", "Improved planning communication", "Enhanced presentations", "Reduced ambiguity", "Seamless CAD/BIM integration", "Real-time site documentation"] },
      },
      producers: {
        title: "Producers & Creative Directors",
        subtitle: "Production-Ready Environments",
        challenge: { title: "The challenge", description: "Capturing real environments for storytelling, VFX, and immersive projects is time-intensive and expensive." },
        approach: { title: "Our approach", description: "We deliver volumetric 3D environments ready for Unreal, Unity, and cinematic pipelines." },
        benefits: { title: "What this enables", items: ["Faster production workflows", "High visual realism", "Flexible camera and scene control", "Virtual production ready", "No location scouting required", "Repeatable environment capture"] },
      },
      cultural: {
        title: "Cultural Institutions & Festivals",
        subtitle: "Preservation & Interactive Archives",
        challenge: { title: "The challenge", description: "Temporary or at-risk spaces require preservation and audience engagement beyond the physical event." },
        approach: { title: "Our approach", description: "We create interactive spatial records and archive environments that extend the life of cultural spaces." },
        benefits: { title: "What this enables", items: ["Long-term preservation", "Interactive archives", "Immersive audience experiences", "Virtual tours and time travel", "Global educational access", "Cultural heritage documentation"] },
      },
      marketing: {
        title: "Marketing & Communications",
        subtitle: "High-Fidelity Digital Assets",
        challenge: { title: "The challenge", description: "Communicating physical environments through photography and static visuals limits engagement." },
        approach: { title: "Our approach", description: "We turn real spaces into interactive, shareable digital assets for campaigns and stakeholder communication." },
        benefits: { title: "What this enables", items: ["Stronger engagement", "Differentiated presentations", "Interactive storytelling tools", "Social media-ready assets", "Shareable web experiences", "Compelling stakeholder communication"] },
      },
    },
    de: {
      ctaHeading: "Ihr Projekt dokumentieren?",
      ctaButton: "Projekt besprechen",
      industrial: {
        title: "Industrie & Infrastruktur",
        subtitle: "Räumliche Dokumentation",
        challenge: { title: "Die Herausforderung", description: "Industrielle Umgebungen sind komplex und schwer über Teams, Stakeholder und öffentliche Zielgruppen hinweg zu kommunizieren." },
        approach: { title: "Unser Ansatz", description: "Wir erstellen fotorealistische Raum-Dokumente realer Standorte und integrieren bei Bedarf Planungsdaten." },
        benefits: { title: "Was dies ermöglicht", items: ["Klare Stakeholder-Abstimmung", "Bessere Planungskommunikation", "Verbesserte Präsentationen", "Reduzierte Mehrdeutigkeit", "Nahtlose CAD/BIM-Integration", "Echtzeit-Standortdokumentation"] },
      },
      producers: {
        title: "Produzenten & Creative Directors",
        subtitle: "Produktionsreife Umgebungen",
        challenge: { title: "Die Herausforderung", description: "Die Erfassung realer Umgebungen für Storytelling, VFX und immersive Projekte ist zeitintensiv und kostspielig." },
        approach: { title: "Unser Ansatz", description: "Wir liefern volumetrische 3D-Umgebungen, bereit für Unreal, Unity und filmische Pipelines." },
        benefits: { title: "Was dies ermöglicht", items: ["Schnellere Produktions-Workflows", "Hoher visueller Realismus", "Flexible Kamera- und Szenenkontrolle", "Virtual Production bereit", "Keine Standortsuche erforderlich", "Wiederholbare Umgebungserfassung"] },
      },
      cultural: {
        title: "Kulturinstitutionen & Festivals",
        subtitle: "Bewahrung & Interaktive Archive",
        challenge: { title: "Die Herausforderung", description: "Temporäre oder gefährdete Räume erfordern Bewahrung und Publikumsengagement über das physische Event hinaus." },
        approach: { title: "Unser Ansatz", description: "Wir erstellen interaktive Raum-Dokumente und Archivumgebungen, die die Lebensdauer kultureller Räume verlängern." },
        benefits: { title: "Was dies ermöglicht", items: ["Langfristige Bewahrung", "Interaktive Archive", "Immersive Publikumserlebnisse", "Virtuelle Touren und Zeitreisen", "Weltweiter Bildungszugang", "Kulturerbe-Dokumentation"] },
      },
      marketing: {
        title: "Marketing & Kommunikation",
        subtitle: "Hochauflösende Digitale Assets",
        challenge: { title: "Die Herausforderung", description: "Die Kommunikation physischer Umgebungen durch Fotos und statische Visuals begrenzt das Engagement." },
        approach: { title: "Unser Ansatz", description: "Wir verwandeln reale Räume in interaktive, teilbare digitale Assets für Kampagnen und Stakeholder-Kommunikation." },
        benefits: { title: "Was dies ermöglicht", items: ["Stärkeres Engagement", "Differenzierte Präsentationen", "Interaktive Storytelling-Tools", "Social-Media-bereite Assets", "Teilbare Web-Erlebnisse", "Überzeugende Stakeholder-Kommunikation"] },
      },
    },
  },

  projectsList: {
    en: [
      { year: "Ongoing", title: "Abandoned Buildings Leipzig", subtitle: "Digital Archive · Lost Places", description: "Photorealistic documentation and spatial record construction for sites at risk of decay: Alter Hafen Lindenau, the factory at Bahnbogen Leutzsch, Polygraphenwerk, and Karl Krause Fabrik. High-detail records for exhibitions, research, and VR.", tag: "Cultural", showMedia: true },
      { year: "2025", title: "Digitales Archiv Berliner Clubkultur", subtitle: "TU Berlin · Seminar Series", description: "As part of a seminar series with TU Berlin, we help to digitally preserve threatened club spaces. We teach the fundamentals of GS scanning and build a foundation for audiovisual spatial records of a disappearing club culture — as documentation, historical record, and creative resource.", tag: "Cultural", showMedia: false },
      { year: "2025", title: "MACHN Festival", subtitle: "Interactive Navigation System", description: "Real-time 3D festival navigation integrated with live geo-data. A context-aware wayfinding system helping thousands of visitors navigate the festival grounds through an immersive spatial record.", tag: "Cultural", showMedia: true },
      { year: "2024/25", title: "iBug Festival", subtitle: "3D Twin & Time Machine", description: "Multi-year spatial documentation of an international art festival. An interactive time-travel experience allowing visitors to explore current and historical editions of the festival through immersive 3D environments.", tag: "Cultural", showMedia: true },
      { year: "2024", title: "4D Gaussian Splatting", subtitle: "HTWK · Research Project", description: "In collaboration with HTWK, we are developing a 4D Gaussian Splatting pipeline — focused on sparse datasets and novel view synthesis. In parallel, we are working on a compression format to deploy 4DGS assets efficiently in real-time engines.", tag: "Industry", showMedia: false },
      { year: "2024", title: "Interaktive Lerninhalte", subtitle: "Deutsche Bahn · Gamified Training", description: "Interactive formats for adult learning: operational processes and management simulations extended through 3D models, real process logic, and game mechanics. Complex procedures become more vivid, memorable, and practically relevant.", tag: "Industry", showMedia: false },
      { year: "2024", title: "Alice im Wonderland", subtitle: "Kunstkraftwerk · Media Production", description: "Gaussian Splatting became the medium itself: exhibition content was abstracted, reframed, and staged through GS — experimental and attuned to the atmosphere of the show. Technically demanding, creatively rewarding.", tag: "Cultural", showMedia: true },
      { year: "2024", title: "Klärwerk Leipzig", subtitle: "Industrial Digital Twin", description: "Complete spatial record of Leipzig's wastewater treatment facility. High-fidelity data combined with CAD integration for infrastructure planning and communication.", tag: "Industry", showMedia: true },
      { year: "2023", title: "GS Social Media Tour", subtitle: "SXSW · Visual Storytelling", description: "Our first real Gaussian Splatting experiment: GS as a visual medium for short, impactful clips — combined with locally produced, hard-hitting music. The moment it became clear: GS is not just technology, but a new storytelling tool at the intersection of photography, film, and 3D.", tag: "Producers", showMedia: true },
      { year: "2022", title: "Babylon Berlin – Drachenburg", subtitle: "Scan for Set Extension", description: "In the television series Babylon Berlin, the industrialist Alfred Nyssen demonstrates an early rocket prototype. We provided the 3D scan of Drachenburg castle as a VFX asset for the exterior shots.", tag: "Producers", showMedia: true },
    ],
    de: [
      { year: "Laufend", title: "Abandoned Buildings Leipzig", subtitle: "Digitale Archivierung · Lost Places", description: "Fotorealistische Dokumentation und Raum-Dokument-Erstellung von Orten, die vom Verfall bedroht sind: Alter Hafen Lindenau, Fabrik am Bahnbogen Leutzsch, Polygraphenwerk und Karl Krause Fabrik. Hochdetaillierte Zeitzeugnisse für Ausstellungen, Forschung und VR.", tag: "Kultur", showMedia: true },
      { year: "2025", title: "Digitales Archiv Berliner Clubkultur", subtitle: "TU Berlin · Seminarreihe", description: "Im Rahmen einer Seminarreihe mit der TU Berlin helfen wir, bedrohte Clubräume digital zu erhalten. Wir vermitteln Grundlagen des GS-Scannings und schaffen eine Basis für audiovisuelle Raum-Dokumente einer verschwindenden Clubkultur — als Dokumentation, Zeitzeugnis und kreativer Rohstoff.", tag: "Kultur", showMedia: false },
      { year: "2025", title: "MACHN Festival", subtitle: "Interaktives Navigationssystem", description: "Echtzeit-3D-Festivalnavigation integriert mit Live-Geo-Daten. Ein kontextsensitives Wegeleitsystem, das Tausenden von Besuchern hilft, das Festivalgelände durch ein immersives Raum-Dokument zu navigieren.", tag: "Kultur", showMedia: true },
      { year: "2024/25", title: "iBug Festival", subtitle: "3D Twin & Zeitmaschine", description: "Mehrjährige räumliche Dokumentation eines internationalen Kunstfestivals. Eine interaktive Zeitreise-Erfahrung, die es Besuchern ermöglicht, aktuelle und historische Festivalausgaben durch immersive 3D-Umgebungen zu erkunden.", tag: "Kultur", showMedia: true },
      { year: "2024", title: "4D Gaussian Splatting", subtitle: "HTWK · Forschungsprojekt", description: "Gemeinsam mit der HTWK entwickeln wir eine 4D-Gaussian-Splatting-Pipeline — Fokus auf sparse Datensets und Novel View Synthesis. Parallel arbeiten wir an einem Kompressionsformat, um 4DGS-Assets effizient in Realtime-Engines einsetzen zu können.", tag: "Industrie", showMedia: false },
      { year: "2024", title: "Interaktive Lerninhalte", subtitle: "Deutsche Bahn · Gamified Training", description: "Spielerische, interaktive Formate für Erwachsenenlernen: Abläufe und Planspiele werden durch 3D-Modelle, reale Prozesslogik und Game-Mechaniken erweitert. Komplexe Vorgänge werden anschaulicher, merkbarer und praxisnäher.", tag: "Industrie", showMedia: false },
      { year: "2024", title: "Alice im Wonderland", subtitle: "Kunstkraftwerk · Medienproduktion", description: "Gaussian Splatting wurde selbst zum Medium: Inhalte der Ausstellung wurden GS-basiert abstrahiert, neu gerahmt und in Szene gesetzt — aufregend, experimentell und passend zur Atmosphäre. Technisch anspruchsvoll, kreativ maximal dankbar.", tag: "Kultur", showMedia: true },
      { year: "2024", title: "Klärwerk Leipzig", subtitle: "Industrial Digital Twin", description: "Vollständiges Raum-Dokument der Kläranlage Leipzig. Hochauflösende Daten kombiniert mit CAD-Integration für Infrastrukturplanung und -kommunikation.", tag: "Industrie", showMedia: true },
      { year: "2023", title: "GS Social Media Tour", subtitle: "SXSW · Visual Storytelling", description: 'Unser erstes "echtes" Gaussian-Splatting-Experiment: GS als visuelles Medium für kurze, druckvolle Clips — kombiniert mit lokal produzierter Musik. Der Moment, in dem klar wurde: GS ist nicht nur Technik, sondern ein neues Erzählwerkzeug zwischen Fotografie, Film und 3D.', tag: "Produzenten", showMedia: true },
      { year: "2022", title: "Babylon Berlin – Drachenburg", subtitle: "Scan für Set Extension", description: "In der Serie Babylon Berlin demonstriert der Industrielle Alfred Nyssen einen ersten Raketenprototypen. Für die Außenshots der Drachenburg lieferten wir den 3D-Scan als VFX-Asset.", tag: "Produzenten", showMedia: true },
    ],
  },

  contact: {
    en: {
      sectionLabel: "Contact",
      h2: "Tell us about",
      h2Highlight: "your project",
      body: "Complex geometry, difficult lighting, temporary access, uncertain future — these are not obstacles. They are the conditions we work in.",
      location: "Leipzig, Germany",
      footerTagline: "A record of spaces that were never meant to last.",
    },
    de: {
      sectionLabel: "Kontakt",
      h2: "Erzähl uns von",
      h2Highlight: "deinem Projekt",
      body: "Komplexe Geometrie, schwieriges Licht, temporärer Zugang, ungewisse Zukunft — das sind keine Hindernisse. Das sind die Bedingungen, unter denen wir arbeiten.",
      location: "Leipzig, Deutschland",
      footerTagline: "Ein Dokument von Räumen, die nicht dafür gemacht waren, zu bleiben.",
    },
  },
};
