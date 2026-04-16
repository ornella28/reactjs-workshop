import { ChevronLeft, ChevronRight } from 'lucide-react'

function Pagination() {
    return (
        <nav className="mt-8 flex items-center justify-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                <ChevronLeft className="h-4 w-4" />
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 text-white">
                1
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                2
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                3
            </button>

            <span className="px-2 text-sm text-slate-400">…</span>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                12
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                <ChevronRight className="h-4 w-4" />
            </button>
        </nav>
    )
}

export default Pagination