import { useState, useEffect } from 'react'

export interface Root {
  id: number
  phono: string
  ortho: string
  definition?: string
  notes?: string
  etymology?: string
}

export function useRoots() {
  const [roots, setRoots] = useState<Root[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchRoots = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/roots')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: Root[] = await res.json()
      setRoots(data)
    } catch (err: any) {
      setError(err.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRoots()
  }, [])

  return { roots, loading, error, reload: fetchRoots }
}