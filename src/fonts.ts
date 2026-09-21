// Self-hosted fonts, bundled by Vite — nothing is fetched from Google Fonts.
//
// Why self-hosted: (1) loading Google Fonts from Google's CDN sends every
// visitor's IP to Google before any consent, which German courts have treated
// as a DSGVO violation (LG München I, 3 O 17493/20); (2) one less third-party
// origin on the critical path; (3) the heading font can no longer silently
// disappear — "Rajdhani" was dropped from the Google Fonts <link> in 14ecb24
// and every heading fell back to a system font for months.
//

// Body — variable font, covers every weight we use (300–700)
import "@fontsource-variable/dm-sans/wght.css";

// Headings (tailwind: font-serif). The combined per-weight files declare a
// unicode-range for each subset, so browsers fetch only the subset a page
// actually uses (latin for EN/DE). The per-subset files have no range, which
// made browsers download latin-ext first for no reason.
import "@fontsource/rajdhani/400.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/700.css";

// Labels (tailwind: font-mono)
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
