function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-4">

                <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">LITE.SHOP</h3>
                        <p className="text-sm text-slate-500">
                            Modern e-commerce experience built for speed and elegance.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-3 text-sm font-bold">Shop</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>New Arrival</li>
                            <li>Best Sellers</li>
                            <li>Men</li>
                            <li>Women</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 text-sm font-bold">Support</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>Order Status</li>
                            <li>Shipping</li>
                            <li>Returns</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 text-sm font-bold">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                </div>

                <div className="mt-10 border-t pt-6 text-center text-xs text-slate-400">
                    © 2026 LITE.SHOP. All rights reserved.
                </div>

            </div>
        </footer>
    )
}

export default Footer