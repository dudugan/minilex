import React, {useState } from 'react'
import { useWords } from '../hooks/useWords'

export default function RootsPage() {
  const { words, loading, error, search, setSearch, reload, createWord, updateWord, deleteWord } = useWords()
  const [newPhono, setNewPhono] = useState('')
  const [newOrtho, setNewOrtho] = useState('')
  const [newType, setNewType] = useState<'stem'|'infl'>('stem')

  console.log('RootsPage render, words =', words, 'loading=', loading)

  if (loading) return <p>Loading…</p>
  if (error)   return <p>Error: {error}</p>

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPhono || !newOrtho) return
    await createWord({ phono: newPhono, ortho: newOrtho, type: newType })
    setNewPhono('')
    setNewOrtho('')
    setNewType('stem')
  }

  return (
    <div>
      <h1>Words</h1>
      {/* SEARCH */}
      <div style={{ marginBottom: '1em' }}>
        <input
          type="text"
          placeholder="search words by any field"
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
        <select
          value={newType}
          onChange={e => setNewType(e.target.value as 'stem'|'infl')}
        >
          <option value="stem">stem/derivational morpheme</option>
          <option value="infl">inflectional morpheme</option>    
          required
        </select>
        <button type="submit">add word</button>
    </form>

    {/* LIST OF WORDS */}
    <ul>
        {words.map(w => (
            <li key={w.id} style={{ marginBottom: '0.5em' }}>
                {w.ortho} — {w.phono} : {w.type}
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newType = prompt('new type?', w.type) as 'stem'|'infl'
                        if (newType !== null) {
                            updateWord(w.id, { type: newType })
                        }
                    }}
                >edit type</button>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newPhono = prompt('new phonological form?', w.phono || '')
                        if (newPhono !== null) {
                            updateWord(w.id, { phono: newPhono })
                        }
                    }}
                >edit ph. form</button>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        const newOrtho = prompt('new orthographical form?', w.ortho || '')
                        if (newOrtho !== null) {
                            updateWord(w.id, { ortho: newOrtho })
                        }
                    }}
                >edit orth. form</button>
                <button 
                    style={{ marginLeft: '0.5em' }}
                    onClick={() => {
                        if (confirm(`delete word “${w.ortho}”?`)) {
                            deleteWord(w.id)
                        }
                    }}
                >delete</button>
            </li>
            ))}
    </ul>


      <button onClick={reload}>refresh</button>
      <ul>
        {words.map(w => (
          <li key={w.id}>
            {w.ortho} — {w.phono} : {w.type}
          </li>
        ))}
      </ul>
    </div>
  )
}
