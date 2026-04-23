import { ChevronDown } from 'lucide-react'

type SidebarFiltersProps = {
    selectedCategory: string
    onCategoryChange: (category: string) => void
}

function SidebarFilters({
                            selectedCategory,
                            onCategoryChange,
                        }: SidebarFiltersProps) {
    return (
        <aside className="self-start lg:sticky lg:top-20 lg:col-span-3">
            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl">
                <section aria-labelledby="filters-categories" className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 id="filters-categories" className="text-sm font-bold text-slate-900">
                            Categories
                        </h2>

                        <button
                            type="button"
                            className="text-slate-400 transition-colors hover:text-blue-600 lg:hidden"
                        >
                            <ChevronDown className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="space-y-3">
                        <label className="flex cursor-pointer select-none items-center gap-3">
                            <input
                                type="radio"
                                name="category"
                                checked={selectedCategory === 'all'}
                                onChange={() => onCategoryChange('all')}
                                className="h-[1.125rem] w-[1.125rem] cursor-pointer rounded-[0.375rem] border border-slate-200 accent-blue-600"
                            />
                            <span className="flex-1 text-sm text-slate-700">
                All Products <span className="font-normal text-slate-400">(124)</span>
              </span>
                        </label>

                        <label className="flex cursor-pointer select-none items-center gap-3">
                            <input
                                type="radio"
                                name="category"
                                checked={selectedCategory === 'Outerwear'}
                                onChange={() => onCategoryChange('Outerwear')}
                                className="h-[1.125rem] w-[1.125rem] cursor-pointer rounded-[0.375rem] border border-slate-200 accent-blue-600"
                            />
                            <span className="flex-1 text-sm font-medium text-slate-700">
                Outerwear <span className="font-normal text-slate-400">(42)</span>
              </span>
                        </label>

                        <label className="flex cursor-pointer select-none items-center gap-3">
                            <input
                                type="radio"
                                name="category"
                                checked={selectedCategory === 'Footwear'}
                                onChange={() => onCategoryChange('Footwear')}
                                className="h-[1.125rem] w-[1.125rem] cursor-pointer rounded-[0.375rem] border border-slate-200 accent-blue-600"
                            />
                            <span className="flex-1 text-sm font-medium text-slate-700">
                Footwear <span className="font-normal text-slate-400">(18)</span>
              </span>
                        </label>

                        <label className="flex cursor-pointer select-none items-center gap-3">
                            <input
                                type="radio"
                                name="category"
                                checked={selectedCategory === 'Accessories'}
                                onChange={() => onCategoryChange('Accessories')}
                                className="h-[1.125rem] w-[1.125rem] cursor-pointer rounded-[0.375rem] border border-slate-200 accent-blue-600"
                            />
                            <span className="flex-1 text-sm font-medium text-slate-700">
                Accessories <span className="font-normal text-slate-400">(64)</span>
              </span>
                        </label>
                    </div>
                </section>

                <div className="my-5 h-px bg-slate-100" />

                <section aria-labelledby="filters-price" className="space-y-3">
                    <h2 id="filters-price" className="text-sm font-bold text-slate-900">
                        Price Range
                    </h2>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>0 kr</span>
                        <span>1800 kr</span>
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="1800"
                        defaultValue="900"
                        className="w-full accent-blue-500"
                        aria-label="Price range"
                    />
                </section>

                <div className="my-5 h-px bg-slate-100" />

                <section aria-labelledby="filters-availability" className="space-y-4">
                    <h2 id="filters-availability" className="text-sm font-bold text-slate-900">
                        Availability
                    </h2>

                    <div className="space-y-3">
                        <label className="flex cursor-pointer select-none items-center gap-3">
                            <input
                                type="checkbox"
                                className="h-[1.125rem] w-[1.125rem] cursor-pointer rounded-[0.375rem] border border-slate-200 accent-blue-600"
                            />
                            <span className="flex-1 text-sm text-slate-700">In Stock</span>
                        </label>

                        <label className="flex cursor-pointer select-none items-center gap-3">
                            <input
                                type="checkbox"
                                className="h-[1.125rem] w-[1.125rem] cursor-pointer rounded-[0.375rem] border border-slate-200 accent-blue-600"
                            />
                            <span className="flex-1 text-sm text-slate-700">On Sale</span>
                        </label>
                    </div>
                </section>

                <section className="mt-6">
                    <div className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-blue-600 to-amber-500 p-6 text-white before:absolute before:-right-[10%] before:-top-[20%] before:h-[200px] before:w-[200px] before:rounded-full before:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)] before:content-['']">
                        <h3 className="text-lg font-bold text-white">Summer Sale</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white opacity-90">
                            Get up to 50% off on all summer collections. Limited time offer!
                        </p>
                        <button
                            type="button"
                            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[0.75rem] border-none bg-white px-5 py-2.5 font-semibold text-blue-600 shadow-lg transition-all duration-200 hover:-translate-y-px hover:bg-slate-50 hover:shadow-lg"
                        >
                            Shop Now
                        </button>
                    </div>
                </section>
            </div>
        </aside>
    )
}

export default SidebarFilters