import React, {useEffect, useState } from 'react'
import { useFeatures } from '../hooks/useFeatures'
import { useCategories } from '../hooks/useCategories'
import { useSenses } from '../hooks/useSenses'

export default function FeaturesPage() {
  const { features, loading, error, search, setSearch, reload, createFeature, updateFeature, deleteFeature } = useFeatures()
  const { categories } = useCategories()
  const { senses } = useSenses()
  
  const [newName, setNewName] = useState('')
  const [newSenseIds, setNewSenseIds] = useState<number[]>([])
  const [newCategoryIds, setNewCategoryIds] = useState<number[]>([])

  console.log('FeaturesPage render, features =', features, 'loading=', loading)

  if (loading) return <p>Loading…</p>
  if (error)   return <p>Error: {error}</p>

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName) return
    await createFeature({ 
      name: newName,
      senseIds: newSenseIds.length ? newSenseIds : undefined,
      categoryIds: newCategoryIds.length ? newCategoryIds : undefined
    })
    setNewName('')
    setNewSenseIds([])
    setNewCategoryIds([])
  }

  return (
    <div>
      <h1>Features</h1>
      {/* SEARCH */}
      <div style={{ marginBottom: '1em' }}>
        <input
          type="text"
          placeholder="search features"
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
          placeholder="name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          required
        />
        <select
          multiple
          value={newSenseIds.map(String)}
          onChange={e => {
            const options = Array.from(
              e.target.selectedOptions, 
              option => Number(option.value))
            setNewSenseIds(options)
          }}
          size={Math.min(5, senses.length)} // show up to 5 rows
        >
          {senses.map(s => (
            <option key={s.id} value={s.id}>
              {s.gloss}
            </option>
          ))}
        </select>
        <select
          multiple
          value={newCategoryIds.map(String)}
          onChange={e => {
            const options = Array.from(
              e.target.selectedOptions, 
              option => Number(option.value))
            setNewCategoryIds(options)
          }}
          size={Math.min(5, features.length)} // show up to 5 rows
        >
          {categories.map(c => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <button type="submit">add feature</button>
    </form>

    {/* LIST OF FEATURES */}
    <ul>
        {features.map(f => (
            <li key={f.id} style={{ marginBottom: '0.5em' }}>
                <strong>{f.name}</strong>
                <button 
                    style={{ marginLeft: '8' }}
                    onClick={() => {
                        const newName = prompt('new name?', f.name)
                        if (newName !== null) {
                            updateFeature(f.id, { name: newName })
                        }
                    }}
                >edit name</button>
                <label style={{ display: 'block', marginTop: '8' }}>
                  senses:
                  <select
                    multiple
                    value={f.senseIds?.map(String) || []}
                    onChange={e => {
                      const options = Array.from(
                        e.target.selectedOptions, 
                        option => Number(option.value))
                      updateFeature(f.id, { senseIds: options })
                    }}
                    size={Math.min(5, senses.length)} // show up to 5 rows
                  >
                    {senses.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.gloss}
                      </option>
                    ))}
                  </select>
                </label>
                <label style={{ display: 'block', marginTop: '8' }}>
                  categories:
                  <select
                    multiple
                    value={f.categoryIds?.map(String) || []}
                    onChange={e => {
                      const options = Array.from(
                        e.target.selectedOptions, 
                        option => Number(option.value))
                      updateFeature(f.id, { categoryIds: options })
                    }}
                    size={Math.min(5, categories.length)} // show up to 5 rows
                  >
                    {features.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </label>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        if (confirm(`delete feature “${f.name}”?`)) {
                            deleteFeature(f.id)
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
