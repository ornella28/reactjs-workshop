import { ChevronDown } from 'lucide-react'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import type { Product } from '../types/product'

type ProductSectionProps = {
    products: Product[]
}

function ProductSection({ products }: ProductSectionProps) {
    return (
        <section className="lg:col-span-9">
            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-900">
                            Recommended for you
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            {products.length} product{products.length !== 1 ? 's' : ''} found
                        </p>
                    </div>

                    <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                        <span className="hidden sm:inline">Sort by:</span>

                        <div className="relative">
                            <select className="cursor-pointer appearance-none rounded-[0.75rem] border border-slate-200 bg-white py-2 pl-3 pr-9 text-sm text-slate-950 outline-none transition-all duration-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-600/10">
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Best Selling</option>
                            </select>

                            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                <ChevronDown className="h-4 w-4" />
              </span>
                        </div>
                    </label>
                </div>

                <div className="mt-5 h-px bg-slate-100" />

                {products.length === 0 ? (
                    <div className="mt-6 rounded-xl bg-white p-8 text-center text-slate-500">
                        No products match your search.
                    </div>
                ) : (
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

                <Pagination />
            </div>
        </section>
    )
}

export default ProductSection