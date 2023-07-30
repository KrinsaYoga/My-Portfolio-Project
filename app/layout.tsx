import './globals.css'
import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Next Js Portfolio',
  description: 'Dibuat menggunakan create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{spaceMono.styles}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
