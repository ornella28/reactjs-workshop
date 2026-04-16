function Newsletter() {
    return (
        <section className="mt-12 bg-slate-900 py-16 text-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">

                    <div className="max-w-xl space-y-4">
                        <h2 className="text-3xl font-black uppercase italic">
                            Join the LITE.CLUB
                        </h2>

                        <p className="text-slate-400">
                            Subscribe and get <span className="font-bold text-white">15% off</span> your first order.
                        </p>
                    </div>

                    <form className="w-full max-w-md">
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-slate-500"
                            />

                            <button className="rounded-xl bg-blue-600 px-6 py-3 font-bold uppercase">
                                Subscribe
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Newsletter