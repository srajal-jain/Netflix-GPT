import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48 pr-4'>
        <img
          src={IMG_CDN + posterpath}
          alt='poster'
        />
    </div>
  )
}

export default MovieCard