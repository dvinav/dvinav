import AppLayout from '@/components/layout'

const RootLayout: LC = async ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Oops!</title>
      </head>
      <body tabIndex={-1}>{children}</body>
    </html>
  )
}

export default RootLayout
