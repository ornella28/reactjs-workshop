import { Eye, Heart, Plus, Star } from 'lucide-react'
import type { Product } from '../types/product'

type ProductCardProps = {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {
    const badgeClasses: Record<Product['badgeStyle'], string> = {
        discount: 'border border-rose-100/50 bg-rose-500/10 text-rose-600',
        limited: 'border border-amber-100/50 bg-amber-500/10 text-amber-600',
        soldout: 'border border-slate-200/50 bg-slate-900/60 text-white',
        popular: 'border border-blue-100/50 bg-blue-500/10 text-blue-600',
        hotdeal: 'border border-rose-100/50 bg-rose-500/10 text-rose-600',
        new: 'border border-amber-100/50 bg-amber-500/10 text-amber-600',
    }

    return (
        <article className="group rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
            <div
                className={`relative overflow-hidden rounded-2xl bg-slate-100 ${
                    !product.inStock ? 'grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100' : ''
                }`}
            >
                <img
                    src={product.image}
                    alt={product.title}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                        type="button"
                        disabled={!product.inStock}
                        className={`flex h-12 w-12 items-center justify-center rounded-full shadow-xl transition-transform duration-500 group-hover:translate-y-0 ${
                            product.inStock
                                ? 'translate-y-4 bg-white text-slate-900 hover:bg-blue-600 hover:text-white'
                                : 'translate-y-4 cursor-not-allowed bg-white/80 text-slate-400'
                        }`}
                        aria-label="Quick view"
                    >
                        <Eye className="h-5 w-5" />
                    </button>

                    <button
                        type="button"
                        disabled={!product.inStock}
                        className={`flex h-12 w-12 items-center justify-center rounded-full shadow-xl transition-transform duration-500 delay-75 group-hover:translate-y-0 ${
                            product.inStock
                                ? 'translate-y-4 bg-white text-slate-900 hover:bg-blue-600 hover:text-white'
                                : 'translate-y-4 cursor-not-allowed bg-white/80 text-slate-400'
                        }`}
                        aria-label="Add to cart"
                    >
                        <Plus className="h-5 w-5" />
                    </button>
                </div>

                <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold backdrop-blur-md ${badgeClasses[product.badgeStyle]}`}
                >
          {product.badge}
        </span>

                <button
                    type="button"
                    className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg"
                    aria-label="Add to favorites"
                >
                    <Heart className="h-5 w-5" />
                </button>
            </div>

            <div className="mt-4 space-y-1 px-1 pb-2">
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                        {product.category}
                    </p>

                    <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="text-[10px] font-bold text-slate-400">
              {product.rating}
            </span>
                    </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {product.title}
                </h3>

                <p
                    className={`text-[11px] font-medium ${
                        product.inStock
                            ? product.statusText.includes('Only')
                                ? 'text-amber-600'
                                : 'text-slate-500'
                            : 'italic text-slate-400'
                    }`}
                >
                    {product.statusText}
                </p>

                <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                        {product.oldPrice && (
                            <span className="text-[10px] font-medium leading-none text-slate-400 line-through">
                {product.oldPrice} kr
              </span>
                        )}
                        <span
                            className={`text-lg font-black tracking-tight ${
                                product.inStock ? 'text-slate-900' : 'text-slate-400'
                            }`}
                        >
              {product.price} kr
            </span>
                    </div>

                    <button
                        type="button"
                        disabled={!product.inStock}
                        className={`inline-flex h-10 items-center justify-center rounded-xl px-5 text-xs font-bold transition-all duration-300 ${
                            product.inStock
                                ? 'bg-slate-900 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95'
                                : 'cursor-not-allowed bg-slate-100 text-slate-400'
                        }`}
                    >
                        {product.buttonText}
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard