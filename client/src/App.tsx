// import { useState } from 'react'
// import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RootsPage from './pages/RootsPage'
import WordsPage from './pages/WordsPage'


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      {/* You can add a Nav here later */}
      <Routes>
        {/* Redirect the root URL to /roots -- prev. no 'replace' */}
        <Route path="/" element={<Navigate to="/roots" replace />} />
        {/* List & detail pages for your resources */}
        <Route path="/roots" element={<RootsPage />} />
        <Route path="/words" element={<WordsPage />} />

        {/* TODO: add Routes for Categories, Features, Words, etc. */}
      </Routes>
    </BrowserRouter>
  )




  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}