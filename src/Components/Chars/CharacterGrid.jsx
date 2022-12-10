import React from 'react'

export const CharacterGrid = ({ items, isloading, setPage, page }) => {
    return isloading ? <h1>loading...</h1> : <section className='cards'>
        {items.map(item => (
            <div>
                <h1>{item.name}</h1>
                <img src={item.image_url} />
            </div>

        ))}
        <button onClick={() => setPage(page + 1)}>Load More</button>
    </section>
}

export default CharacterGrid