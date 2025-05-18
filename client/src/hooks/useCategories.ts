import { useState, useEffect, useCallback } from 'react'

export interface Category {
  id: number
  name: string
  senseIds?: number[]
  featureIds?: number[]
  // grammarTables GrammarTable[] later!
}

export function useCategories() {
  const [categories,  setCategories]  = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState<string>('')

  const fetchCategories = useCallback(async () => {
    setLoading(true); setError(null)
    try {
        const url = search
            ? `/api/categories?search=${encodeURIComponent(search)}`
            : '/api/categories'
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
    setCategories(await res.json())
    } catch (err: any) {
      setError(err.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [search])

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  // CREATE CATEGORY
    const createCategory = async (data: Omit<Category, 'id'>) => {
      await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      await fetchCategories()
    }

    // UPDATE ROOT
    const updateCategory = async (id: number, data: Partial<Omit<Category, 'id'>>) => {
      await fetch(`/api/categories/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      await fetchCategories()
    }

    // DELETE ROOT
    const deleteCategory = async (id: number) => {
        await fetch(`/api/categories/${id}`, {
            method: 'DELETE',
        })
        await fetchCategories() 
    }

  return { categories, loading, error, search, setSearch, reload: fetchCategories, createCategory, updateCategory, deleteCategory }  
}