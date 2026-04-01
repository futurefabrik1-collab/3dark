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
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">1. Verantwortlicher</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <p className="mt-3">
            Burnett &amp; Manhardt GbR<br />
            (handelnd als Future Fabrik / 3DARK)<br />
            Klingenstraße 22<br />
            04229 Leipzig<br />
            Deutschland<br /><br />
            E-Mail:{" "}
            <a href="mailto:contact@futurefabrik.com" className="text-primary hover:underline">
              contact@futurefabrik.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>
            Beim Besuch unserer Website werden durch den Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
          </ul>
          <p className="mt-3">
            Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet: Gewährleistung eines reibungslosen Verbindungsaufbaus der Website, Auswertung der Systemsicherheit und -stabilität sowie zu weiteren administrativen Zwecken.
          </p>
          <p className="mt-3">
            Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben aufgelisteten Zwecken zur Datenerhebung.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">3. Hosting</h2>
          <p>
            Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 700, San Francisco, CA 94104, USA, gehostet. Vercel verarbeitet personenbezogene Daten (z. B. IP-Adressen) beim Aufruf unserer Website. Näheres entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              vercel.com/legal/privacy-policy
            </a>.
          </p>
          <p className="mt-3">
            Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Mit Vercel wurde ein Auftragsverarbeitungsvertrag (AVV) geschlossen. Der Datentransfer in die USA erfolgt auf Basis der Standardvertragsklauseln der EU-Kommission.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">4. Kontaktformular</h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="mt-3">
            Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
          </p>
          <p className="mt-3">
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">5. Cookies</h2>
          <p>
            Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Wir setzen Cookies ein, um unser Angebot nutzerfreundlicher zu gestalten.
          </p>
          <p className="mt-3">
            Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen (z. B. für Sprachpräferenzen und Theme-Einstellungen).
          </p>
          <p className="mt-3">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
          </p>
          <p className="mt-3">
            Rechtsgrundlage für den Einsatz technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für alle weiteren Cookies wird Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO eingeholt.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">6. Eingebettete Inhalte</h2>
          <p>
            Diese Website kann eingebettete Inhalte von Drittanbietern enthalten (z. B. interaktive 3D-Viewer). Eingebettete Inhalte von anderen Websites verhalten sich exakt so, als ob der Besucher die andere Website besucht hätte. Diese Websites können Daten über Sie sammeln, Cookies benutzen, zusätzliche Tracking-Dienste von Dritten einbetten und Ihre Interaktion mit diesem eingebetteten Inhalt aufzeichnen.
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
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Seite abgerufen werden.
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
