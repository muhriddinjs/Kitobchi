import BreadCrumbs from '../components/BreadCrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <BreadCrumbs /> */}
      
      {/* Kontent bo‘sh joyni egallaydi */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default RootLayout
