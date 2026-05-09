'use client';

import React, { useState, useEffect } from 'react';
import { 
  startWhatsAppBinding,
  getWhatsAppServiceStatus,
  disconnectWhatsAppService,
  isSuperAdmin,
  saveSystemConfig,
  getLatestQR,
  getSystemInfrastructureInfo
} from '@/app/actions/whatsapp-n8n';
import { 
  QrCode, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MessageSquare, 
  Smartphone,
  Settings,
  Shield,
  Zap,
  Power
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from 'sonner';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WhatsAppConnector() {
  const [status, setStatus] = useState<'disconnected' | 'pending_binding' | 'connected' | 'error' | 'loading'>('loading');
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUserSuperAdmin, setIsUserSuperAdmin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [infraInfo, setInfraInfo] = useState<any>(null);

  useEffect(() => {
    loadStatus();
    checkSuperAdmin();
    loadInfraInfo();
  }, []);

  const loadInfraInfo = async () => {
    const info = await getSystemInfrastructureInfo();
    setInfraInfo(info);
  };

  // Polling para el código QR y estado de conexión
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === 'pending_binding') {
      interval = setInterval(async () => {
        const result = await getLatestQR();
        if (result.success && result.status === 'connected') {
          setStatus('connected');
          setQrCode(null);
        } else if (result.success && result.qr) {
          setQrCode(result.qr);
        }
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [status]);

  const checkSuperAdmin = async () => {
    const admin = await isSuperAdmin();
    setIsUserSuperAdmin(admin);
  };

  const loadStatus = async () => {
    setStatus('loading');
    const result = await getWhatsAppServiceStatus();
    setStatus(result.status as any);
  };

  const handleStartBinding = async () => {
    setIsSubmitting(true);
    const result = await startWhatsAppBinding();
    if (result.success) {
      if (result.qr) setQrCode(result.qr);
      setStatus('pending_binding');
      toast.success('Servidor preparado. Por favor escanea el código QR.');
    } else {
      toast.error(result.error || 'Error al iniciar conexión.');
    }
    setIsSubmitting(false);
  };

  const handleDisconnect = async () => {
    if (!confirm('¿Estás seguro de que deseas desconectar tu cuenta de WhatsApp?')) return;
    setIsSubmitting(true);
    const result = await disconnectWhatsAppService();
    if (result.success) {
      setStatus('disconnected');
      setQrCode(null);
      toast.success('Cuenta desconectada correctamente.');
    }
    setIsSubmitting(false);
  };

  const handleSaveConfig = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const entries = Array.from(formData.entries());
      for (const [key, value] of entries) {
        if (value) await saveSystemConfig(key as string, value as string);
      }
      toast.success('Configuración global del sistema actualizada.');
      setShowAdminPanel(false);
    } catch (error) {
      toast.error('Error al guardar configuración.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center p-12 bg-white rounded-2xl border border-slate-100 shadow-sm animate-pulse">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <Card className="relative overflow-hidden border-none shadow-xl bg-gradient-to-br from-white to-slate-50">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-16 -mt-16 blur-3xl" />
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-green-500 rounded-xl shadow-lg shadow-green-500/20">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-slate-800">WhatsApp Automation</CardTitle>
              <CardDescription className="text-slate-500">Conecta tu número personal para respuestas automáticas</CardDescription>
            </div>
          </div>
          <Badge 
            variant={status === 'connected' ? 'default' : 'secondary'}
            className={status === 'connected' ? 'bg-green-500 hover:bg-green-600 px-3 py-1' : 'bg-slate-200 text-slate-600 px-3 py-1'}
          >
            {status === 'connected' ? 'Conectado' : status === 'pending_binding' ? 'Pendiente' : 'Desconectado'}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {status === 'disconnected' && (
          <div className="py-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Respuestas al instante</p>
                  <p className="text-xs text-slate-500">Tus leads recibirán un mensaje de bienvenida inmediato.</p>
                </div>
              </div>
              <div className="p-4 bg-purple-50/50 rounded-2xl border border-purple-100 flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Smartphone className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Usa tu propio número</p>
                  <p className="text-xs text-slate-500">Vincula tu cuenta personal en segundos mediante QR.</p>
                </div>
              </div>
            </div>
            <Button 
              onClick={handleStartBinding} 
              disabled={isSubmitting}
              className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-bold text-base shadow-lg shadow-green-500/25 transition-all active:scale-95"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Vincular mi WhatsApp Ahora"}
            </Button>
          </div>
        )}

        {status === 'pending_binding' && (
          <div className="flex flex-col items-center justify-center py-4 space-y-4 bg-white rounded-3xl border-2 border-dashed border-slate-200 p-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-green-500/10 blur-xl rounded-full scale-110 group-hover:bg-green-500/20 transition-all" />
              {qrCode ? (
                <img src={qrCode} alt="WhatsApp QR Code" className="relative w-48 h-48 rounded-xl shadow-2xl border-4 border-white" />
              ) : (
                <div className="relative w-48 h-48 bg-slate-50 flex items-center justify-center rounded-xl">
                  <QrCode className="w-12 h-12 text-slate-300 animate-pulse" />
                </div>
              )}
            </div>
            <div className="text-center space-y-1">
              <p className="text-lg font-bold text-slate-800">Escanea el código QR</p>
              <p className="text-sm text-slate-500 px-4">Abre WhatsApp en tu teléfono {'>'} Dispositivos vinculados {'>'} Vincular un dispositivo.</p>
            </div>
            <Button variant="ghost" size="sm" onClick={loadStatus} className="text-blue-600 hover:text-blue-700">
              <Loader2 className="w-3 h-3 mr-2 animate-spin" />
              Actualizar Estado Manualmente
            </Button>
          </div>
        )}

        {status === 'connected' && (
          <div className="p-6 bg-green-50 rounded-3xl border border-green-100 flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-green-800">¡WhatsApp Activo!</h3>
              <p className="text-sm text-green-600 font-medium">Tu cuenta está conectada y lista para automatizar respuestas.</p>
            </div>
            <div className="w-full pt-4">
              <Button 
                variant="outline" 
                onClick={handleDisconnect}
                disabled={isSubmitting}
                className="w-full border-green-200 text-green-700 hover:bg-green-100 hover:text-green-800"
              >
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Power className="w-4 h-4 mr-2" />}
                Desconectar Cuenta
              </Button>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="p-6 bg-red-50 rounded-3xl border border-red-100 text-center space-y-3">
            <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
            <p className="text-sm text-red-700 font-medium">Hubo un problema al conectar con el servidor.</p>
            <Button variant="outline" size="sm" onClick={loadStatus} className="border-red-200 text-red-700">Reintentar</Button>
          </div>
        )}
      </CardContent>

      <CardFooter className="bg-slate-50/50 border-t border-slate-100 py-3 flex justify-between items-center px-8">
        <div className="flex items-center gap-4">
          {isUserSuperAdmin && (
            <Dialog open={showAdminPanel} onOpenChange={setShowAdminPanel}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600 transition-colors">
                  <Settings className="w-4 h-4 mr-1.5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Infraestructura Central</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] rounded-3xl">
                <form onSubmit={handleSaveConfig} className="space-y-6">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                      <Shield className="w-6 h-6 text-blue-600" />
                      Gestión Central de InmoCMS
                    </DialogTitle>
                    <DialogDescription>
                      Configura la infraestructura global de WhatsApp para todos tus agentes suscritos.
                    </DialogDescription>
                  </DialogHeader>
                  
                    <div className="space-y-4 py-2">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Servidor n8n</Label>
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm" 
                            onClick={loadInfraInfo}
                            className="h-6 text-[10px] px-2"
                          >
                            Actualizar
                          </Button>
                        </div>
                        <Input name="N8N_API_URL" defaultValue={infraInfo?.N8N_API_URL} placeholder="https://n8n.tu-servidor.com/api/v1" />
                        <Input name="N8N_API_KEY" type="password" defaultValue={infraInfo?.N8N_API_KEY} placeholder="API Key de n8n" />
                        <Input name="N8N_MASTER_FLOW_ID" defaultValue={infraInfo?.N8N_MASTER_FLOW_ID} placeholder="ID del Flujo Maestro (ej. 1)" />
                        <Input name="N8N_WEBHOOK_BASE_URL" defaultValue={infraInfo?.N8N_WEBHOOK_BASE_URL} placeholder="https://n8n.tu-servidor.com" />
                      </div>
                      
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <Label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Evolution API</Label>
                        <Input name="EVOLUTION_API_URL" defaultValue={infraInfo?.EVOLUTION_API_URL} placeholder="https://evolution.tu-servidor.com" />
                        <Input name="EVOLUTION_API_KEY" type="password" defaultValue={infraInfo?.EVOLUTION_API_KEY} placeholder="Global API Key de Evolution" />
                      </div>
                    </div>

                  <DialogFooter>
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 h-11 rounded-xl">
                      {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : "Guardar Ajustes del Sistema"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>
        <div className="flex items-center gap-1.5 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
          <Smartphone className="w-3 h-3" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Powered by Evolution API</span>
        </div>
      </CardFooter>
    </Card>
  );
}
