import { useContext, useEffect, useReducer } from 'react'
import Header from './components/Header'
import SidebarFilters from './components/SidebarFilters'
import ProductSection from './components/ProductSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { products } from './data/products'
import { ThemeContext } from './context/ThemeContext'

type Action =
    | { type: 'SET_SEARCH'; payload: string }
    | { type: 'SET_CATEGORY'; payload: string }

type State = {
    searchTerm: string
    selectedCategory: string
}

const initialState: State = {
    searchTerm: '',
    selectedCategory: 'all',
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_SEARCH':
            return { ...state, searchTerm: action.payload }

        case 'SET_CATEGORY':
            return { ...state, selectedCategory: action.payload }

        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const themeContext = useContext(ThemeContext)
    if (!themeContext) return null

    const { theme } = themeContext

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())

        const matchesCategory =
            state.selectedCategory === 'all' ||
            product.category === state.selectedCategory

        return matchesSearch && matchesCategory
    })

    useEffect(() => {
        const count = filteredProducts.length
        document.title =
            count > 0 ? `LITE.SHOP (${count})` : 'LITE.SHOP (No results)'
    }, [filteredProducts])

    return (
        <div
            className={
                theme === 'dark'
                    ? 'min-h-screen bg-slate-900 text-white antialiased font-sans'
                    : 'min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans'
            }
        >
            <Header
                searchTerm={state.searchTerm}
                onSearchChange={(value) =>
                    dispatch({ type: 'SET_SEARCH', payload: value })
                }
            />

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <SidebarFilters
                        selectedCategory={state.selectedCategory}
                        onCategoryChange={(category) =>
                            dispatch({ type: 'SET_CATEGORY', payload: category })
                        }
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