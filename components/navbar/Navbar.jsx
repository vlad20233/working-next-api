'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classes from './navbar.module.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'


const Navbar = () => {

  const [showDropDown,setShowDropDown] = useState(false)




  const loggedIn = false


  const handleShowDropDown = () => {
    setShowDropDown(prev => true)
  }
  const handleHideDropDown = () => {
    setShowDropDown(prev => false)
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1 className='text-white font-bold text-2xl md:text-3xl'>github/vlad-guzun</h1>
        <ul className={classes.right}>
           {loggedIn ? 
           (
            <div>
              <Image
                onClick={handleShowDropDown}
                src={'/img.jpg'}
                className='rounded-full'
                alt='img'
                width={40}
                height={40}
              />
              {showDropDown && (
                <div className={classes.dropdown}>
                  <AiOutlineCloseCircle 
                            className={classes.closeIcon}
                            onClick={handleHideDropDown}
                  />
                  <button onClick={handleHideDropDown}>Logout</button>
                  <Link href='/create' onClick={handleHideDropDown} className={classes.create}>create</Link>
                </div>
              )}
            </div>
           ) 
           : 
           (
              <div className='for-gap'>
                  <button className={classes.login}>Login</button>
                  <Link href={'/register'} className={classes.register}>Register</Link>
              </div>
           )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar