export const metadata = {
  title: 'Faith for Peace',
  description: 'Uniting spiritual traditions and beliefs in the pursuit of global peace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
