
import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../api/api";
import { ADD, SET } from "../redux/actions";
import { value } from "../util/data";
import CardComponent from "./CardComponent";
import Filter from "./Filter";
import SortData from "./SortData";

const Home = () => {
  
  const [loading,setLoading] = useState(false)

  const dispatch = useDispatch();

  const state = useSelector(state=>state.cartreducer.carts)
  const [selectedValue, setSelectedValue] = React.useState("laptops");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(false);


  const NewfilteredData = data;
  // console.log('filteredData(tru/false)',filteredData);



  useEffect(() => {
    fetchData(selectedValue)
      .then((data) => {
        // console.log('------>',data.data.products);
        setLoading(true)
          setData(dispatch(SET(data.data.products)))
          setLoading(false)
         setFilteredData(false)

      })
      .catch((error) => {
        console.error(error);
        setLoading(false)
      });
  }, [selectedValue,dispatch]);


  // useEffect(() => {
  //   if(filteredData)
  //   fetchData(selectedValue)
  //     .then((data) => {
  //       // console.log('------>',data.data.products);
  //        setLoading(true)
  //         setData(NewfilteredData)
  //         // console.log('NewfilteredData',NewfilteredData);
  //         setLoading(false)
  //         setLoading(false)

  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoading(false)
  //     });
  // }, [filteredData, selectedValue, dispatch, NewfilteredData]);

  const addToCart = (product)=>{
    console.log('state', state);
    if(product.stock<50) alert("hurry! only a few items left")
    dispatch(ADD(product));
  }

  return (
    <Box>
    <SortData value={value}  selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
    <Box style={{marginLeft:'0'}}>
        <Filter data={data} setFilteredData={setFilteredData}/>
      </Box>
    {loading ? 
      <h1>Loading Data.Please Wait...</h1>:<>
     
       <Box style={{marginLeft:'15%',position:'fixed'}} > 
       <CardComponent data={data} addToCart={addToCart}
       filteredData={filteredData}
        loading={loading} NewfilteredData={NewfilteredData} /></Box>
      </>
        }
        </Box>
      
  );
};

export default Home;
