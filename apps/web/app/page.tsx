import Link from 'next/link'
import { Home, Building2, Search, ArrowRight, ShieldCheck, Sparkles, UserCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function RootPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-1000 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Branding Header */}
      <div className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-white/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-2xl font-black text-gray-900 tracking-tighter">InmoCMS</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="rounded-xl font-bold text-gray-500 hover:text-blue-600" asChild>
            <Link href="/login">Acceso Agencia</Link>
          </Button>
          <Button className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 px-6" asChild>
            <Link href="/portal">Buscar Propiedades</Link>
          </Button>
        </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-24 pb-12 z-10">

        {/* CLIENT SECTION */}
        <div className="group relative overflow-hidden rounded-[4rem] bg-white border border-gray-100 p-8 md:p-12 flex flex-col justify-between transition-all duration-700 hover:shadow-2xl hover:border-blue-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative space-y-8">
            <div className="relative h-64 w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-client.png"
                alt="Buscador de Hogares"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8">
                <div className="h-12 w-12 bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white">
                  <Search className="h-6 w-6" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl font-black text-gray-900 tracking-tighter leading-none">Busco mi próximo <span className="text-blue-600">hogar.</span></h2>
              <p className="text-xl text-gray-400 font-medium max-w-md">Explorá miles de propiedades de inmobiliarias certificadas en un solo portal.</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> Propiedades Verificadas
              </div>
              <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest">
                <Sparkles className="h-4 w-4 text-amber-500" /> Sin Registro Previo
              </div>
            </div>
          </div>

          <div className="relative pt-12">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xl py-8 rounded-[2rem] shadow-2xl shadow-blue-500/20 group-hover:scale-[1.02] transition-transform" asChild>
              <Link href="/portal">
                Comenzar Búsqueda <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>

        {/* AGENCY SECTION */}
        <div className="group relative overflow-hidden rounded-[4rem] bg-gray-900 p-8 md:p-12 flex flex-col justify-between transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />

          <div className="relative space-y-8">
            <div className="relative h-64 w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-black/50">
              <Image
                src="/images/hero-agency.png"
                alt="Gestión Inmobiliaria"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end p-8 opacity-60" />
              <div className="absolute bottom-8 left-8 h-12 w-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Building2 className="h-6 w-6" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl font-black text-white tracking-tighter leading-none">Gestión para <span className="text-indigo-400">Inmobiliarias.</span></h2>
              <p className="text-xl text-gray-400 font-medium max-w-md">El CRM más potente para automatizar tus ventas, publicar y gestionar equipos.</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 text-xs font-bold text-gray-300 bg-white/5 p-4 rounded-3xl border border-white/5 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" /> IA Generativa para Descripciones y Fotos
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-gray-300 bg-white/5 p-4 rounded-3xl border border-white/5 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" /> Gestión de Leads Integral & Kanban
              </div>
            </div>
          </div>

          <div className="relative pt-12 flex flex-col gap-4">
            <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-black text-xl py-8 rounded-[2rem] shadow-2xl shadow-indigo-500/20 group-hover:scale-[1.02] transition-transform" asChild>
              <Link href="/login">
                Acceso Profesional <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Link href="/signup" className="text-center text-indigo-300 hover:text-white font-bold text-sm transition-colors uppercase tracking-widest mt-2">
              Crear Cuenta Gratis
            </Link>
          </div>
        </div>

      </div>

      {/* Footer Info */}
      <div className="text-center text-gray-400 py-8 z-10">
        <p className="text-[10px] font-black uppercase tracking-[0.3em]">&copy; 2026 InmoCMS Luxury Real Estate SaaS</p>
      </div>
    </div>
  )
}
