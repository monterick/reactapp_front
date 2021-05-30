import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

import Fac from '../../img/fc.png'
import Fa from '../../img/fa.png'
export default class Home extends React.Component{
    render(){
        return(
            <div className='home'>
                <nav className='nav-icons'>
                <Link to='/consumidor' className='icone'><a><img src={Fac} alt="sd" /></a></Link>
                    <a className='icone'><img src={Fa} alt="sd" /></a>
                    <a className='icone'><img src={Fac} alt="sd" /></a>
                    <a className='icone'><img src={Fac} alt="sd" /></a>
                    
                </nav>
         
            </div>
        )
    }
}