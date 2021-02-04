import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import GiftGridItem from './GiftGridItem';

const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Cargando...</p>}

            <div className='card-grid'>
           
            {
                images.map( img  =>
                    <GiftGridItem 
                        key={ img.id }

                        // envia cada propiedad de manera independiente
                        { ...img }
                    />
                )
            }
            </div>
        </>
    )
}

export default GifGrid
