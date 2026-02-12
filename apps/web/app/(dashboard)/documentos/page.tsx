'use server'

import { getContracts } from "@/app/actions/contracts"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Plus, FileText, Download } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export default async function DocumentsPage() {
    const contracts = await getContracts()

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Documentos</h1>
                    <p className="text-muted-foreground">Gestiona contratos y documentos legales.</p>
                </div>
                <Link href="/documentos/nuevo">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Nuevo Documento
                    </Button>
                </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {contracts.map((contract) => (
                    <Card key={contract.id}>
                        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                            <div className="space-y-1">
                                <CardTitle className="text-base font-medium">
                                    {contract.title}
                                </CardTitle>
                                <CardDescription>
                                    {contract.property?.title || "Sin Propiedad Asignada"}
                                </CardDescription>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs font-semibold
                                ${contract.status === 'signed' ? 'bg-green-100 text-green-800' :
                                    contract.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-gray-100 text-gray-800'}`}>
                                {contract.status === 'draft' ? 'Borrador' :
                                    contract.status === 'generated' ? 'Generado' :
                                        contract.status === 'signed' ? 'Firmado' : 'Archivado'}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground mb-4">
                                <p>Cliente: {contract.lead?.name || "Sin Cliente"}</p>
                                <p>Creado: {format(new Date(contract.created_at), "d MMM yyyy", { locale: es })}</p>
                            </div>
                            <div className="flex gap-2">
                                <Link href={`/documentos/${contract.id}`} className="w-full">
                                    <Button variant="outline" size="sm" className="w-full">
                                        <FileText className="mr-2 h-3 w-3" /> Ver / Editar
                                    </Button>
                                </Link>
                                {contract.file_url && (
                                    <Button variant="ghost" size="sm">
                                        <Download className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {contracts.length === 0 && (
                    <div className="col-span-full flex flex-col items-center justify-center p-8 border border-dashed rounded-lg bg-gray-50 text-gray-500">
                        <FileText className="h-10 w-10 mb-2 opacity-20" />
                        <p>No hay documentos creados aún.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
