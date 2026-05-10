import { useQuery } from '@tanstack/react-query'

export function useGoogleAdsMetrics() {
    return useQuery({
        queryKey: ['google-ads-metrics'],
        queryFn: async () => {
            const res = await fetch('/api/ads/metrics')
            if (!res.ok) {
                const err = await res.json()
                throw new Error(err.error || 'Failed to fetch metrics')
            }
            return res.json()
        },
        retry: false
    })
}

export function useGoogleAdsCustomers() {
    return useQuery({
        queryKey: ['google-ads-customers'],
        queryFn: async () => {
            const res = await fetch('/api/ads/customers')
            if (!res.ok) throw new Error('Failed to fetch customers')
            return res.json()
        }
    })
}
