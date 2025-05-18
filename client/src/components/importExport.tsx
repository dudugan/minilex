import React from 'react'

export default function importExport() {
    const exportData = async () => {
        const response = await fetch('/api/export')
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'portalex.json'
        document.body.append(a)
        a.click()
        a.remove()
        URL.revokeObjectURL(url)
    }
    const importData = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        const json = await file.text()
        await fetch('/api/import', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        })
        window.location.reload()
    }
    return (
        <div>
            <button onClick={exportData}>export</button>
            <input type="file" accept=".json" onChange={importData} />
        </div>
    )
}

// TODO? also mirror this bundle in local storage