import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterpath}) => {

  if(!posterpath) return null;

  return (
    <div className='w-36 md:w-48 pr-4'>
        <img
          src={IMG_CDN + posterpath}
          alt='poster'
        />
    </div>
  )
}

export default MovieCard