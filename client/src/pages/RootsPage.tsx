import React, {useState } from 'react'
import { useRoots } from '../hooks/useRoots'

export default function RootsPage() {
  const { roots, loading, error, search, setSearch, reload, createRoot, updateRoot, deleteRoot } = useRoots()
  const [newPhono, setNewPhono] = useState('')
  const [newOrtho, setNewOrtho] = useState('')
  const [newDefinition, setNewDefinition] = useState('')

  console.log('RootsPage render, roots =', roots, 'loading=', loading)

  if (loading) return <p>Loading…</p>
  if (error)   return <p>Error: {error}</p>

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPhono || !newOrtho) return
    await createRoot({ phono: newPhono, ortho: newOrtho, definition: newDefinition })
    setNewPhono('')
    setNewOrtho('')
    setNewDefinition('')
  }

  return (
    <div>
      <h1>Roots</h1>
      {/* SEARCH */}
      <div style={{ marginBottom: '1em' }}>
        <input
          type="text"
          placeholder="search roots by any field"
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
          placeholder="phonological form"
          value={newPhono}
          onChange={e => setNewPhono(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="orthographic form"
          value={newOrtho}
          onChange={e => setNewOrtho(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="definition"
          value={newDefinition}
          onChange={e => setNewDefinition(e.target.value)}
          required
        />
        <button type="submit">add root</button>
    </form>

    {/* LIST OF ROOTS */}
    <ul>
        {roots.map(r => (
            <li key={r.id} style={{ marginBottom: '0.5em' }}>
                {r.ortho} — {r.phono} {r.definition && `: ${r.definition}`}
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newDef = prompt('new definition?', r.definition || '')
                        if (newDef !== null) {
                            updateRoot(r.id, { definition: newDef })
                        }
                    }}
                >edit definition</button>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newPhono = prompt('new phonological form?', r.phono || '')
                        if (newPhono !== null) {
                            updateRoot(r.id, { phono: newPhono })
                        }
                    }}
                >edit ph. form</button>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newOrtho = prompt('new orthographical form?', r.ortho || '')
                        if (newOrtho !== null) {
                            updateRoot(r.id, { ortho: newOrtho })
                        }
                    }}
                >edit orth. form</button>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        if (confirm(`delete root “${r.ortho}”?`)) {
                            deleteRoot(r.id)
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
