import { Package, Search, ShoppingBag, User, Menu } from 'lucide-react'

function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2 font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600">
              <Package className="h-5 w-5" />
            </span>
                        <span className="text-xl font-black uppercase">LITE.SHOP</span>
                    </div>

                    {/* Nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-blue-100">
                        <a href="#" className="hover:text-white">New Arrival</a>
                        <a href="#" className="hover:text-white">Men</a>
                        <a href="#" className="hover:text-white">Women</a>
                        <a href="#" className="hover:text-white">Sale</a>
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-2">

                        {/* Search */}
                        <div className="hidden sm:block relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="h-10 w-40 rounded-lg bg-blue-500/30 pl-10 pr-3 text-sm text-white placeholder:text-blue-200 outline-none"
                            />
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-blue-200" />
                        </div>

                        {/* Cart */}
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-500/30 text-white hover:bg-blue-500/50">
                            <ShoppingBag className="h-5 w-5" />
                        </button>

                        {/* User */}
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-500/30 text-white hover:bg-blue-500/50">
                            <User className="h-5 w-5" />
                        </button>

                        {/* Mobile menu */}
                        <button className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg bg-blue-500/30 text-white">
                            <Menu className="h-5 w-5" />
                        </button>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header