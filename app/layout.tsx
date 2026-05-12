import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hardware Attestation Privacy Checker',
  description: 'Check if your hardware enables monopolistic tracking. Analyze device hardware attestation capabilities and privacy implications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cc07ee03-4528-4aca-933d-a251b18584c7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
