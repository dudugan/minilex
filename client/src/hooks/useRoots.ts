import { useState, useEffect, useCallback } from 'react'

export interface Root {
  id: number
  phono: string
  ortho: string
  definition?: string
  notes?: string
  etymology?: string
  wordIds?: number[]
}

export function useRoots() {
  const [roots, setRoots] = useState<Root[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState<string>('')

  const fetchRoots = useCallback(async () => {
    setLoading(true); 
    setError(null)
    try {
        const url = search
            ? `/api/roots?search=${encodeURIComponent(search)}`
            : '/api/roots'
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
    setRoots(await res.json())
    } catch (err: any) {
      setError(err.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [search])

  useEffect(() => {
    fetchRoots()
  }, [fetchRoots])

  // CREATE ROOT
    const createRoot = async (data: Omit<Root, 'id'>) => {
        await fetch('/api/roots', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        await fetchRoots()
    }

    // UPDATE ROOT
    const updateRoot = async (id: number, 
          data: Partial<Omit<Root, 'id'>>) => {
        await fetch(`/api/roots/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        await fetchRoots()
    }
    // DELETE ROOT
    const deleteRoot = async (id: number) => {
        await fetch(`/api/roots/${id}`, {
            method: 'DELETE',
        })
        await fetchRoots() 
    }

  return { roots, loading, error, search, 
    setSearch, reload: fetchRoots, createRoot, 
    updateRoot, deleteRoot }  
}