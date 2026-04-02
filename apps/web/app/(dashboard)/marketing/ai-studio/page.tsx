"use client"
import React, { useState, useEffect } from "react"
import { Sparkles, Video, Image as ImageIcon, Smartphone, ArrowRight, Check, ChevronRight, Search, Loader2, Clapperboard, PenTool, Wand2, Play, Instagram, Linkedin, Share2, Link2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { getProperties } from "@/app/actions/properties"
import { generateMarketingScript, publishToSocialMedia, getAudioLibrary, generateAVContent } from "@/app/actions/marketing-ai"
import { AIAvatarSelector } from "@/components/marketing/ai-avatar-selector"
import { toast } from "sonner"
import Image from "next/image"
import { createClient } from "@/lib/supabase/client"
import { Music, Mic, Upload, Volume2, Trash2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import dynamic from 'next/dynamic'


const AIVideoPlayer = dynamic(() => import('@/components/marketing/ai-video-player').then(mod => mod.AIVideoPlayer), { ssr: false })
import { MediaBrowser } from "@/components/marketing/media-browser"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { getSocialAccounts, connectSocialAccount, disconnectSocialAccount } from "@/app/actions/marketing-ai"


type ContentType = 'reel' | 'tiktok' | 'portal'


export default function AIStudioPage() {
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
