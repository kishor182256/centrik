import { Box } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { SORT } from '../redux/actions';

const Filter = ({data,setFilteredData}) => {

  const [low,setLow] = useState('');
  const [high,setHigh] = useState('');



const handlePriceChange = (event) => {
  if(event.target.value==="Low"){
    setFilteredData(true)
    console.log('setFilteredData',event.target.value);
  }else{
    if(event.target.value==="High"){
      setFilteredData(false)
    }
  }
  

}



  return (
    <Box style={{marginTop:'10px',display:'flex',alignItems: 'center',}}>
        <p>Avg. Customer Ratings</p>
        <select>
        <option>1+</option>
        <option>2+</option>
        <option>3+</option>
        <option>4+</option>
        </select>
        <p>Discount</p>
        <select><option>1%</option></select>

        <p>Price</p>
        <select onChange={e => handlePriceChange(e)}>
          {["High", "Low"].map((option)=>{
            return (
              <option value={option} key={option}>{option}</option>
            )
          })}
        </select>
        

        

    </Box>
  )
}

export default Filter