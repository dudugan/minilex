import { useState, useEffect, useCallback } from 'react'

export interface Word {
  id: number
  phono: string
  ortho: string
  type: 'stem' | 'infl'
  rootIds?: number[]
  senseIds?: number[]
}

export function useWords() {
  const [words, setWords] = useState<Word[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState<string>('')

  const fetchWords = useCallback(async () => {
    setLoading(true); 
    setError(null)
    try {
        const url = search
            ? `/api/words?search=${encodeURIComponent(search)}`
            : '/api/words'
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
    setWords(await res.json())
    } catch (err: any) {
      setError(err.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [search])

  useEffect(() => {
    fetchWords()
  }, [fetchWords])

  // CREATE ROOT
    const createWord = async (data: Omit<Word, 'id'>) => {
        await fetch('/api/words', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        await fetchWords()
    }

    // UPDATE ROOT
    const updateWord = async (id: number, data: Partial<Omit<Word, 'id'>>) => {
        await fetch(`/api/words/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        await fetchWords()
    }
    // DELETE ROOT
    const deleteWord = async (id: number) => {
        await fetch(`/api/words/${id}`, {
            method: 'DELETE',
        })
        await fetchWords() 
    }

  return { words, loading, error, search, setSearch, reload: fetchWords, createWord, updateWord, deleteWord }  
}