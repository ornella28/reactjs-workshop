import { useState, useEffect } from 'react'
import Header from './components/Header'
import SidebarFilters from './components/SidebarFilters'
import ProductSection from './components/ProductSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { products } from './data/products'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {
    const [searchTerm, setSearchTerm] = useState('')

    const themeContext = useContext(ThemeContext)

    if (!themeContext) return null

    const { theme } = themeContext

    const [selectedCategory, setSelectedCategory] = useState('all')// useState is used to store the search text and selected category so the UI can update when the user interact with it

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())

            const matchesCategory =
                selectedCategory === 'all' || product.category === selectedCategory

            return matchesSearch && matchesCategory

        })

    useEffect(() => {
        const count = filteredProducts.length
        document.title = count > 0
            ? `LITE.SHOP (${count})`
            : 'LITE.SHOP (No results)'
    }, [filteredProducts])


    return (
        <div
            className={
                theme === 'dark'
                    ? 'min-h-screen bg-slate-900 text-white antialiased font-sans'
                    : 'min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans'
            }
        >
            <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <SidebarFilters
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                    <ProductSection products={filteredProducts} />
                </div>
            </main>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default App