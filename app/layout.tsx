import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { organizationWebSiteJsonLd } from '@/lib/seo';
import { SITE_URL } from '@/constants';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700', '800'],
});

const defaultTitle = 'Knowledge Hive';
const defaultDescription =
  'Where ideas turn into action. Courses and community for creators and entrepreneurs.';
const ogImage = `${SITE_URL.replace(/\/$/, '')}/hero-knowledge-hive.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: defaultTitle, template: '%s | Knowledge Hive' },
  description: defaultDescription,
  keywords: ['online courses', 'entrepreneur community', 'creator education', 'learning hub', 'AI courses', 'business courses'],
  authors: [{ name: 'Knowledge Hive', url: SITE_URL }],
  creator: 'Knowledge Hive',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Knowledge Hive',
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Knowledge Hive – Courses and community for creators' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Round|Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationWebSiteJsonLd()),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"97233745", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans bg-navy-deep text-slate-200 antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
