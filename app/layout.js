import "primereact/resources/themes/viva-dark/theme.css";
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

import Navbar from './components/Navbar'

export const metadata = {
  title: 'Scaryoke',
  description: 'Karafun Karaoke Randomizer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}</body>
    </html>
  )
}
