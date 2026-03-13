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
      h2: "Some spaces are only understood by the people who were in them.",
      h2Highlight: "who were in them.",
      body: "We document environments before they disappear — underground venues, DIY spaces, industrial ruins, ephemeral events. What we capture is not just geometry. It is the specific atmosphere of a room: its dimensions, its surface texture, its quality of light. A record that persists after the space is gone.",
      cta: "Find your project type",
      ctaSecondary: "View our work",
    },
    de: {
      h2: "Manche Räume versteht man nur, wenn man selbst dort war.",
      h2Highlight: "wenn man selbst dort war.",
      body: "Wir dokumentieren Orte, bevor sie verschwinden — Clubs, DIY-Räume, Industrieruinen, ephemere Events. Was wir erfassen, ist nicht nur Geometrie. Es ist die spezifische Atmosphäre eines Raums: seine Maße, seine Oberfläche, seine Qualität des Lichts. Ein Dokument, das bleibt, wenn der Raum längst fort ist.",
      cta: "Projekttyp finden",
      ctaSecondary: "Unsere Arbeit ansehen",
    },
  },

  about: {
    en: {
      sectionLabel: "What We Do",
      intro1:
        "3DARK documents spaces that exist outside conventional frameworks — underground clubs, abandoned industrial sites, temporary installations, locations that have no place in institutional archives. We capture their geometry, their surface detail, and their specific sensory character before they close, are demolished, or simply move on.",
      intro2:
        "We capture real environments with advanced reconstruction pipelines and deliver them as production-ready spatial documents — optimised for web, real-time engines, and presentation contexts.",
      whoH2: "Who We Are",
      whoPara:
        "We came to this work through subcultures and alternative spaces — places built on DIY ethics, operating outside mainstream channels. That context shapes how we approach documentation. We understand the social function of the spaces we record, and that understanding is present in how we work.",
      whoSub:
        "Precise in method. Attentive to atmosphere. We record not just what a space looks like, but what it feels like to stand inside it.",
      methodLabel: "The Method",
      methodH2: "Light, surface, and texture in their actual state",
      methodBody:
        "Gaussian Splatting captures the visual reality of a space with a fidelity that conventional 3D scanning cannot match. The specific quality of light through a dirty skylight. The patina of years of use on a concrete floor. The way a low ceiling changes the acoustic character of a room. These are not decorative details. They are the evidence of a space's social history.",
      benefits: [
        { title: "Underground venues with complex lighting", desc: "Clubs, basements, adapted spaces — where the light defines the atmosphere." },
        { title: "Ephemeral events and installations", desc: "Festivals, pop-ups, guerrilla exhibitions — documented before they dismantle." },
        { title: "Abandoned industrial spaces", desc: "Factory floors, former warehouses, sites in transition." },
        { title: "Film and production environments", desc: "Location assets and set extensions for virtual production workflows." },
        { title: "Subcultural and informal spaces", desc: "Spaces that operate outside institutional documentation frameworks." },
      ],
    },
    de: {
      sectionLabel: "Was Wir Tun",
      intro1:
        "3DARK dokumentiert Räume, die außerhalb konventioneller Strukturen existieren — Clubs, verlassene Industrieareale, temporäre Installationen, Orte ohne institutionellen Rückhalt. Wir erfassen ihre Geometrie, ihre Oberflächendetails und ihren spezifischen sensorischen Charakter — bevor sie schließen, abgerissen werden oder einfach verschwinden.",
      intro2:
        "Wir erfassen reale Umgebungen mit fortschrittlichen Rekonstruktions-Pipelines und liefern sie als produktionsreife Raum-Dokumente — optimiert für Web, Echtzeit-Engines und Präsentationsumgebungen.",
      whoH2: "Wer Wir Sind",
      whoPara:
        "Wir kamen durch Subkulturen und alternative Räume zu dieser Arbeit — Orte, die auf DIY-Ethik aufgebaut sind und außerhalb des Mainstreams operieren. Dieser Kontext prägt unsere Herangehensweise. Wir verstehen die soziale Funktion der Räume, die wir dokumentieren, und dieses Verständnis zeigt sich in unserer Arbeit.",
      whoSub:
        "Präzise in der Methode. Aufmerksam für Atmosphäre. Wir erfassen nicht nur, wie ein Raum aussieht — sondern wie es sich anfühlt, darin zu stehen.",
      methodLabel: "Die Methode",
      methodH2: "Licht, Oberfläche und Textur im tatsächlichen Zustand",
      methodBody:
        "Gaussian Splatting erfasst die visuelle Realität eines Raums mit einer Treue, die konventionelles 3D-Scanning nicht erreicht. Die spezifische Qualität des Lichts durch ein schmutziges Oberlicht. Die Patina jahrelanger Nutzung auf einem Betonboden. Wie eine niedrige Decke den akustischen Charakter eines Raums verändert. Das sind keine dekorativen Details. Es sind die Spuren einer sozialen Geschichte.",
      benefits: [
        { title: "Underground-Venues mit komplexer Beleuchtung", desc: "Clubs, Keller, umgenutzte Räume — wo das Licht die Atmosphäre definiert." },
        { title: "Ephemere Events und Installationen", desc: "Festivals, Pop-ups, Guerrilla-Ausstellungen — dokumentiert, bevor sie abgebaut werden." },
        { title: "Verlassene Industrieräume", desc: "Fabrikhallen, ehemalige Lager, Orte im Wandel." },
        { title: "Film- und Produktionsumgebungen", desc: "Location-Assets und Set-Extensions für Virtual-Production-Workflows." },
        { title: "Subkulturelle und informelle Räume", desc: "Räume, die außerhalb institutioneller Dokumentationsrahmen operieren." },
      ],
    },
  },

  services: {
    en: {
      sectionLabel: "What We Deliver",
      h2: "Digital environments for spaces that resist conventional documentation",
      cards: [
        {
          label: "Spatial Documentation",
          detail: "We capture environments in detail — their geometry, surface texture, and light. Not a stylised rendering, but a precise spatial record. Useful for spaces that are too complex, too dark, or too temporary for conventional photographic documentation.",
        },
        {
          label: "Accessible Archives",
          detail: "The result is a navigable environment, accessible from any browser. No specialist hardware. A QR code, a link — and the space exists again, in the form it held at the moment of capture.",
        },
        {
          label: "Production Assets",
          detail: "Spatial data ready for film and virtual production pipelines. Location scouting for places that no longer exist. Gaussian Splatting environments as VFX plates, set extensions, or game assets — the physical reality of a space, delivered as a production-ready file.",
        },
        {
          label: "Cultural Record",
          detail: "Industrial ruins. Informal venues. Underground events. We document the spaces that communities build and inhabit — and that institutional archives consistently overlook. A record made for those who were there, and accessible to those who come after.",
        },
      ],
    },
    de: {
      sectionLabel: "Leistungen",
      h2: "Digitale Umgebungen für Räume, die konventioneller Dokumentation widerstehen",
      cards: [
        {
          label: "Räumliche Dokumentation",
          detail: "Wir erfassen Umgebungen im Detail — ihre Geometrie, Oberflächentextur und Licht. Kein stilisiertes Rendering, sondern ein präzises räumliches Dokument. Geeignet für Räume, die zu komplex, zu dunkel oder zu temporär für konventionelle fotografische Dokumentation sind.",
        },
        {
          label: "Zugängliche Archive",
          detail: "Das Ergebnis ist eine navigierbare Umgebung, zugänglich aus jedem Browser. Keine Spezialhardware. Ein QR-Code, ein Link — und der Raum existiert wieder, so wie er im Moment der Aufnahme war.",
        },
        {
          label: "Produktions-Assets",
          detail: "Räumliche Daten für Film- und Virtual-Production-Pipelines. Location-Scouting für Orte, die nicht mehr existieren. Gaussian-Splatting-Environments als VFX-Plates, Set-Extensions oder Game-Assets — die physische Realität eines Raums als produktionsreife Datei.",
        },
        {
          label: "Kulturelles Dokument",
          detail: "Industrieruinen. Informelle Venues. Underground-Events. Wir dokumentieren die Räume, die Gemeinschaften bauen und bewohnen — und die institutionelle Archive konsequent übersehen. Ein Dokument für die, die dabei waren, und zugänglich für die, die danach kommen.",
        },
      ],
    },
  },

  whoItsFor: {
    en: {
      sectionLabel: "Who We Work With",
      h2: "For teams that need more than photographs",
      body: "Whether you are communicating complex infrastructure, capturing environments for production, preserving cultural space, or building immersive assets — we deliver spatial documentation that carries the specificity of the real thing.",
      learnMore: "Learn more",
      users: [
        { title: "Industry & Infrastructure", description: "Communicate complex facilities with spatial precision." },
        { title: "Producers & Creative Directors", description: "Capture real environments for immersive storytelling and production." },
        { title: "Cultural Institutions & Festivals", description: "Preserve spaces and build accessible, navigable archives." },
        { title: "Marketing & Communications", description: "Turn physical locations into high-fidelity digital assets." },
      ],
    },
    de: {
      sectionLabel: "Für Wen",
      h2: "Für Teams, die mehr als Fotos brauchen",
      body: "Ob Sie komplexe Infrastruktur kommunizieren, Umgebungen für Produktionen erfassen, kulturelle Räume bewahren oder immersive Assets entwickeln — wir liefern räumliche Dokumentation, die die Spezifität des Originals trägt.",
      learnMore: "Mehr erfahren",
      users: [
        { title: "Industrie & Infrastruktur", description: "Komplexe Anlagen mit räumlicher Präzision kommunizieren." },
        { title: "Produzenten & Creative Directors", description: "Reale Umgebungen für immersives Storytelling und Produktion erfassen." },
        { title: "Kulturinstitutionen & Festivals", description: "Räume bewahren und zugängliche, navigierbare Archive aufbauen." },
        { title: "Marketing & Kommunikation", description: "Physische Standorte in hochauflösende digitale Assets verwandeln." },
      ],
    },
  },

  sectors: {
    en: {
      sectionLabel: "Sectors",
      h2: "Across industries",
      body: "Our documentation practice adapts to the requirements of the sector — not the other way around.",
      items: [
        { name: "Film, TV & Games", description: "Photorealistic location assets, set extensions, and virtual production environments. Spatial data delivered directly into post-production pipelines.", roles: "Producers · VFX Supervisors" },
        { name: "Industry & Infrastructure", description: "Digital twins of facilities, plants, and infrastructure. Integrated with CAD and BIM for planning, maintenance, and communication.", roles: "Project Managers · Planners" },
        { name: "Marketing & Communications", description: "Interactive 3D experiences, browser-accessible viewers, and cinematic renders for campaigns, exhibitions, and events.", roles: "Marketing Managers · Creative Directors" },
        { name: "Culture & Events", description: "Festivals, exhibitions, and historical sites preserved as navigable digital records. Immersive archives and spatial installations.", roles: "Curators · Festival Organisers" },
        { name: "Architecture & Real Estate", description: "Existing buildings, construction sites, and new developments as navigable spatial experiences for clients and collaborators.", roles: "Architects · Developers" },
        { name: "Education & Research", description: "Interactive learning environments, training scenarios, and research documentation in photorealistic spatial detail.", roles: "Universities · Trainers" },
      ],
    },
    de: {
      sectionLabel: "Branchen",
      h2: "Branchenübergreifend",
      body: "Unsere Dokumentationspraxis passt sich den Anforderungen der Branche an — nicht umgekehrt.",
      items: [
        { name: "Film, TV & Games", description: "Fotorealistische Location-Assets, Set-Extensions und Virtual-Production-Environments. Räumliche Daten direkt in Post-Production-Pipelines.", roles: "Produzenten · VFX Supervisors" },
        { name: "Industrie & Infrastruktur", description: "Digitale Zwillinge von Anlagen, Fabriken und Infrastruktur. Integriert mit CAD und BIM für Planung, Wartung und Kommunikation.", roles: "Projektleiter · Planer" },
        { name: "Marketing & Kommunikation", description: "Interaktive 3D-Erlebnisse, Browser-zugängliche Viewer und cineastische Renderings für Kampagnen, Ausstellungen und Events.", roles: "Marketing Manager · Creative Directors" },
        { name: "Kultur & Events", description: "Festivals, Ausstellungen und historische Stätten als navigierbare digitale Dokumente gesichert. Immersive Archive und räumliche Installationen.", roles: "Kuratoren · Festivalorganisatoren" },
        { name: "Architektur & Immobilien", description: "Bestandsgebäude, Baustellen und Neubauten als navigierbare räumliche Erlebnisse für Kunden und Partner.", roles: "Architekten · Entwickler" },
        { name: "Bildung & Forschung", description: "Interaktive Lernumgebungen, Trainingsszenarien und Forschungsdokumentation in fotorealistischer räumlicher Qualität.", roles: "Hochschulen · Trainer" },
      ],
    },
  },

  industries: {
    en: {
      sectionLabel: "Who We Work With",
      h2: "For those who need more than stock photography",
      body: "From underground culture to complex infrastructure — we document what others can't.",
      items: [
        {
          title: "For directors who need real locations",
          description: "Cyberpunk underpasses. Abandoned architecture. Industrial ruins with character. We scan environments your set designer couldn't build — and deliver them production-ready for Unreal, Unity, or Houdini.",
        },
        {
          title: "For clubs, collectives, and cultural spaces",
          description: "Your venue is closing. Your festival was a one-off. Your installation is coming down. We create a navigable spatial record. A QR code on a poster — and anyone can experience what you built.",
        },
        {
          title: "For engineers working with complex infrastructure",
          description: "Power stations. Underground tunnels. Offshore platforms. Infrastructure too large, too hazardous, or too complex for conventional survey. We document what others won't.",
        },
        {
          title: "For creators who need real environments",
          description: "Photogrammetry assets. Gaussian Splatting environments. Volumetric scans. Delivered directly into your pipeline. No stock library. The actual physical reality of the space.",
        },
      ],
    },
    de: {
      sectionLabel: "Für Wen",
      h2: "Für alle, die mehr als Stockfotos brauchen",
      body: "Von Underground-Kultur bis komplexe Infrastruktur — wir dokumentieren, was andere nicht können.",
      items: [
        {
          title: "Für Regisseure, die echte Orte brauchen",
          description: "Cyberpunk-Unterführungen. Verlassene Architektur. Industrieruinen mit Charakter. Wir scannen, was Ihr Set-Designer nie bauen könnte — und liefern es produktionsbereit für Unreal, Unity oder Houdini.",
        },
        {
          title: "Für Clubs, Kollektive und Kulturräume",
          description: "Euer Venue schließt. Euer Festival war einmalig. Eure Installation wird abgebaut. Wir schaffen ein navigierbares räumliches Dokument. Ein QR-Code auf dem Plakat — und jeder kann nacherleben, was ihr geschaffen habt.",
        },
        {
          title: "Für Ingenieure mit komplexer Infrastruktur",
          description: "Kraftwerke. U-Bahn-Tunnel. Offshore-Plattformen. Infrastruktur, die zu groß, zu gefährlich oder zu komplex für klassische Vermessung ist. Wir dokumentieren, was andere scheuen.",
        },
        {
          title: "Für Creators, die reale Umgebungen brauchen",
          description: "Photogrammetrie-Assets. Gaussian-Splatting-Environments. Volumetrische Scans. Direkt in eure Pipeline. Keine Stock-Library. Die tatsächliche physische Realität des Raums.",
        },
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
      sectionLabel: "Showreel",
      h2: "The work, in context",
      body: "A selection of environments we have documented — underground venues, industrial sites, cultural spaces, and production assets.",
    },
    de: {
      sectionLabel: "Showreel",
      h2: "Die Arbeit, im Kontext",
      body: "Eine Auswahl dokumentierter Umgebungen — Clubs, Industriestandorte, Kulturräume und Produktions-Assets.",
    },
  },

  howWeWork: {
    en: {
      sectionLabel: "How We Work",
      body: "We capture real environments with advanced reconstruction pipelines and deliver them as production-ready spatial documents — optimised for web, real-time engines, and presentation contexts.",
    },
    de: {
      sectionLabel: "Wie Wir Arbeiten",
      body: "Wir erfassen reale Umgebungen mit fortschrittlichen Rekonstruktions-Pipelines und liefern sie als produktionsreife Raum-Dokumente — optimiert für Web, Echtzeit-Engines und Präsentationsumgebungen.",
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
      body: "We use cookies to analyse site traffic and optimise your experience. By accepting, you consent to our use of Google Analytics. Your data is processed in accordance with GDPR.",
      accept: "Accept",
      decline: "Decline",
    },
    de: {
      title: "Cookie-Hinweis",
      body: "Wir verwenden Cookies, um den Website-Traffic zu analysieren und Ihr Erlebnis zu optimieren. Mit der Zustimmung erlauben Sie den Einsatz von Google Analytics. Ihre Daten werden gemäß DSGVO verarbeitet.",
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
      ctaHeading: "Den Raum dokumentieren?",
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
      { year: "2023", title: "GS Social Media Tour", subtitle: "SXSW · Visual Storytelling", description: "Our first real Gaussian Splatting experiment: GS as a visual medium for short, impactful clips — combined with locally produced, hard-hitting music. The moment it became clear: GS is not just technology, but a new storytelling tool at the intersection of photography, film, and 3D.", tag: "Content", showMedia: true },
      { year: "2024", title: "Klärwerk Leipzig", subtitle: "Industrial Digital Twin", description: "Complete spatial record of Leipzig's wastewater treatment facility. High-fidelity data combined with CAD integration for infrastructure planning and communication.", tag: "Industrial", showMedia: true },
      { year: "2024", title: "Alice im Wonderland", subtitle: "Kunstkraftwerk · Media Production", description: "Gaussian Splatting became the medium itself: exhibition content was abstracted, reframed, and staged through GS — experimental and attuned to the atmosphere of the show. Technically demanding, creatively rewarding.", tag: "Culture", showMedia: true },
      { year: "2024/25", title: "iBug Festival", subtitle: "3D Twin & Time Machine", description: "Multi-year spatial documentation of an international art festival. An interactive time-travel experience allowing visitors to explore current and historical editions of the festival through immersive 3D environments.", tag: "Culture", showMedia: true },
      { year: "2025", title: "MACHN Festival", subtitle: "Interactive Navigation System", description: "Real-time 3D festival navigation integrated with live geo-data. A context-aware wayfinding system helping thousands of visitors navigate the festival grounds through an immersive spatial record.", tag: "Events", showMedia: true },
      { year: "2025", title: "Digitales Archiv Berliner Clubkultur", subtitle: "TU Berlin · Seminar Series", description: "As part of a seminar series with TU Berlin, we help to digitally preserve threatened club spaces. We teach the fundamentals of GS scanning and build a foundation for audiovisual spatial records of a disappearing club culture — as documentation, historical record, and creative resource.", tag: "Research", showMedia: false },
      { year: "Ongoing", title: "4D Gaussian Splatting", subtitle: "HTWK · Research Project", description: "In collaboration with HTWK, we are developing a 4D Gaussian Splatting pipeline — focused on sparse datasets and novel view synthesis. In parallel, we are working on a compression format to deploy 4DGS assets efficiently in real-time engines.", tag: "Research", showMedia: false },
      { year: "Ongoing", title: "Interaktive Lerninhalte", subtitle: "Deutsche Bahn · Gamified Training", description: "Interactive formats for adult learning: operational processes and management simulations extended through 3D models, real process logic, and game mechanics. Complex procedures become more vivid, memorable, and practically relevant.", tag: "Education", showMedia: false },
      { year: "VFX", title: "Babylon Berlin – Drachenburg", subtitle: "Scan for Set Extension", description: "In the television series Babylon Berlin, the industrialist Alfred Nyssen demonstrates an early rocket prototype. We provided the 3D scan of Drachenburg castle as a VFX asset for the exterior shots.", tag: "Film", showMedia: true },
      { year: "VFX", title: "Alfons Zitterbacke", subtitle: "Scan for Set Extension", description: "3D set scanning for VFX workflows in film production — rapid capture, high detail fidelity, seamless integration into post-production pipelines.", tag: "Film", showMedia: true },
      { year: "2020+", title: "Abandoned Buildings Leipzig", subtitle: "Digital Archive · Lost Places", description: "Photorealistic documentation and spatial record construction for sites at risk of decay: Alter Hafen Lindenau, the factory at Bahnbogen Leutzsch, Polygraphenwerk, and Karl Krause Fabrik. High-detail records for exhibitions, research, and VR.", tag: "Archive", showMedia: true },
    ],
    de: [
      { year: "2023", title: "GS Social Media Tour", subtitle: "SXSW · Visual Storytelling", description: 'Unser erstes "echtes" Gaussian-Splatting-Experiment: GS als visuelles Medium für kurze, druckvolle Clips — kombiniert mit lokal produzierter Musik. Der Moment, in dem klar wurde: GS ist nicht nur Technik, sondern ein neues Erzählwerkzeug zwischen Fotografie, Film und 3D.', tag: "Content", showMedia: true },
      { year: "2024", title: "Klärwerk Leipzig", subtitle: "Industrial Digital Twin", description: "Vollständiges Raum-Dokument der Kläranlage Leipzig. Hochauflösende Daten kombiniert mit CAD-Integration für Infrastrukturplanung und -kommunikation.", tag: "Industrial", showMedia: true },
      { year: "2024", title: "Alice im Wonderland", subtitle: "Kunstkraftwerk · Medienproduktion", description: "Gaussian Splatting wurde selbst zum Medium: Inhalte der Ausstellung wurden GS-basiert abstrahiert, neu gerahmt und in Szene gesetzt — aufregend, experimentell und passend zur Atmosphäre. Technisch anspruchsvoll, kreativ maximal dankbar.", tag: "Kultur", showMedia: true },
      { year: "2024/25", title: "iBug Festival", subtitle: "3D Twin & Zeitmaschine", description: "Mehrjährige räumliche Dokumentation eines internationalen Kunstfestivals. Eine interaktive Zeitreise-Erfahrung, die es Besuchern ermöglicht, aktuelle und historische Festivalausgaben durch immersive 3D-Umgebungen zu erkunden.", tag: "Kultur", showMedia: true },
      { year: "2025", title: "MACHN Festival", subtitle: "Interaktives Navigationssystem", description: "Echtzeit-3D-Festivalnavigation integriert mit Live-Geo-Daten. Ein kontextsensitives Wegeleitsystem, das Tausenden von Besuchern hilft, das Festivalgelände durch ein immersives Raum-Dokument zu navigieren.", tag: "Events", showMedia: true },
      { year: "2025", title: "Digitales Archiv Berliner Clubkultur", subtitle: "TU Berlin · Seminarreihe", description: "Im Rahmen einer Seminarreihe mit der TU Berlin helfen wir, bedrohte Clubräume digital zu erhalten. Wir vermitteln Grundlagen des GS-Scannings und schaffen eine Basis für audiovisuelle Raum-Dokumente einer verschwindenden Clubkultur — als Dokumentation, Zeitzeugnis und kreativer Rohstoff.", tag: "Forschung", showMedia: false },
      { year: "Ongoing", title: "4D Gaussian Splatting", subtitle: "HTWK · Forschungsprojekt", description: "Gemeinsam mit der HTWK entwickeln wir eine 4D-Gaussian-Splatting-Pipeline — Fokus auf sparse Datensets und Novel View Synthesis. Parallel arbeiten wir an einem Kompressionsformat, um 4DGS-Assets effizient in Realtime-Engines einsetzen zu können.", tag: "Forschung", showMedia: false },
      { year: "Ongoing", title: "Interaktive Lerninhalte", subtitle: "Deutsche Bahn · Gamified Training", description: "Spielerische, interaktive Formate für Erwachsenenlernen: Abläufe und Planspiele werden durch 3D-Modelle, reale Prozesslogik und Game-Mechaniken erweitert. Komplexe Vorgänge werden anschaulicher, merkbarer und praxisnäher.", tag: "Bildung", showMedia: false },
      { year: "VFX", title: "Babylon Berlin – Drachenburg", subtitle: "Scan für Set Extension", description: "In der Serie Babylon Berlin demonstriert der Industrielle Alfred Nyssen einen ersten Raketenprototypen. Für die Außenshots der Drachenburg lieferten wir den 3D-Scan als VFX-Asset.", tag: "Film", showMedia: true },
      { year: "VFX", title: "Alfons Zitterbacke", subtitle: "Scan für Set Extension", description: "3D-Set-Scanning für VFX-Workflows in der Filmproduktion — schnelle Erfassung, hohe Detailtreue, nahtlose Integration in Post-Production-Pipelines.", tag: "Film", showMedia: true },
      { year: "2020+", title: "Abandoned Buildings Leipzig", subtitle: "Digitale Archivierung · Lost Places", description: "Fotorealistische Dokumentation und Raum-Dokument-Erstellung von Orten, die vom Verfall bedroht sind: Alter Hafen Lindenau, Fabrik am Bahnbogen Leutzsch, Polygraphenwerk und Karl Krause Fabrik. Hochdetaillierte Zeitzeugnisse für Ausstellungen, Forschung und VR.", tag: "Archiv", showMedia: true },
    ],
  },

  contact: {
    en: {
      sectionLabel: "Contact",
      h2: "Tell us about",
      h2Highlight: "the space",
      body: "Complex geometry, difficult lighting, temporary access, uncertain future — these are not obstacles. They are the conditions we work in.",
      location: "Leipzig, Germany",
      footerTagline: "A record of spaces that were never meant to last.",
    },
    de: {
      sectionLabel: "Kontakt",
      h2: "Erzähl uns von",
      h2Highlight: "dem Raum",
      body: "Komplexe Geometrie, schwieriges Licht, temporärer Zugang, ungewisse Zukunft — das sind keine Hindernisse. Das sind die Bedingungen, unter denen wir arbeiten.",
      location: "Leipzig, Deutschland",
      footerTagline: "Ein Dokument von Räumen, die nie dafür gedacht waren zu bleiben.",
    },
  },
};
