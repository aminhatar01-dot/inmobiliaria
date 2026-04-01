"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Building2, User, Users, Loader2, X, Command, Briefcase } from "lucide-react"
import { globalSearch, type SearchResult } from "@/app/actions/search"
import { useRouter } from "next/navigation"

export function GlobalSearch() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<SearchResult[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)

    // Keyboard shortcut handler
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault()
                setIsOpen(open => !open)
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        } else {
            setQuery("")
            setResults([])
        }
    }, [isOpen])

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (query.trim().length >= 2) {
                setIsLoading(true)
                setSelectedIndex(0)
                try {
                    const searchResults = await globalSearch(query)
                    setResults(searchResults)
                } catch (error) {
                    console.error("Search error:", error)
                } finally {
                    setIsLoading(false)
                }
            } else {
                setResults([])
            }
        }, 300)

        return () => clearTimeout(delayDebounceFn)
    }, [query])

    // Keyboard navigation
    useEffect(() => {
        const handleNavigation = (e: KeyboardEvent) => {
            if (!isOpen) return

            if (e.key === 'ArrowDown') {
                e.preventDefault()
                setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev))
            } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev))
            } else if (e.key === 'Enter') {
                e.preventDefault()
                if (results[selectedIndex]) {
                    handleSelect(results[selectedIndex].url)
                }
            } else if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }
        document.addEventListener('keydown', handleNavigation)
        return () => document.removeEventListener('keydown', handleNavigation)
    }, [isOpen, results, selectedIndex])

    const handleSelect = (url: string) => {
        setIsOpen(false)
        router.push(url)
    }

    return (
        <>
            {/* Header Button Trigger */}
            <button
                onClick={() => setIsOpen(true)}
                className="hidden sm:flex items-center justify-between w-64 lg:w-96 px-3 py-2 bg-gray-50/50 hover:bg-gray-100 text-gray-500 rounded-full transition-colors text-sm font-medium border border-gray-200 group relative"
            >
                <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    <span className="text-gray-400 font-normal">Buscar en todo...</span>
                </div>
                <kbd className="hidden lg:inline-flex items-center gap-1 bg-white border border-gray-200 rounded px-1.5 py-0.5 text-[10px] font-mono text-gray-400 shadow-sm ml-4">
                    <Command className="w-3 h-3" />K
                </kbd>
            </button>
            <button
                onClick={() => setIsOpen(true)}
                className="sm:hidden p-2 text-gray-400 hover:bg-gray-100 rounded-full transition"
            >
                <Search className="w-5 h-5" />
            </button>

            {/* Omnisearch Modal Frame */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 sm:px-0">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in" 
                        onClick={() => setIsOpen(false)}
                    />
                    
                    {/* Dialog Wrapper */}
                    <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden flex flex-col animate-in fade-in zoom-in-95 slide-in-from-top-4 duration-200">
                        {/* Search Input Box */}
                        <div className="flex items-center gap-4 p-5 border-b border-gray-100 bg-white">
                            <Search className="w-6 h-6 text-blue-500" />
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Buscar propiedades, leads, tareas, agentes..."
                                className="flex-1 bg-transparent border-0 outline-none text-gray-900 text-xl placeholder:text-gray-300 font-medium"
                            />
                            {isLoading && <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />}
                            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded-xl text-gray-400 transition ml-2">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Search Results Display Area */}
                        <div className="max-h-[60vh] overflow-y-auto bg-slate-50 p-2">
                            {query.trim().length > 0 && results.length === 0 && !isLoading ? (
                                <div className="py-20 text-center text-gray-500">
                                    <div className="bg-white w-20 h-20 rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 border border-gray-100">
                                        <Search className="w-10 h-10 text-gray-300" />
                                    </div>
                                    <h3 className="text-gray-900 font-black text-lg mb-1">Sin coincidencias</h3>
                                    <p className="text-sm font-medium">Revisa la ortografía de "{query}"</p>
                                </div>
                            ) : results.length > 0 ? (
                                <div className="space-y-1">
                                    {results.map((result, index) => {
                                        const isSelected = index === selectedIndex;
                                        
                                        // Dictionary mapping for UI aesthetics
                                        const typeLabels = { property: 'Propiedad', lead: 'Contacto', task: 'Tarea', agent: 'Agente' };
                                        
                                        return (
                                            <button
                                                key={`${result.type}-${result.id}`}
                                                onClick={() => handleSelect(result.url)}
                                                onMouseEnter={() => setSelectedIndex(index)}
                                                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left ${
                                                    isSelected 
                                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 translate-x-1' 
                                                        : 'hover:bg-white bg-transparent hover:shadow-sm'
                                                }`}
                                            >
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors ${
                                                    isSelected ? 'bg-white/20 text-white' :
                                                    result.type === 'property' ? 'bg-amber-100 text-amber-600' :
                                                    result.type === 'lead' ? 'bg-indigo-100 text-indigo-600' :
                                                    result.type === 'task' ? 'bg-emerald-100 text-emerald-600' :
                                                    'bg-purple-100 text-purple-600'
                                                }`}>
                                                    {result.type === 'property' ? <Building2 className="w-6 h-6" /> :
                                                     result.type === 'lead' ? <Users className="w-6 h-6" /> :
                                                     result.type === 'task' ? <Briefcase className="w-6 h-6" /> :
                                                     <User className="w-6 h-6" />}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className={`text-base font-bold truncate transition-colors ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                                                        {result.title}
                                                    </p>
                                                    <p className={`text-sm truncate font-medium transition-colors ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                                                        {result.subtitle}
                                                    </p>
                                                </div>
                                                <div className={`shrink-0 text-[10px] uppercase font-bold px-3 py-1.5 rounded-lg border ${
                                                    isSelected 
                                                        ? 'bg-black/20 border-transparent text-white' 
                                                        : 'bg-white border-gray-200 text-gray-500'
                                                }`}>
                                                    {typeLabels[result.type]}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="py-24 text-center text-gray-400 flex flex-col items-center gap-4">
                                    <div className="bg-gray-100 p-4 rounded-2xl">
                                        <Command className="w-8 h-8 opacity-40 text-gray-600" />
                                    </div>
                                    <p className="font-medium text-sm">Comienza a escribir para buscar en el sistema global.</p>
                                </div>
                            )}
                        </div>
                        
                        {/* Interactive Footer Hints */}
                        <div className="bg-white border-t border-gray-100 p-4 text-xs font-semibold text-gray-400 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-6">
                                <span className="flex items-center gap-2">
                                    <kbd className="bg-gray-50 border border-gray-200 px-2 py-1 rounded-md shadow-sm text-gray-600">Enter</kbd> 
                                    Para abrir
                                </span>
                                <span className="flex items-center gap-2">
                                    <kbd className="bg-gray-50 border border-gray-200 px-2 py-1 rounded-md shadow-sm text-gray-600">↓</kbd> 
                                    <kbd className="bg-gray-50 border border-gray-200 px-2 py-1 rounded-md shadow-sm text-gray-600">↑</kbd> 
                                    Avanzar
                                </span>
                            </div>
                            <span className="flex items-center gap-2">
                                <kbd className="bg-gray-50 border border-gray-200 px-2 py-1 rounded-md shadow-sm text-gray-600">ESC</kbd> 
                                Para cerrar
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
