import { Mulish, Syne } from "next/font/google";

export const mulish = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-mulish",
  preload: true,
});

export const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-syne",
  preload: true,
});
