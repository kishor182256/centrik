import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React from "react";

const SortData = ({ value, onChange ,selectedValue,setSelectedValue}) => {

  return (
    <Box
      style={{
       
        backgroundColor: "gray",
      
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <p>List By Category</p>
      <Box style={{ display: "flex", flexDirection: "row",margin: "20px",alignItems: "center",justifyContent: "center"}}>
        {value.map((values) => {
          return (
            <>
             <RadioGroup
             key={values.value}
        defaultValue="female"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
        onChange={()=>setSelectedValue(values.value)}
      >
              <FormControlLabel
                checked={selectedValue === values.value}
                // eslint-disable-next-line no-restricted-globals
                control={<Radio />}
                value={values.value}
                name={values.label}
                label={values.label}
              />
              </RadioGroup>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default SortData;
