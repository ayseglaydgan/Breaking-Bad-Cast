import React from 'react'
import './CharacterGrid.css'
import CharacterItem from './CharacterItem'
import Spinner from '../UI/Spinner'

export const CharacterGrid = ({ items, isloading, setPage, page }) => {
    let newItems = items.filter(item => item.image_url !== null)
    // source = https://static.wikia.nocookie.net/harrypotter/images/2/2d/MarvoloGaunt.jpeg/revision/latest?cb=20180101230127
    //target = https://static.wikia.nocookie.net/harrypotter/images/2/2d/MarvoloGaunt.jpeg
    //
    newItems = newItems.map(item => {
        const newImage = item.image_url.split('/revision')[0]
        return { ...item, image_url: newImage }
    })
    return isloading ? <Spinner /> : <section className='cards'>
        {newItems.map(item => (
            <div>
                <CharacterItem key={item.id} item={item} />

            </div>

        ))}
        <button className='load-btn' onClick={() => setPage(page + 1)}>Load More</button>
    </section>
}

export default CharacterGrid