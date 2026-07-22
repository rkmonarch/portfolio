import type { Metadata } from "next";
import LadsPrivacyPolicy from "./lads-privacy-policy";

export const metadata: Metadata = {
  title: "Lads Privacy Policy",
  description:
    "Privacy Policy for Lads, a private fitness app for small groups of friends.",
};

export default function LadsPrivacyPage() {
  return <LadsPrivacyPolicy />;
}
