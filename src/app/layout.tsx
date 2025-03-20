import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Push Portal",
  description: "Push Portal (Previously EPNS) | Communication Protocol of Web3",
  openGraph: {
    url: "https://portal.push.org",
    type: "website",
    title: "Push Portal",
    description:
      "Push Portal (Previously EPNS) | Communication Protocol of Web3",
    images:
      "https://opengraph.b-cdn.net/production/images/cc7702ad-595a-4d26-ae54-9309a2c9f6aa.png?token=CBq5Ke9jm230h7PvaSX-Iy2BX_DMvIez2GusAQacsCg&height=630&width=1200&expires=33278331680",
  },
  twitter: {
    card: "summary_large_image",
    title: "Push Portal",
    description:
      "Push Portal (Previously EPNS) | Communication Protocol of Web3",
    images:
      "https://opengraph.b-cdn.net/production/images/cc7702ad-595a-4d26-ae54-9309a2c9f6aa.png?token=CBq5Ke9jm230h7PvaSX-Iy2BX_DMvIez2GusAQacsCg&height=630&width=1200&expires=33278331680",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
