import React, { useState } from 'react'
import Layout, { Table } from '../components/layout'
import { useRoots, type Root } from '../hooks/useRoots'

const columns = [
  { key: 'phono', label: '/phonemic/' },
  { key: 'ortho', label: '<orthographic>' },
  { key: 'definition', label: 'concept' },
  { key: 'notes', label: 'notes' },
  { key: 'etymology', label: 'etymology' },
  
//   CURRENTLY DON'T RENDER ALL THE WORDS FOR EACH ROOT INLINE:

//   { key: 'wordIds', label: 'words',
//     render: (r: Root & { words: { ortho: string }[] }) =>
//           r.words.map(w => w.ortho).join(', ')
//   } 
]; 

export default function RootsPage() {
    const {
    roots,
    loading,
    error,
    updateRoot,
    reload,
  } = useRoots();

  // track selected row
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const onRowClick = (id: number) => {
    setSelectedId(prev => (prev === id ? null : id));
  };

  // update a single field by double click
  const onFieldUpdate = (id: number, key: string, value: any) => {
    updateRoot(id, { [key]: value });
  };

  return (
    <Layout>
      {loading && <p>Loading…</p>}
      {error   && <p>Error: {error}</p>}
      {!loading && !error && (
        <Table
          columns={columns}
          data={roots}
          onRowClick={onRowClick}
          onFieldUpdate={onFieldUpdate}
        />
      )}
    </Layout>
  );
}