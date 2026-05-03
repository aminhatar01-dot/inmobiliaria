'use client';

import React, { useState, useEffect } from 'react';
import WhatsAppConnector from "@/components/whatsapp/WhatsAppConnector";
import { Mail, MessageSquare, Globe, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { getCommunicationSettings } from '@/app/actions/settings-comm';

export default function CanalesPage() {
  const [emailSettings, setEmailSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSettings() {
      try {
        const settings = await getCommunicationSettings();
        setEmailSettings(settings);
      } catch (error) {
        console.error("Error loading email settings:", error);
      } finally {
        setLoading(false);
      }
    }
    loadSettings();
  }, []);

  const isEmailConnected = emailSettings?.smtp_host || emailSettings?.resend_api_key || emailSettings?.google_access_token;

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Canales de Comunicación</h1>
        <p className="text-lg text-slate-500">Gestiona tus automatizaciones y conexiones con clientes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* WhatsApp Automation */}
        <WhatsAppConnector />

        {/* Email Automation */}
        <Card className="border-none shadow-xl bg-gradient-to-br from-white to-slate-50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl" />
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-800">Email Marketing</CardTitle>
                  <CardDescription className="text-slate-500">Servidor SMTP y Remitentes</CardDescription>
                </div>
              </div>
              {loading ? (
                <Loader2 className="w-5 h-5 text-slate-300 animate-spin" />
              ) : (
                <Badge 
                  variant={isEmailConnected ? 'default' : 'secondary'}
                  className={isEmailConnected ? 'bg-blue-600 hover:bg-blue-700 px-3 py-1' : 'bg-slate-200 text-slate-600 px-3 py-1'}
                >
                  {isEmailConnected ? 'Conectado' : 'No Configurado'}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Envía recordatorios de visitas, fichas de propiedades y campañas de seguimiento automáticamente por correo electrónico.
            </p>
            <div className="grid grid-cols-1 gap-3 pt-2">
              <div className={`p-4 rounded-2xl border transition-all ${isEmailConnected ? 'bg-green-50/50 border-green-100' : 'bg-white border-slate-100 opacity-60'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${isEmailConnected ? 'text-green-500' : 'text-slate-300'}`} />
                    <span className="text-sm font-semibold text-slate-700">Servidor SMTP</span>
                  </div>
                  {isEmailConnected && <span className="text-[10px] font-bold text-green-600 uppercase tracking-tighter">Activo</span>}
                </div>
              </div>
              <div className="p-4 rounded-2xl border border-slate-100 bg-white opacity-60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-300" />
                    <span className="text-sm font-semibold text-slate-700">Seguimiento de Apertura</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] text-slate-400">Próximamente</Badge>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50/50 border-t border-slate-100 py-4">
            <Link href="/dashboard/settings/comunicaciones" className="w-full">
              <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:bg-white hover:border-blue-400 hover:text-blue-600 transition-all group">
                {isEmailConnected ? 'Gestionar Configuración' : 'Configurar Servidor de Correo'}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <Card className="bg-slate-900 border-none shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardHeader>
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-2">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <CardTitle className="text-white">Portales</CardTitle>
            <CardDescription className="text-slate-400 text-xs">Sincronización multi-portal</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href="/marketing/portales" className="w-full">
              <Button variant="ghost" className="w-full text-blue-400 hover:text-white hover:bg-blue-600/20 px-0 justify-between">
                Ver Conexiones
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        {/* Agrega más tarjetas de "Próximamente" si lo deseas */}
      </div>
    </div>
  );
}
