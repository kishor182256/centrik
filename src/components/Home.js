
import { Box } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../api/api";
import { ADD } from "../redux/actions";
import { value } from "../util/data";
import CardComponent from "./CardComponent";
import Filter from "./Filter";
import SortData from "./SortData";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)

  const dispatch = useDispatch();

  const state = useSelector(state=>state.cartreducer.carts)
  const [selectedValue, setSelectedValue] = React.useState("laptops");

  console.log(selectedValue);


  useEffect(() => {
    fetchData(selectedValue)
      .then((data) => {
        console.log(data.data.products);
        // setLoading(true)
        setData(data.data.products);
        // setLoading(false)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false)
      });
  }, [selectedValue]);

  const addToCart = (product)=>{
    console.log('state', state);
    if(product.stock<50) alert("hurry! only a few items left")
    dispatch(ADD(product));
  }

  return (
    <>
    <SortData value={value}  selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
    {loading ? 
      <h1>Loading Data.Please Wait...</h1>:<>
      <Box style={{marginLeft:'0'}}>
        <Filter/>
      </Box>
       <Box style={{marginLeft:'15%',position:'fixed'}} > <CardComponent data={data} addToCart={addToCart} loading={loading} /></Box>
      </>
        }
        </>
      
  );
};

export default Home;
