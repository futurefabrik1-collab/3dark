import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Seo from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Datenschutz = () => {
  const { lang } = useLanguage();
  const seo = translations.seo[lang].datenschutz;
  const tc = translations.contact[lang];

  return (
  <>
    <Seo title={seo.title} description={seo.description} path="/datenschutz" noindex />
    <Navbar />
    <main id="main" tabIndex={-1} className="min-h-screen bg-background text-foreground outline-none">
    <div lang="de" className="max-w-2xl mx-auto px-6 pt-28 pb-24">
      {lang === "en" && (
        <p lang="en" className="mb-8 border border-border bg-muted px-4 py-3 text-sm text-muted-foreground">
          {tc.germanOnly}
        </p>
      )}
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Rechtliches</p>
      <h1 className="text-3xl font-serif text-foreground mb-12">Datenschutzerklärung</h1>

      <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">1. Datenschutz auf einen Blick</h2>
          <p className="font-medium text-foreground mb-2">Allgemeine Hinweise</p>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
          <p className="font-medium text-foreground mt-4 mb-2">Datenerfassung auf dieser Website</p>
          <p className="font-medium text-foreground mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>
          <p className="font-medium text-foreground mt-4 mb-1">Wie erfassen wir Ihre Daten?</p>
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
          <p className="mt-3">
            Beim Aufruf der Website erfasst Vercel automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene Seite, Browsertyp und -version, Betriebssystem sowie die zuvor besuchte Seite (Referrer). Diese Daten sind für die Auslieferung und den sicheren Betrieb der Website technisch erforderlich.
          </p>
          <p className="mt-3">
            Die Serverfunktion, die das Kontaktformular verarbeitet (Abschnitt 4), wird in einem Rechenzentrum von Vercel in Frankfurt am Main betrieben.
          </p>
          <p className="mt-3">
            Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in einer zuverlässigen, sicheren und schnellen Bereitstellung unserer Website. Da Vercel ein US-Unternehmen ist, kann eine Übermittlung in die USA nicht ausgeschlossen werden. Diese erfolgt auf Grundlage des EU-U.S. Data Privacy Framework (DPF) gemäß Art. 45 DSGVO; Vercel Inc. ist unter dem DPF zertifiziert.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <p className="font-medium text-foreground mb-2">Datenschutz</p>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className="font-medium text-foreground mt-4 mb-2">Hinweis zur verantwortlichen Stelle</p>
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
            Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten wir die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Nachricht) sowie den Zeitpunkt der Anfrage, um Ihre Anfrage zu bearbeiten und Ihnen zu antworten. Die Angabe dieser Daten ist freiwillig; ohne sie können wir Ihre Anfrage jedoch nicht beantworten.
          </p>
          <p className="mt-3">
            Technisch wird das Formular über eine Serverfunktion unseres Hosting-Anbieters Vercel (Abschnitt 2) verarbeitet und als E-Mail über den E-Mail-Dienst Gmail der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, an unser Postfach zugestellt. An die von Ihnen angegebene E-Mail-Adresse senden wir eine automatische Eingangsbestätigung; sie enthält Ihren Namen, nicht aber den Inhalt Ihrer Nachricht. Eine Übermittlung an die Google LLC in den USA kann nicht ausgeschlossen werden; die Google LLC ist unter dem EU-U.S. Data Privacy Framework zertifiziert (Art. 45 DSGVO).
          </p>
          <p className="mt-3">
            Zum Schutz vor automatisiert versendeten Anfragen (Spam) begrenzen wir kurzzeitig die Zahl der Anfragen pro IP-Adresse; die IP-Adresse wird dazu nur im Arbeitsspeicher gehalten und nicht dauerhaft gespeichert.
          </p>
          <p className="mt-3">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder der Durchführung vorvertraglicher Maßnahmen dient. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p className="mt-3">
            Ihre Angaben verbleiben bei uns, bis Sie uns zur Löschung auffordern oder der Zweck der Speicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">5. Keine Cookies, lokale Speicherung</h2>
          <p>
            Diese Website setzt keine Cookies. Damit Ihre gewählte Sprache und Darstellung (hell oder dunkel) beim nächsten Besuch erhalten bleiben, speichern wir diese beiden Einstellungen im lokalen Speicher Ihres Browsers (Local Storage, Einträge „3dark-lang“ und „3dark-theme“). Diese Angaben verlassen Ihr Gerät nicht und werden nicht an uns oder Dritte übertragen.
          </p>
          <p className="mt-3">
            Die Speicherung ist für die von Ihnen ausdrücklich gewünschte Funktion unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Sie können die Einträge jederzeit über die Einstellungen Ihres Browsers löschen.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">6. Schriftarten</h2>
          <p>
            Die auf dieser Website verwendeten Schriftarten sind lokal auf unserem Server eingebunden. Beim Laden der Seite wird keine Verbindung zu Servern von Google oder anderen Schriftanbietern hergestellt.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">7. Keine Analyse- oder Tracking-Werkzeuge</h2>
          <p>
            Wir setzen auf dieser Website keine Analyse-, Tracking- oder Werbewerkzeuge ein und erstellen keine Nutzungsprofile.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">8. Eingebettete Videos und 3D-Szenen</h2>
          <p>
            Einige Projekte zeigen wir mit Videos von YouTube bzw. mit interaktiven 3D-Szenen der Plattform StorySplat. Diese Inhalte werden erst geladen, wenn Sie auf „Film abspielen“ bzw. „Klicken zum Erkunden“ klicken. Bis dahin sehen Sie nur ein Vorschaubild von unserem eigenen Server, und es werden keine Daten an die Anbieter übertragen.
          </p>
          <p className="font-medium text-foreground mt-4 mb-1">YouTube</p>
          <p>
            Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Wir nutzen den erweiterten Datenschutzmodus (youtube-nocookie.com). Nach Ihrem Klick wird eine Verbindung zu den Servern von YouTube hergestellt; dabei werden u. a. Ihre IP-Adresse und Informationen zu Ihrem Browser übertragen, und YouTube kann Daten in Ihrem Browser speichern. Eine Übermittlung an die Google LLC in den USA ist möglich; die Google LLC ist unter dem EU-U.S. Data Privacy Framework zertifiziert (Art. 45 DSGVO). Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/privacy</a>.
          </p>
          <p className="font-medium text-foreground mt-4 mb-1">StorySplat</p>
          <p>
            Die 3D-Szene „Das Wunderland von Alice“ wird über die Plattform StorySplat (discover.storysplat.com) bereitgestellt. Nach Ihrem Klick wird eine Verbindung zu deren Servern hergestellt; dabei werden u. a. Ihre IP-Adresse und Informationen zu Ihrem Browser übertragen. Der Viewer lädt dabei zusätzlich Schriftarten von Google Fonts (Google Ireland Limited, Irland) sowie die Szenendaten über einen Dienst der Cloudflare, Inc. (USA); auch dabei wird Ihre IP-Adresse übertragen. Eine Übermittlung in die USA ist möglich; Google LLC und Cloudflare, Inc. sind unter dem EU-U.S. Data Privacy Framework zertifiziert (Art. 45 DSGVO).
          </p>
          <p className="mt-3">
            Rechtsgrundlage für das Laden dieser Inhalte ist Ihre Einwilligung, die Sie durch den Klick erteilen (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Sie gilt nur für den jeweiligen Inhalt und die aktuelle Seitenansicht; beim nächsten Besuch werden die Inhalte erst nach einem erneuten Klick geladen.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">9. Ihre Rechte als betroffene Person</h2>
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
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">10. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für Sachsen ist:
          </p>
          <p className="mt-3">
            Die Sächsische Datenschutz- und Transparenzbeauftragte<br />
            Devrientstraße 5<br />
            01067 Dresden<br />
            <a href="https://www.datenschutz.sachsen.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              www.datenschutz.sachsen.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">11. Aktualität dieser Datenschutzerklärung</h2>
          <p>
            Stand: September 2026. Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Version kann jederzeit auf dieser Seite abgerufen werden.
          </p>
        </section>

      </div>

    </div>
    </main>
    <SiteFooter />
  </>
);
};

export default Datenschutz;
