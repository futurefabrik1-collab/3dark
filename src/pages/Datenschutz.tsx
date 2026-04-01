import { Link } from "react-router-dom";

const Datenschutz = () => (
  <div className="min-h-screen bg-background text-foreground">
    {/* Back bar */}
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border px-6 py-4 flex items-center gap-4">
      <Link to="/" className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors">
        ← 3DARK
      </Link>
    </div>

    <div className="max-w-2xl mx-auto px-6 pt-28 pb-24">
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Legal</p>
      <h1 className="text-3xl font-serif text-foreground mb-12">Datenschutzerklärung</h1>

      <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">1. Datenschutz auf einen Blick</h2>
          <p className="font-medium text-foreground/70 mb-2">Allgemeine Hinweise</p>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
          <p className="font-medium text-foreground/70 mt-4 mb-2">Datenerfassung auf dieser Website</p>
          <p className="font-medium text-foreground/60 mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>
          <p className="font-medium text-foreground/60 mt-4 mb-1">Wie erfassen wir Ihre Daten?</p>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p className="mt-3">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">2. Hosting</h2>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <p className="mt-3">
            Vercel Inc.<br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723<br />
            USA
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <p className="font-medium text-foreground/70 mb-2">Datenschutz</p>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className="font-medium text-foreground/70 mt-4 mb-2">Hinweis zur verantwortlichen Stelle</p>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p className="mt-3">
            Burnett &amp; Manhardt GbR<br />
            (handelnd als Future Fabrik)<br />
            Mark Burnett &amp; Florian Manhardt<br />
            Klingenstraße 22<br />
            04229 Leipzig<br /><br />
            Telefon: 0049 (0) 17634584847<br />
            E-Mail:{" "}
            <a href="mailto:contact@futurefabrik.com" className="text-primary hover:underline">
              contact@futurefabrik.com
            </a>
          </p>
          <p className="mt-3">
            3DARK ist ein Dienst der Future Fabrik (Burnett &amp; Manhardt GbR).
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">4. Kontaktformular</h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="mt-3">
            Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
          </p>
          <p className="mt-3">
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">5. Cookies</h2>
          <p>
            Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Wir setzen Cookies ein, um unser Angebot nutzerfreundlicher zu gestalten (z. B. Sprachpräferenzen und Theme-Einstellungen).
          </p>
          <p className="mt-3">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben oder generell ausschließen. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
          </p>
          <p className="mt-3">
            Rechtsgrundlage für den Einsatz technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für alle weiteren Cookies wird Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO eingeholt.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">6. Eingebettete Inhalte</h2>
          <p>
            Diese Website kann eingebettete Inhalte von Drittanbietern enthalten (z. B. interaktive 3D-Viewer). Eingebettete Inhalte von anderen Websites verhalten sich exakt so, als ob der Besucher die andere Website besucht hätte. Diese Websites können Daten über Sie sammeln, Cookies benutzen und Ihre Interaktion mit dem eingebetteten Inhalt aufzeichnen.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">7. Ihre Rechte als betroffene Person</h2>
          <p>Ihnen stehen bezüglich Ihrer bei uns gespeicherten personenbezogenen Daten folgende Rechte zu:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li><strong className="text-foreground">Auskunft</strong> – Art. 15 DSGVO</li>
            <li><strong className="text-foreground">Berichtigung</strong> – Art. 16 DSGVO</li>
            <li><strong className="text-foreground">Löschung</strong> – Art. 17 DSGVO</li>
            <li><strong className="text-foreground">Einschränkung der Verarbeitung</strong> – Art. 18 DSGVO</li>
            <li><strong className="text-foreground">Datenübertragbarkeit</strong> – Art. 20 DSGVO</li>
            <li><strong className="text-foreground">Widerspruch</strong> – Art. 21 DSGVO</li>
            <li><strong className="text-foreground">Widerruf einer Einwilligung</strong> – Art. 7 Abs. 3 DSGVO</li>
          </ul>
          <p className="mt-3">
            Zur Ausübung dieser Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:contact@futurefabrik.com" className="text-primary hover:underline">
              contact@futurefabrik.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">8. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für Sachsen ist:
          </p>
          <p className="mt-3">
            Sächsischer Datenschutz- und Transparenzbeauftragter<br />
            Devrientstraße 5<br />
            01067 Dresden<br />
            <a href="https://www.saechsdsb.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              www.saechsdsb.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">9. Aktualität dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Version kann jederzeit auf dieser Seite abgerufen werden.
          </p>
        </section>

      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50">
          © {new Date().getFullYear()} Burnett &amp; Manhardt GbR · Future Fabrik
        </p>
      </div>
    </div>
  </div>
);

export default Datenschutz;
