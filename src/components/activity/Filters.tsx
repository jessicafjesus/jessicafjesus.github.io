import { Fragment, useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Chip, Slider } from "@mui/material";

const Filters = () => {
    const [type,showType] = useState(true)
    const [price,showPrice] = useState(true)
    const [distance,showDistance] = useState(true)
    const [age,showAge] = useState(true)
    const [rating,showRating] = useState(true)
    const [ratingValue,setRatingValue] = useState([0,5])
    const [other,showOther] = useState(true)

  return (
    <section
      className="container pr-5 pl-5 pb-3 pt-3 pb-1 border bg rounded-3 shadow mx-auto mt-5 mb-5 text-left"
      style={{ backgroundColor: "#FFFFFF" }}
    >
        <h1>Filter By</h1>
        <h3>Type{type ? <KeyboardArrowUpIcon onClick={() => {showType(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showType(true)}}/>}</h3>
        {type && <Chip label="History"></Chip>}
        <h3>Price{price ? <KeyboardArrowUpIcon onClick={() => {showPrice(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showPrice(true)}}/>}</h3>
        <h3>Distance{distance ? <KeyboardArrowUpIcon onClick={() => {showDistance(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showDistance(true)}}/>}</h3>
        <h3>Age{age ? <KeyboardArrowUpIcon onClick={() => {showAge(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showAge(true)}}/>}</h3>
        <h3>Rating{rating ? <KeyboardArrowUpIcon onClick={() => {showRating(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showRating(true)}}/>}</h3>
        {rating && <Box sx={{ width: 300 }}><Slider
        min={0}
        max={5}
        getAriaLabel={() => 'Rating range'}
        value={ratingValue}
        onChange={(event,newValue) => {setRatingValue(newValue as number[])}}
        valueLabelDisplay="on"
        getAriaValueText={(value) => { return `${value}€`}}
        disableSwap
      /></Box>}
        <h3>Other Filters{other ? <KeyboardArrowUpIcon onClick={() => {showOther(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showOther(true)}}/>}</h3>
    </section>
  );
};

export default Filters;
