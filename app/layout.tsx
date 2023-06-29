import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['devanagari'],
  weight: '400'
})

export const metadata = {
  title: 'Sticky Notes',
  description: 'Sticky Notes using NextJS.13',
  link: 'hello'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
