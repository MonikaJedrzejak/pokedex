import React from 'react'

export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <form>
        <label htmlFor="header-search">
            <span className="visually-hidden"><i className="fa fa-search"></i> </span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Quick search"
            className="search-bar border-light"
        />
    </form>
)}