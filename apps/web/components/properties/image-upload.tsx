'use client';

import { useState } from 'react';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';

interface ImageUploadProps {
    onUploadComplete: (urls: string[]) => void;
    maxFiles?: number;
    initialImages?: string[];
}

export function ImageUpload({ onUploadComplete, maxFiles = 10, initialImages = [] }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false);
    const [previewUrls, setPreviewUrls] = useState<string[]>(initialImages);
    const [uploadedUrls, setUploadedUrls] = useState<string[]>(initialImages);
    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []);
        if (selectedFiles.length + files.length + uploadedUrls.length > maxFiles) {
            toast.error(`Máximo ${maxFiles} imágenes permitidas`);
            return;
        }

        const newFiles = [...files, ...selectedFiles];
        setFiles(newFiles);

        // Generate previews
        const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
        setPreviewUrls([...previewUrls, ...newPreviews]);
    };

    const removeImage = (index: number) => {
        const isAlreadyUploaded = index < uploadedUrls.length;

        if (isAlreadyUploaded) {
            const newUploaded = [...uploadedUrls];
            newUploaded.splice(index, 1);
            setUploadedUrls(newUploaded);

            const newPreviews = [...previewUrls];
            newPreviews.splice(index, 1);
            setPreviewUrls(newPreviews);

            onUploadComplete(newUploaded);
        } else {
            const fileIndex = index - uploadedUrls.length;
            const newFiles = [...files];
            newFiles.splice(fileIndex, 1);
            setFiles(newFiles);

            const newPreviews = [...previewUrls];
            URL.revokeObjectURL(newPreviews[index]);
            newPreviews.splice(index, 1);
            setPreviewUrls(newPreviews);
        }
    };

    const uploadImages = async () => {
        if (files.length === 0) return;
        setUploading(true);
        const supabase = createClient();
        const newUploadedUrls: string[] = [];

        try {
            for (const file of files) {
                const fileExt = file.name.split('.').pop();
                const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
                const filePath = `properties/${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from('properties')
                    .upload(filePath, file);

                if (uploadError) throw uploadError;

                const { data } = supabase.storage.from('properties').getPublicUrl(filePath);
                newUploadedUrls.push(data.publicUrl);
            }

            const totalUploaded = [...uploadedUrls, ...newUploadedUrls];
            setUploadedUrls(totalUploaded);
            setFiles([]);
            onUploadComplete(totalUploaded);
            toast.success('Imágenes subidas correctamente');
        } catch (error: any) {
            console.error('Upload error:', error);
            toast.error('Error al subir imágenes');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {previewUrls.map((url, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden border border-gray-100 group">
                        <img src={url} alt="Preview" className="w-full h-full object-cover" />
                        <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 p-1 bg-white/80 hover:bg-white rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                ))}

                {previewUrls.length < maxFiles && (
                    <div className="aspect-square rounded-xl border-2 border-dashed border-gray-100 hover:border-blue-100 hover:bg-blue-50/10 transition-colors flex flex-col items-center justify-center cursor-pointer relative">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                            disabled={uploading}
                        />
                        <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center mb-2">
                            <ImageIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <span className="text-xs font-bold text-gray-500">Añadir Foto</span>
                    </div>
                )}
            </div>

            {files.length > 0 && (
                <Button
                    type="button"
                    onClick={uploadImages}
                    disabled={uploading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl"
                >
                    {uploading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Subiendo...
                        </>
                    ) : (
                        <>
                            <Upload className="mr-2 h-4 w-4" />
                            Subir {files.length} Imágenes
                        </>
                    )}
                </Button>
            )}
        </div>
    );
}
