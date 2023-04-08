import './globals.css'
import Sidebar from './components/sidebar'
import AboutMe from './components/about-me'
import Skills from './components/skill'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='flex flex-col sm:flex-row'>
        <Sidebar />
      
      <main className='grow-full p-16 w-full basis-2/3 bg-green-400 ml-auto'>{children}
      <AboutMe />
     
      <Skills/>
     
      </main>
      
      </body>
    </html>
  )
}
