import './styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
        <p>Welcome to the site.</p>
      </main>
      <Footer />
    </>
  )
}
