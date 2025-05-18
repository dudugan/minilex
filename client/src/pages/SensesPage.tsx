import React, {useEffect, useState } from 'react'
import { useSenses } from '../hooks/useSenses'
import { useCategories } from '../hooks/useCategories'
import { useFeatures } from '../hooks/useFeatures'
import { useWords } from '../hooks/useWords'

export default function SensesPage() {
  const { senses, loading, error, search, setSearch, reload, createSense, updateSense, deleteSense } = useSenses()
  const { words } = useWords()
  const { categories } = useCategories()
  const { features } = useFeatures()
  
  const [newGloss, setNewGloss] = useState('')
  const [newDefinition, setNewDefinition] = useState('')
  const [newNotes, setNewNotes] = useState('')
  const [newWordId, setNewWordId] = useState<number | ''>('')
  const [newCategoryId, setNewCategoryId] = useState<number | ''>('')
  const [newFeatureIds, setNewFeatureIds] = useState<number[]>([])

  console.log('SensesPage render, senses =', senses, 'loading=', loading)

  // wait for words and categories lists to load
  useEffect(() => {
    if (words.length) setNewWordId(words[0].id)
    if (categories.length) setNewCategoryId(categories[0].id)
    }, [words, categories])

  if (loading) return <p>Loading…</p>
  if (error)   return <p>Error: {error}</p>

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newGloss || !newWordId || !newCategoryId) return
    await createSense({ 
      gloss: newGloss,
      definition: newDefinition || undefined,
      notes: newNotes || undefined, 
      wordId: Number(newWordId),
      categoryId: Number(newCategoryId),
      featureIds: newFeatureIds.length ? newFeatureIds : undefined
    })
    setNewGloss('')
    setNewDefinition('')
    setNewNotes('')
    setNewWordId('')
    setNewCategoryId('')
    setNewFeatureIds([])
  }

  return (
    <div>
      <h1>Senses</h1>
      {/* SEARCH */}
      <div style={{ marginBottom: '1em' }}>
        <input
          type="text"
          placeholder="search senses by any field"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => e.key==='Enter' && reload()}
        /> 
        <button onClick={reload}>search</button>
      </div>

      {/* CREATE */}
      <form onSubmit={handleCreate} style={{ marginBottom: '1em' }}>
        <input
          type="text"
          placeholder="gloss"
          value={newGloss}
          onChange={e => setNewGloss(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="definition (optional)"
          value={newDefinition}
          onChange={e => setNewDefinition(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="notes (optional)"
          value={newNotes}
          onChange={e => setNewNotes(e.target.value)}
          required
        />
        <select
          value={newWordId}
          onChange={e => setNewWordId(Number(e.target.value))}
          required
        >
          {senses.map(s => (
            <option key={s.id} value={s.id}>
              {s.gloss}
            </option>
          ))}
        </select>
        <select
          value={newCategoryId}
          onChange={e => setNewCategoryId(Number(e.target.value))}
          required
        >
          {categories.map(c => ( // this error will resolve once make categories
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          multiple
          value={newFeatureIds.map(String)}
          onChange={e => {
            const options = Array.from(
              e.target.selectedOptions, 
              option => Number(option.value))
            setNewFeatureIds(options)
          }}
          size={Math.min(5, features.length)} // show up to 5 rows
        >
          {features.map(f => ( // error will resolve once make features
            <option key={f.id} value={f.id}>
              {f.name}
            </option>
          ))}
        </select>
        <button type="submit">add sense</button>
    </form>

    {/* LIST OF SENSES */}
    <ul>
        {senses.map(s => (
            <li key={s.id} style={{ marginBottom: '0.5em' }}>
                <strong>{s.gloss}</strong>
                {s.definition && ` — ${s.notes}`}
                <button 
                    style={{ marginLeft: '8' }}
                    onClick={() => {
                        const newGloss = prompt('new gloss?', s.gloss)
                        if (newGloss !== null) {
                            updateSense(s.id, { gloss: newGloss })
                        }
                    }}
                >edit gloss</button>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newDefinition = prompt('new definition?', s.definition || '')
                        if (newDefinition !== null) {
                            updateSense(s.id, { definition: newDefinition })
                        }
                    }}
                >edit definition</button>
                <label>
                  word:
                  <select
                    value={s.wordId}
                    onChange={e => {
                      const newWordId = Number(e.target.value)
                      updateSense(s.id, { wordId: newWordId })
                    }}
                  >
                    {words.map(w => (
                      <option key={w.id} value={w.id}>
                        {w.ortho}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  category:
                  <select
                    value={s.categoryId}
                    onChange={e => {
                      const newCategoryId = Number(e.target.value)
                      updateSense(s.id, { categoryId: newCategoryId })
                    }}
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label style={{ display: 'block', marginTop: '8' }}>
                  features:
                  <select
                    multiple
                    value={s.featureIds?.map(String) || []}
                    onChange={e => {
                      const options = Array.from(
                        e.target.selectedOptions, 
                        option => Number(option.value))
                      updateSense(s.id, { featureIds: options })
                    }}
                    size={Math.min(5, features.length)} // show up to 5 rows
                  >
                    {features.map(f => (
                      <option key={f.id} value={f.id}>
                        {f.name}
                      </option>
                    ))}
                  </select>
                </label>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newNotes = prompt('new notes?', s.notes || '')
                        if (newNotes !== null) {
                            updateSense(s.id, { notes: newNotes })
                        }
                    }}
                >edit notes</button>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        if (confirm(`delete sense “${s.gloss}”?`)) {
                            deleteSense(s.id)
                        }
                    }}
                >delete</button>
            </li>
            ))}
    </ul>


      <button onClick={reload}>refresh</button>
    </div>
  )
}
