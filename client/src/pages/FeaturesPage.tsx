import React, {useEffect, useState } from 'react'
import { useSenses } from '../hooks/useSenses'
import { useCategories } from '../hooks/useCategories'
import { useFeatures } from '../hooks/useFeatures'

export default function CategoriesPage() {
  const { categories, loading, error, search, setSearch, reload, createCategory, updateCategory, deleteCategory } = useCategories()
  const { senses } = useSenses()
  const { features } = useFeatures()
  
  const [newName, setNewName] = useState('')
  const [newSenseIds, setNewSenseIds] = useState<number[]>([])
  const [newFeatureIds, setNewFeatureIds] = useState<number[]>([])

  console.log('CategoriesPage render, categories =', categories, 'loading=', loading)

  if (loading) return <p>Loading…</p>
  if (error)   return <p>Error: {error}</p>

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName) return
    await createCategory({ 
      name: newName,
      senseIds: newSenseIds.length ? newSenseIds : undefined,
      featureIds: newFeatureIds.length ? newFeatureIds : undefined
    })
    setNewName('')
    setNewSenseIds([])
    setNewFeatureIds([])
  }

  return (
    <div>
      <h1>Categories</h1>
      {/* SEARCH */}
      <div style={{ marginBottom: '1em' }}>
        <input
          type="text"
          placeholder="search categories"
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
          {senses.map(s => ( // error will resolve once make features
            <option key={s.id} value={s.id}>
              {s.gloss}
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
        <button type="submit">add category</button>
    </form>

    {/* LIST OF CATEGORIES */}
    <ul>
        {categories.map(c => (
            <li key={c.id} style={{ marginBottom: '0.5em' }}>
                <strong>{c.name}</strong>
                <button 
                    style={{ marginLeft: '8' }}
                    onClick={() => {
                        const newName = prompt('new name?', c.name)
                        if (newName !== null) {
                            updateCategory(c.id, { name: newName })
                        }
                    }}
                >edit name</button>
                <label style={{ display: 'block', marginTop: '8' }}>
                  senses:
                  <select
                    multiple
                    value={c.senseIds?.map(String) || []}
                    onChange={e => {
                      const options = Array.from(
                        e.target.selectedOptions, 
                        option => Number(option.value))
                      updateCategory(c.id, { senseIds: options })
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
                  features:
                  <select
                    multiple
                    value={c.featureIds?.map(String) || []}
                    onChange={e => {
                      const options = Array.from(
                        e.target.selectedOptions, 
                        option => Number(option.value))
                      updateCategory(c.id, { featureIds: options })
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
                        if (confirm(`delete category “${c.name}”?`)) {
                            deleteCategory(c.id)
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
