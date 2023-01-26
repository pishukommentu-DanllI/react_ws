import React from 'react'

import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

export const Header = ({user}) => {
    // let [path, setPath] = useState('/')
    // let [link_obj, setLinkObj] = useState([])

    return (
    <header>
      <nav>
      <Routes>
        <Route path='/' element={
            <>
            {!user 
                ? <> 
                    <Link to='/reg'>Registartion</Link>
                    <Link to='/log'>Login</Link>
                </>
                : <> 
                    <Link to='/cart'>Cart</Link>
                    <Link to='/orders'>Orders</Link>
                    <Link to='/logout'>LogOut</Link>
                </>
            }
            </>
        }/>

        <Route path='/reg' element={
            <>
            <Link to='/'>Home</Link>
            <Link to='/log'>Login</Link>
            </>
        }/>

        <Route path='/log' element={
            <>
            <Link to='/'>Home</Link>
            <Link to='/reg'>Registartion</Link>
            </>
        }/>

        <Route path='/cart' element={
            <>
            <Link to='/'>Home</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/logout'>LogOut</Link>
            </>
        }/>

        <Route path='/orders' element={
            <>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/logout'>LogOut</Link>
            </>
        }/>
      </Routes>
      </nav>
    </header>
  )
}
