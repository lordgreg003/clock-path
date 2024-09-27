import {
  Inter,
  Lusitana,
  Playfair,
  Coustard,
  Open_Sans,
  Playfair_Display,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const playfair = Playfair({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const coustard = Coustard({
  weight: ["400"],
  subsets: ["latin"],
});

export const open_sans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const playfair_Display = Playfair_Display({
  weight: ["700"],
  subsets: ["latin"],
});
