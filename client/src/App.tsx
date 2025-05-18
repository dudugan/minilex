// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import RootsPage from './pages/RootsPage'
import WordsPage from './pages/WordsPage'
import SensesPage from './pages/SensesPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      {/* NAVIGATION */}
      <nav>
        <Link to="/roots">Roots</Link> |{' '}
        <Link to="/words">Words</Link> |{' '}
        <Link to="/categories">Categories</Link> |{' '}
        <Link to="/features">Features</Link> |{' '}
        <Link to="/senses">Senses</Link> |{' '}
      </nav>

      <Routes>
        {/* Redirect the root URL to /roots -- prev. no 'replace' */}
        <Route path="/" element={<Navigate to="/roots" replace />} />
        {/* List & detail pages for your resources */}
        <Route path="/roots" element={<RootsPage />} />
        <Route path="/words" element={<WordsPage />} />
        <Route path="/senses" element={<SensesPage />} />
        {/* <Route path="/categories" element={<CategoriesPage />} /> */}
        {/* <Route path="/features" element={<FeaturesPage />} /> */}

        {/* TODO: add Routes for Categories, Features, Words, etc. */}
      </Routes>
    </BrowserRouter>
  )
}