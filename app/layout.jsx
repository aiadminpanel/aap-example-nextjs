export const metadata = {
  title: 'aap-example:nextjs',
  other: { 'aap-example': 'aap-example:nextjs' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: '3rem' }}>{children}</body>
    </html>
  )
}
