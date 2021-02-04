import React from 'react'

const GiftGridItem = ({id, title, url}) => {
    return (
        <div className='card animate__animated animate__fadeInDown animate__delay-2s'>
            {
            
                <img src={ url } alt={ title } >
                </img>
                
            } 
        </div>
    )
}

export default GiftGridItem
