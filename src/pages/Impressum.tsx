import { Link } from "react-router-dom";

const Impressum = () => (
  <div className="min-h-screen bg-background text-foreground">
    {/* Back bar */}
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border px-6 py-4 flex items-center gap-4">
      <Link to="/" className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors">
        ← 3DARK
      </Link>
    </div>

    <div className="max-w-2xl mx-auto px-6 pt-28 pb-24">
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Legal</p>
      <h1 className="text-3xl font-serif text-foreground mb-12">Impressum</h1>

      <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">Angaben gemäß § 5 DDG</h2>
          <p>
            Burnett &amp; Manhardt GbR<br />
            (handelnd als Future Fabrik)<br />
            Klingenstraße 22<br />
            04229 Leipzig
          </p>
          <p className="mt-3">
            3DARK ist ein Dienst der Future Fabrik (Burnett &amp; Manhardt GbR).
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">Vertreten durch</h2>
          <p>
            Mark Burnett &amp; Florian Manhardt
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">Kontakt</h2>
          <p>
            Telefon: 0049 (0) 17634584847<br />
            Telefon: 0049 (0) 1781345105<br />
            E-Mail:{" "}
            <a href="mailto:contact@futurefabrik.com" className="text-primary hover:underline">
              contact@futurefabrik.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE326430819
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Mark Burnett &amp; Florian Manhardt<br />
            Klingenstraße 22<br />
            04229 Leipzig
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mt-3">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p className="mt-3">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-foreground mb-3">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="mt-3">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
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

export default Impressum;
