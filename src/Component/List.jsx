import React from 'react'
// import Home from './Home'
// import About from './About'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const List = () => {
  return (
    <div>
      <li>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </li>
    </div>
  )
}

export default List
