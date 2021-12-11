import { Fragment, useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Chip, Slider, Typography } from "@mui/material";
import useStyles from "./styles";
import CustomizedChip from "./CustomizedChip";
import CustomizedSlider from "./CustomizedSlider";

const Filters = () => {
    const [type,showType] = useState(true)
    const [selectedTypes,selectTypes] = useState<string[]>([])
    const [seeMoreTypes,setSeeTypes] = useState(false)
    const [price,showPrice] = useState(true)
    const [priceValue,setPriceValue] = useState<number[]>([0,5])
    const [distance,showDistance] = useState(true)
    const [distanceValue,setDistanceValue] = useState<number[]>([0,5])
    const [age,showAge] = useState(true)
    const [rating,showRating] = useState(true)
    const [ratingValue,setRatingValue] = useState<number[]>([0,5])
    const [other,showOther] = useState(true)

  return (
    <section
      className="container pr-5 pl-5 pb-3 pt-3 pb-1 border bg rounded-3 shadow mx-auto mt-5 mb-5 text-left"
      style={{ backgroundColor: "#FFFFFF" }}
    >
        <h1>Filter By <CloseIcon className="mt-2" style={{float:"right"}} fontSize="large"/></h1>
        <h3>Type{type ? <KeyboardArrowUpIcon onClick={() => {showType(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showType(true)}}/>}</h3>
        {type && 
        <div>
          <div className="row">
            <div className="col-lg-3">
              <CustomizedChip label={"History"} setLabels={selectTypes}/>
            </div>
            <div className="col-lg-3">
              <CustomizedChip label={"Science"} setLabels={selectTypes}/>
            </div>
            <div className="col-lg-3">
              <CustomizedChip label={"Musical"} setLabels={selectTypes}/>
            </div>
            <div className="col-lg-3">
              <CustomizedChip label={"Fashion"} setLabels={selectTypes}/>
            </div>
          </div>
          <div>
              {seeMoreTypes && <div className ="row">
                <div className="col-lg-3">
              <CustomizedChip label={"Mineral"} setLabels={selectTypes}/>
            </div>
            <div className="col-lg-3">
              <CustomizedChip label={"Nuclear"} setLabels={selectTypes}/>
            </div>
            <div className="col-lg-3">
              <CustomizedChip label={"Modern"} setLabels={selectTypes}/>
            </div>
            <div className="col-lg-3">
              <CustomizedChip label={"Finance"} setLabels={selectTypes}/>
            </div></div>}
            <div className="row">
              <p className="text-right">See {seeMoreTypes ? "Less" : "More"}
              {seeMoreTypes ? <KeyboardArrowUpIcon fontSize="small" onClick={() => {setSeeTypes(false)}}/> : <KeyboardArrowDownIcon fontSize="small" onClick={() => {setSeeTypes(true)}}/>}</p></div>
          </div>
        </div>}
        <h3>Price{price ? <KeyboardArrowUpIcon onClick={() => {showPrice(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showPrice(true)}}/>}</h3>
        {price && <CustomizedSlider min={0} max={5} setFilterValue={setPriceValue} lastValues={priceValue} />}
        <h3>Distance{distance ? <KeyboardArrowUpIcon onClick={() => {showDistance(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showDistance(true)}}/>}</h3>
        {distance && <CustomizedSlider min={0} max={5} setFilterValue={setDistanceValue} lastValues={distanceValue} />}
        <h3>Age{age ? <KeyboardArrowUpIcon onClick={() => {showAge(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showAge(true)}}/>}</h3>
        {age && <div className="row">
            <div className="col-lg-3">
              <CustomizedChip label={"All Ages"} setLabels={selectTypes}/>
            </div>
            <div className="col-lg-3">
              <CustomizedChip label={"For Kids"} setLabels={selectTypes}/>
            </div>
            <div className="col-lg-3">
              <CustomizedChip label={"18+"} setLabels={selectTypes}/>
            </div>
            <div className="col-lg-3">
            </div>
          </div>}
        <h3>Rating{rating ? <KeyboardArrowUpIcon onClick={() => {showRating(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showRating(true)}}/>}</h3>
        {rating && <CustomizedSlider min={0} max={5} setFilterValue={setRatingValue} lastValues={ratingValue} />}
        <h3>Other Filters{other ? <KeyboardArrowUpIcon onClick={() => {showOther(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showOther(true)}}/>}</h3>
        {other && <div className="row">
            <div className="col-lg-4">
              <CustomizedChip label={"Exhibitions ending soon"} setLabels={selectTypes}/>
            </div>
            <div className="col-lg-2">
              <CustomizedChip label={"Online"} setLabels={selectTypes}/>
            </div>
            <div className="col-lg-3">
            </div>
          </div>}
          <div className="mt-5 text-right">
          <button
                  className="btn btn-lg mr-3"
                  onClick={() => {}}
                  style={{ backgroundColor: "#00A3A3", color: "white" }}
                >
                  CANCEL
          </button>
          <button
                  className="btn btn-lg"
                  onClick={() => {}}
                  style={{ backgroundColor: "#00A3A3", color: "white" }}
                >
                  APPLY
          </button></div>
    </section>
  );
};

export default Filters;
