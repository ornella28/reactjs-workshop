import { Menu, Package, Search, ShoppingBag, User } from 'lucide-react'

type HeaderProps = {
    searchTerm: string
    onSearchChange: (value: string) => void
}

function Header({ searchTerm, onSearchChange }: HeaderProps) {
    return (
        <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
              <Package className="h-5 w-5" />
            </span>
                        <span className="text-xl font-black uppercase tracking-tighter">LITE.SHOP</span>
                    </a>

                    <nav className="hidden items-center gap-8 text-sm font-bold text-blue-100 md:flex">
                        <a href="#" className="transition-colors duration-200 hover:text-white">
                            New Arrival
                        </a>
                        <a href="#" className="transition-colors duration-200 hover:text-white">
                            Men
                        </a>
                        <a href="#" className="transition-colors duration-200 hover:text-white">
                            Women
                        </a>
                        <a href="#" className="transition-colors duration-200 hover:text-white">
                            Sale
                        </a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <div className="mr-4 hidden items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/30 px-3 py-1 lg:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-100" />
              </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-50">
                Live
              </span>
                        </div>

                        <div className="relative hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(event) => onSearchChange(event.target.value)}
                                className="h-10 w-48 rounded-[0.75rem] border border-blue-400/20 bg-blue-500/30 pl-10 pr-4 text-xs font-medium text-blue-50 placeholder:text-blue-200/50 outline-none transition-all duration-300 focus:w-64 focus:bg-blue-500/50"
                            />
                            <Search className="absolute left-3.5 top-3 h-4 w-4 text-blue-200" />
                        </div>

                        <button
                            type="button"
                            className="relative inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] border border-blue-400/20 bg-blue-500/30 text-blue-50 transition-all duration-200 hover:bg-blue-500/50 hover:text-white"
                            aria-label="Cart"
                            title="Cart"
                        >
                            <ShoppingBag className="h-5 w-5" />
                        </button>

                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] border border-blue-400/20 bg-blue-500/30 text-blue-50 transition-all duration-200 hover:bg-blue-500/50 hover:text-white"
                            aria-label="Account"
                            title="Account"
                        >
                            <User className="h-5 w-5" />
                        </button>

                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] border border-blue-400/20 bg-blue-500/30 text-blue-50 transition-all duration-200 hover:bg-blue-500/50 hover:text-white md:hidden"
                            aria-label="Menu"
                            title="Menu"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header