import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Aman Bisht | Software Engineer & React Developer',
  description: 'Highly motivated software engineer specializing in frontend technologies with experience building dynamic web applications using React.js. Skilled in building responsive UI, integrating APIs, optimizing application performance.',
  keywords: [
    'Aman Bisht',
    'Software Engineer',
    'React Developer',
    'Frontend Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Web Developer',
    'Delhi',
    'India',
    'React.js',
    'Node.js',
    'Portfolio',
  ],
  authors: [{ name: 'Aman Bisht', url: 'https://github.com/Aman-Bisht' }],
  creator: 'Aman Bisht',
  publisher: 'Aman Bisht',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Aman Bisht | Software Engineer & React Developer',
    description: 'Highly motivated software engineer specializing in frontend technologies with experience building dynamic web applications using React.js.',
    siteName: 'Aman Bisht Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Bisht | Software Engineer & React Developer',
    description: 'Highly motivated software engineer specializing in frontend technologies with experience building dynamic web applications using React.js.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
