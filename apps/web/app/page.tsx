import Link from 'next/link'
import { Search, Building2, ArrowRight, Sparkles } from 'lucide-react'
import Image from "next/image"

export default function RootPage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
          alt="Modern House"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[4px]" />
      </div>

      {/* Header Logo - Top Left */}
      <div className="absolute top-12 left-12 z-20 flex items-center gap-3">
        <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
          <Sparkles className="h-6 w-6" />
        </div>
        <span className="text-2xl font-black text-white tracking-tighter">InmoCMS</span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">

        {/* Centered Hero Text */}
        <div className="text-center space-y-6 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Tu próximo hogar <br />
            <span className="text-blue-500 italic">comienza aquí.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed opacity-80">
            Gestiona tu inmobiliaria con eficiencia o encuentra la propiedad de tus sueños. <br className="hidden md:block" />
            Elige cómo quieres empezar hoy.
          </p>
        </div>

        {/* Dual-Path Glass Cards (Side-by-side at the bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">

          {/* Seeker Path (Public) */}
          <Link href="/portal" className="group block">
            <div className="h-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-12 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/[0.08] hover:border-blue-500/50 hover:-translate-y-2 text-center">
              <div className="h-16 w-16 bg-blue-600/20 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
                <Search className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight mb-3 uppercase">Busco Inmuebles</h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[260px] mb-8 font-medium">
                Acceso libre para explorar las mejores propiedades del mercado.
              </p>
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                Explorar ahora <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Agency Path (Professional) */}
          <Link href="/login" className="group block">
            <div className="h-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-12 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/[0.08] hover:border-blue-500/50 hover:-translate-y-2 text-center">
              <div className="h-16 w-16 bg-blue-600/20 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
                <Building2 className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight mb-3 uppercase">Soy Inmobiliaria</h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[260px] mb-8 font-medium">
                Gestiona tus listados, clientes y operaciones en un solo lugar.
              </p>
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                Acceder al sistema <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

        </div>
      </div>

    </div>
  )
}
