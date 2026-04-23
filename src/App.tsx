import { useState } from 'react'
import Header from './components/Header'
import SidebarFilters from './components/SidebarFilters'
import ProductSection from './components/ProductSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { products } from './data/products'

function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')// useState is used to store the search text and selected category so the UI can update when the user interact with it

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())

            const matchesCategory =
                selectedCategory === 'all' || product.category === selectedCategory

            return matchesSearch && matchesCategory
        })


    return (
        <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans">
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