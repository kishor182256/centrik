import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
const Header = () => {
    const state = useSelector(state=>state.cartreducer.carts)
    const navigate = useNavigate()
    return (
    <div style={{backgroundColor: 'yellow', display:'flex',alignItems: 'center'}}>
       <div style={{marginLeft:'50px'}}><Link to='/'>Home</Link></div>
       <div style={{marginLeft: '90%',cursor:'pointer'}}>
        <AddShoppingCartIcon sx={{ color: 'white',cursor: 'pointer'}} onClick={()=>navigate('/cart')}/>
        <span class='badge badge-warning' id='lblCartCount'> {state.length} </span>
        </div>
    </div>
  )
}

export default Header