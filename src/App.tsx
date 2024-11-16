import React from 'react'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Carousel from './components/Carousel.tsx'

type Props = {}

export default function App({}: Props) {
  return (
    <div className=' overflow-x-hidden'>
<Header/>
<Hero/>
<Carousel/>

    </div>
  )
}