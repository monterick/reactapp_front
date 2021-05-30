import React from 'react'
import './Content.css'
import Rota from '../../config/router'

export default class Content extends React.Component{
    render(){
        return(
            <div className='content'>
                <Rota />               
            </div>
        )
    }
}