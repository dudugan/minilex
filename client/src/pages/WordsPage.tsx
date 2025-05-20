import React, { useState } from 'react'
import Layout, { Table, type Column } from '../components/layout'
import { useWords, type Word} from '../hooks/useWords'

interface WordRow {
  id:    number
  ortho: string
  senses: string
  type:  'stem'|'infl'
  phono: string
  roots: string    // comma-joined list of orthographic forms
}

const columns: Column<WordRow>[]  = [
  { key: 'ortho', label: '<orthographic>' },
  { key: 'senses', label: 'senses' },
  { key: 'type', label: 'type' },
  { key: 'phono', label: '/phonemic/' },
  { key: 'roots', label: 'roots' },

  // { key: 'rootIds', label: 'roots',
  //   render: (w: Word & { roots: { ortho: string }[] }) =>
  //     w.roots.map(r => r.ortho).join(', ')
  // }, 
  // { key: 'senseIds', label: 'senses',
  //   render: (w: Word) => w.senseIds?.map(s => s).join(', ')
  // }
]; 

export default function wordsPage() {
    const {words, loading, error, updateWord, reload,
  } = useWords();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const rows: WordRow[] = words.map(w => ({
    id:    w.id,
    phono: w.phono,
    ortho: w.ortho,
    type:  w.type,
    senses: w.senseIds?.map(s => s).join(', '),
    roots: w.rootIds.map(r => r.ortho).join(', '),
  }))



  const onRowClick = (id: number) => {
    setSelectedId(prev => (prev === id ? null : id));
  };

  // update a single field by double click
  const onFieldUpdate = (id: number, key: string, value: any) => {
    updateWord(id, { [key]: value });
  };

  return (
    <Layout>
      {loading && <p>Loading…</p>}
      {error   && <p>Error: {error}</p>}
      {!loading && !error && (
        <Table
          columns={columns}
          data={words}
          onRowClick={onRowClick}
          onFieldUpdate={onFieldUpdate}
        />
      )}
    </Layout>
  );
}