import "@index.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const APP_NAME = "Agastya Accounting";
const APP_DESCRIPTION =
  "Expert accounting, taxation, GST, audit, and business advisory services in Mehsana, Gujarat. Trusted Chartered Accountants helping businesses simplify compliance and grow.";

export const metadata: Metadata = {
  metadataBase: new URL("https://agastyaaccounting.com"),
  applicationName: APP_NAME,
  title: {
    default: "Agastya Accounting | Trusted Accounting & Tax Partners",
    template: "%s | Agastya Accounting",
  },
  description: APP_DESCRIPTION,
  keywords: [
    "Agastya Accounting",
    "chartered accountant Mehsana",
    "CA firm Gujarat",
    "GST registration Gujarat",
    "income tax filing Mehsana",
    "accounting services Gujarat",
    "tax consultant Mehsana",
    "audit services Gujarat",
    "business advisory Mehsana",
    "payroll management Gujarat",
    "financial management services",
  ],
  authors: [{ name: "Agastya Accounting" }],
  creator: "Agastya Accounting",
  publisher: "Agastya Accounting",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://agastyaaccounting.com",
    siteName: APP_NAME,
    title: "Agastya Accounting | Trusted Accounting & Tax Partners",
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Agastya Accounting | Trusted Accounting & Tax Partners",
    description: APP_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
