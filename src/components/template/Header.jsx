import './Header.css'
import {Link
} from 'react-router-dom'
export default  function Header(){
    return(
        <header className="header">

            
             
       <Link to='/'><h1><i className='fa fa-firefox .red'></i> Header</h1></Link>
               
        
          
        </header>
    )
}