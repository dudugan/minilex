import { useState, useEffect, useCallback } from 'react'

export interface Feature {
  id: number
  name: string
  senseIds?: number[]
  categoryIds?: number[]
  // grammarTables GrammarTable[] later!
}

export function useFeatures() {
  const [features,  setFeatures]  = useState<Feature[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState<string>('')

  const fetchFeatures = useCallback(async () => {
    setLoading(true); setError(null)
    try {
        const url = search
            ? `/api/features?search=${encodeURIComponent(search)}`
            : '/api/features'
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
    setFeatures(await res.json())
    } catch (err: any) {
      setError(err.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [search])

  useEffect(() => {
    fetchFeatures()
  }, [fetchFeatures])

  // CREATE FEATURE
    const createFeature = async (data: Omit<Feature, 'id'>) => {
      await fetch('/api/features', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      await fetchFeatures()
    }

    // UPDATE ROOT
    const updateFeature = async (id: number, 
        data: Partial<Omit<Feature, 'id'>>) => {
      await fetch(`/api/features/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      await fetchFeatures()
    }

    // DELETE ROOT
    const deleteFeature = async (id: number) => {
        await fetch(`/api/features/${id}`, {
            method: 'DELETE',
        })
        await fetchFeatures() 
    }

  return { features, loading, error, search, 
    setSearch, reload: fetchFeatures, createFeature, 
    updateFeature, deleteFeature }  
}