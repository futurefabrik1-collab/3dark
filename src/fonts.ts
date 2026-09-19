// Self-hosted fonts, bundled by Vite — nothing is fetched from Google Fonts.
//
// Why self-hosted: (1) loading Google Fonts from Google's CDN sends every
// visitor's IP to Google before any consent, which German courts have treated
// as a DSGVO violation (LG München I, 3 O 17493/20); (2) one less third-party
// origin on the critical path; (3) the heading font can no longer silently
// disappear — "Rajdhani" was dropped from the Google Fonts <link> in 14ecb24
// and every heading fell back to a system font for months.
//
// Only latin + latin-ext subsets are imported (covers German and the rest of
// Europe); each file is range-gated, so browsers fetch just what a page uses.

// Body — variable font, covers every weight we use (300–700)
import "@fontsource-variable/dm-sans/wght.css";

// Headings (tailwind: font-serif)
import "@fontsource/rajdhani/latin-400.css";
import "@fontsource/rajdhani/latin-500.css";
import "@fontsource/rajdhani/latin-600.css";
import "@fontsource/rajdhani/latin-700.css";
import "@fontsource/rajdhani/latin-ext-400.css";
import "@fontsource/rajdhani/latin-ext-500.css";
import "@fontsource/rajdhani/latin-ext-600.css";
import "@fontsource/rajdhani/latin-ext-700.css";

// Labels (tailwind: font-mono)
import "@fontsource/space-mono/latin-400.css";
import "@fontsource/space-mono/latin-700.css";
import "@fontsource/space-mono/latin-ext-400.css";
import "@fontsource/space-mono/latin-ext-700.css";
