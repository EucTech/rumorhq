import {
  Inter,
  Abhaya_Libre,
  DM_Sans,
  Instrument_Sans,
} from "next/font/google";


export const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"]});

export const instrument_sans = Instrument_Sans({
  subsets: ["latin"], weight: ["400", "500", "600", "700",],})


export const abhaya_libre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

