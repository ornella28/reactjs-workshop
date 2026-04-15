import Header from './components/Header'
import SidebarFilters from './components/SidebarFilters'
import ProductSection from './components/ProductSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
      <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans">
        <Header />

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <SidebarFilters />
            <ProductSection />
          </div>
        </main>

        <Newsletter />
        <Footer />
      </div>
  )
}

export default App