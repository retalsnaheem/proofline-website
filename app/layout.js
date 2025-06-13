import './globals.css'

export const metadata = {
  title: 'Proofline - Get honest feedback from real software users',
  description: 'Talk to real users before you buy B2B software. Anonymous interviews with verified users at companies like yours.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}