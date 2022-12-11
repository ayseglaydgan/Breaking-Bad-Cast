import React from 'react'
import './CharacterGrid.css'
import CharacterItem from './CharacterItem'

export const CharacterGrid = ({ items, isloading, setPage, page }) => {
    return isloading ? <h1>loading...</h1> : <section className='cards'>
        {items.map(item => (
            <div>
                <CharacterItem key={item.id} item={item} />

            </div>

        ))}
        <button className='load-btn' onClick={() => setPage(page + 1)}>Load More</button>
    </section>
}

export default CharacterGrid