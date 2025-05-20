import React, { useState, useCallback, useRef } from 'react'
import { type ReactNode} from 'react'
import {createPortal} from 'react-dom'
import { useNavigate } from 'react-router-dom'
import './layout.css'

// MASTER LAYOUT
export default function Layout({ children }: { children: ReactNode }) {

    // HELPERS
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()
    const onSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {  
        if (e.key === 'Enter') {
            // navigate(`/search/${searchTerm}`)
            navigate(`?search=${encodeURIComponent(searchTerm)}`)}}

    // LAYOUT
    return (
    <div className="layout">
        <header className="top">

            {/* VIEWNAME */}
            <h1>viewname</h1>

            {/* SEARCH BAR */}
            <input 
                className="search"
                type="text"
                placeholder="search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyDown={onSearchKeyDown}
            />

            {/* CREATE BUTTON */}
            <button 
                className="create" 
                onClick={() => setShowModal(true)}
            >new entry
            </button>
        </header>
        <main className="content">

            {/* TABLE */}
            <div className="table">{children}</div>

            {/* SIDEBAR */}
            <Sidebar />

        </main>

        {/* POPUP */}
        {showModal && <CreateModal onClose={() => setShowModal(false)} />}
    </div>
    )
}

// POPUP
function CreateModal({ onClose }: { onClose: () => void }) {
    return createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>new entry</h2>
                {/* populated by specific .tsx files */}
                <button onClick={onClose}>closer</button>
                    {/* can also be closed naturally be Esc? */}
            </div>
        </div>, document.body
    )
}

// SIDEBAR
function Sidebar() {
    const [selected, setSelected] = useState<number | null>(null)
    {/* subscribe to row clicks via context or props SAYS CHAT */}
    return (
        <aside className="sidebar" data-open={selected !== null}>
            {selected !== null ? (
                <div>
                    {/* editable fields populated here */}
                    <button className="delete">delete entry</button>
                </div>
            ) : (
                <p>select a row to see details</p>
            )}
        </aside>
    )
}

// TABLE
export interface Column<T> {
  key: Extract<keyof T, string>
  label: string
  render?: (row: T) => React.ReactNode
}
interface Properties<T> {
    columns: Column<T>[]
    data: T[]
    onRowClick: (id: number) => void
    onFieldUpdate: (id: number, key: keyof T, value: any) => void
}
export function Table<T extends {
        id: number}>({ columns, data, onRowClick, onFieldUpdate }: Properties<T>) 
    {
    const headersRef = useRef<Array<HTMLTableCellElement | null>>([]) 
        // prev. HTMLTableHeaderCellElement

    const onHeaderDoubleClick = (index: number) => {
        const th = headersRef.current[index]
        if (!th) return
        // auto-width column by measuring content
        const cells = Array.from(
            document.querySelectorAll(`td:nth-child(${index + 1})`)) as HTMLElement[]
        const maxWidth = Math.max(
            ...cells.map(cell => cell.scrollWidth),
            th.scrollWidth
        )
        th.style.width = `${maxWidth}px`
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((col, idx) => (
                        <th
                            key={col.key}
                            ref={el => { headersRef.current[idx] = el }}
                            onDoubleClick={() => onHeaderDoubleClick(idx)}
                        >
                            {col.label}
                            {/* {col.render 
                            ? col.render(row) 
                            : (row as any)[col.key]} */}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(row => (
                    <tr key={row.id} onClick={() => onRowClick(row.id)}>
                        {columns.map(col => (
                            <td key={col.key}
                                onDoubleClick={() => {
                                    const current = (row as any)[col.key]
                                    const newValue = prompt(`Edit ${col.label}`, 
                                        String(current))
                                    if (newValue !== null) {
                                        onFieldUpdate(row.id, col.key, newValue)
                                    }
                                }}
                            >{(row as any)[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}