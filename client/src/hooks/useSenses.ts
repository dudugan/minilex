import { useState, useEffect, useCallback } from 'react'

export interface Sense {
  id: number
  gloss: string
  definition?: string
  notes?: string
  wordId: number
  categoryId: number
  featureIds?: number[]
}

export function useSenses() {
  const [senses,  setSenses]  = useState<Sense[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState<string>('')

  const fetchSenses = useCallback(async () => {
    setLoading(true); setError(null)
    try {
        const url = search
            ? `/api/senses?search=${encodeURIComponent(search)}`
            : '/api/senses'
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
    setSenses(await res.json())
    } catch (err: any) {
      setError(err.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [search])

  useEffect(() => {
    fetchSenses()
  }, [fetchSenses])

  // CREATE ROOT
    const createSense = async (data: Omit<Sense, 'id'>) => {
      await fetch('/api/senses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      await fetchSenses()
    }

    // UPDATE ROOT
    const updateSense = async (id: number, data: Partial<Omit<Sense, 'id'>>) => {
      await fetch(`/api/senses/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      await fetchSenses()
    }

    // DELETE ROOT
    const deleteSense = async (id: number) => {
        await fetch(`/api/senses/${id}`, {
            method: 'DELETE',
        })
        await fetchSenses() 
    }

  return { senses, loading, error, search, setSearch, reload: fetchSenses, createSense, updateSense, deleteSense }  
}