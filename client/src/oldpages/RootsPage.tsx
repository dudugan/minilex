import React, {useState } from 'react'
import { useRoots } from '../hooks/useRoots'
import { useWords } from '../hooks/useWords'

export default function RootsPage() {
  const { roots, loading, error, search, 
    setSearch, reload, createRoot, 
    updateRoot, deleteRoot } = useRoots()
  const { words } = useWords()

  const [newPhono, setNewPhono] = useState('')
  const [newOrtho, setNewOrtho] = useState('')
  const [newDefinition, setNewDefinition] = useState('')
  const [newNotes, setNewNotes] = useState('')
  const [newEtymology, setNewEtymology] = useState('')
  const [newWordIds, setNewWordIds] = useState<number[]>([])

  console.log('RootsPage render, roots =', roots, 
    'loading=', loading)

  if (loading) return <p>Loading…</p>
  if (error)   return <p>Error: {error}</p>

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPhono || !newOrtho) return 
      // PHONO and ORTHO are required
    await createRoot({ 
      phono: newPhono, 
      ortho: newOrtho, 
      definition: newDefinition, 
      notes: newNotes,
      etymology: newEtymology, 
      wordIds: newWordIds.length ? 
        newWordIds : undefined
    })
    setNewPhono('')
    setNewOrtho('')
    setNewDefinition('')
    setNewNotes('')
    setNewEtymology('')
  }

  return (
    <div>
      <h1>roots</h1>
      {/* SEARCH */}
      <div style={{ marginBottom: '1em' }}>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              reload()
            }}}
        /> 
        <button onClick={reload}>search</button>
      </div>

      {/* CREATE */}
      <form onSubmit={handleCreate} style={{ marginBottom: '1em' }}>
        <input
          type="text"
          placeholder="<orthographic>"
          value={newOrtho}
          onChange={e => setNewOrtho(e.target.value)}
          required // ORTHO is required
        />
        <input
          type="text"
          placeholder="/phonemic/"
          value={newPhono}
          onChange={e => setNewPhono(e.target.value)}
          required // PHONO is required
        />
        <input
          type="text"
          placeholder="concept"
          value={newDefinition}
          onChange={e => setNewDefinition(e.target.value)}
        />
        <input
          type="text"
          placeholder="notes"
          value={newNotes}
          onChange={e => setNewNotes(e.target.value)}
        />
        <input
          type="text"
          placeholder="etymology"
          value={newEtymology}
          onChange={e => setNewEtymology(e.target.value)}
        />
        <select
          multiple
          value={newWordIds.map(String)}
          onChange={e => {
            const options = Array.from(
              e.target.selectedOptions, 
              option => Number(option.value))
            setNewWordIds(options)
          }}
          size={Math.min(5, words.length)} // show up to 5 rows
        >
          {words.map(w => (
            <option key={w.id} value={w.id}>
              {w.ortho}
            </option>
          ))}
        </select>
        <button type="submit">create</button>
    </form>

    {/* LIST OF ROOTS */}
    <ul>
        {roots.map(r => (
            <li key={r.id} style={{ marginBottom: '0.5em' }}>
                {r.ortho} — {r.phono} : {r.definition}

                {/* UD BUTTONS */}
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newDef = 
                        prompt('new concept?', 
                          r.definition || '')
                        if (newDef !== null) {
                            updateRoot(r.id, { definition: newDef })
                        }
                    }}
                >edit definition</button>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newPhono = 
                        prompt('new phonological form?', 
                          r.phono || '')
                        if (newPhono !== null) {
                            updateRoot(r.id, { phono: newPhono })
                        }
                    }}
                >edit ph. form</button>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newOrtho = 
                        prompt('new orthographical form?', 
                          r.ortho || '')
                        if (newOrtho !== null) {
                            updateRoot(r.id, { ortho: newOrtho })
                        }
                    }}
                >edit orth. form</button>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newNotes = 
                        prompt('new notes?', 
                          r.notes || '')
                        if (newNotes !== null) {
                            updateRoot(r.id, { notes: newNotes })
                        }
                    }}
                >edit notes</button>
                <button
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newEtymology = 
                        prompt('new etymology?', 
                          r.etymology || '')
                        if (newEtymology !== null) {
                            updateRoot(r.id, { 
                              etymology: newEtymology })
                        }
                    }}
                >edit etymology</button>
                <select
                    multiple
                    value={r.wordIds?.map(String) || []}
                    onChange={e => {
                      const options = Array.from(
                        e.target.selectedOptions, 
                        option => Number(option.value))
                      updateRoot(r.id, { wordIds: options })
                    }}
                    size={Math.min(5, words.length)} // show up to 5 rows
                  >
                    {words.map(w => (
                      <option key={w.id} value={w.id}>
                        {w.ortho}
                      </option>
                    ))}
                </select>
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
