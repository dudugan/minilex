// import React from 'react'
import { useRoots } from '../hooks/useRoots'

export default function RootsPage() {
  const { roots, loading, error, reload } = useRoots()

  if (loading) return <p>Loading…</p>
  if (error)   return <p>Error: {error}</p>

  return (
    <div>
      <h1>Roots</h1>
      <button onClick={reload}>Refresh</button>
      <ul>
        {roots.map(r => (
          <li key={r.id}>
            {r.ortho} — {r.phono} {r.definition && `: ${r.definition}`}
          </li>
        ))}
      </ul>
    </div>
  )
}
