import React from 'react'
import Header from '../../pages/Header/Header'
import Collection from '../../pages/Collection/Collection'
import Creators from '../../pages/Creators/Creators'
import Categories from '../../pages/Categories/Categories'
import Discover from '../../pages/Discover/Discover'
import Mushroom from '../../pages/Mushroom/Mushroom'
import Works from '../../pages/Works/Works'
import Digest from '../../pages/Digest/Digest'
import Footer from '../../pages/Footer/Footer'

const Main = () => {
  return (
    <div className='w-[100%]'>
      <Header/>
      <Collection/>
      <Creators/>
      <Categories/>
      <Discover/>
      <Mushroom/>
      <Works/>
      <Digest/>
      <Footer/>
    </div>
  )
}

export default Main
