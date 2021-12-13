import React, { Fragment, useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Chip, Modal, Slider, Typography } from "@mui/material";
import useStyles from "./styles";
import CustomizedChip from "./CustomizedChip";
import CustomizedSlider from "./CustomizedSlider";
import { propsToClassKey } from "@mui/styles";

interface FiltersProps {
  showFilters : boolean;
  setShowFilters : React.Dispatch<React.SetStateAction<boolean>>;
  setActiveType : React.Dispatch<React.SetStateAction<string[]>>,
  types : string[],
  setActivePrice : React.Dispatch<React.SetStateAction<number[]>>,
  prices : number[],
  setActiveDistance : React.Dispatch<React.SetStateAction<number[]>>,
  distance : number[],
  setActiveAge : React.Dispatch<React.SetStateAction<string[]>>,
  age : string[],
  setActiveRating : React.Dispatch<React.SetStateAction<number[]>>,
  rating : number[],
  setActiveOther : React.Dispatch<React.SetStateAction<string[]>>,
  other : string[]
}

const Filters = (fProps : FiltersProps) => {
    const [type,showType] = useState(true)
    const [selectedTypes,selectTypes] = useState<string[]>(fProps.types)
    const [selectedAge,selectAge] = useState<string[]>(fProps.age)
    const [selectedOther,selectOther] = useState<string[]>(fProps.other)
    const [seeMoreTypes,setSeeTypes] = useState(false)
    const [price,showPrice] = useState(true)
    const [priceValue,setPriceValue] = useState<number[]>(fProps.prices)
    const [distance,showDistance] = useState(true)
    const [distanceValue,setDistanceValue] = useState<number[]>(fProps.distance)
    const [age,showAge] = useState(true)
    const [rating,showRating] = useState(true)
    const [ratingValue,setRatingValue] = useState<number[]>(fProps.rating)
    const [other,showOther] = useState(true)

    const applyHandler = (event : React.MouseEvent) => {
      fProps.setActiveType(selectedTypes);
      fProps.setActivePrice(priceValue);
      fProps.setActiveDistance(distanceValue);
      fProps.setActiveAge(selectedAge);
      fProps.setActiveRating(ratingValue);
      fProps.setActiveOther(selectedOther);
      fProps.setShowFilters(false)
    }

  return (
    <Fragment>{ <Modal
      open={fProps.showFilters}
      onClose={() => fProps.setShowFilters(false)}
      aria-labelledby="qqcoisa"
      aria-describedby="outracoisa"
      style={{position:"absolute",overflow:"scroll"}}
    >
      <div className="row h-100 d-flex align-items-center">
        <div className="col w-100 d-flex justify-content-center">
          <div className="container-sm d-inline-block text-left pr-2 pl-4 pb-2 pt-2 rounded" style={{ backgroundColor: "#FFFFFF" }}>
          <h1>Filter By <CloseIcon className="mt-2" style={{float:"right"}} fontSize="large" onClick={(event) => {fProps.setShowFilters(false)}}/></h1>
        <h3>Type{type ? <KeyboardArrowUpIcon onClick={() => {showType(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showType(true)}}/>}</h3>
        {type && 
        <div>
          <div className="row">
            <div className="col-sm-2">
              <CustomizedChip label={"History"} setLabels={selectTypes} col={4} values={selectedTypes}/>
            </div>
            <div className="col-sm-2">
              <CustomizedChip label={"Science"} setLabels={selectTypes} col={5} values={selectedTypes}/>
            </div>
            <div className="col-sm-2">
              <CustomizedChip label={"Musical"} setLabels={selectTypes} col={6} values={selectedTypes}/>
            </div>
            <div className="col-sm-2">
              <CustomizedChip label={"Fashion"} setLabels={selectTypes} col={7} values={selectedTypes}/>
            </div>
          </div>
          <div>
              {seeMoreTypes && <div className ="row">
                <div className="col-sm-2">
              <CustomizedChip label={"Mineral"} setLabels={selectTypes} col={8} values={selectedTypes}/>
            </div>
            <div className="col-sm-2">
              <CustomizedChip label={"Nuclear"} setLabels={selectTypes} col={9} values={selectedTypes}/>
            </div>
            <div className="col-sm-2">
              <CustomizedChip label={"Modern"} setLabels={selectTypes} col={10} values={selectedTypes}/>
            </div>
            <div className="col-sm-2">
              <CustomizedChip label={"Finance"} setLabels={selectTypes} col={11} values={selectedTypes}/>
            </div></div>}
            <div className="row">
              <p className="text-right">See {seeMoreTypes ? "Less" : "More"}
              {seeMoreTypes ? <KeyboardArrowUpIcon fontSize="small" onClick={() => {setSeeTypes(false)}}/> : <KeyboardArrowDownIcon fontSize="small" onClick={() => {setSeeTypes(true)}}/>}</p></div>
          </div>
        </div>}
        <h3>Price{price ? <KeyboardArrowUpIcon onClick={() => {showPrice(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showPrice(true)}}/>}</h3>
        {price && <CustomizedSlider min={0} max={100} setFilterValue={setPriceValue} lastValues={priceValue} />}
        <h3>Distance{distance ? <KeyboardArrowUpIcon onClick={() => {showDistance(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showDistance(true)}}/>}</h3>
        {distance && <CustomizedSlider min={0} max={250} setFilterValue={setDistanceValue} lastValues={distanceValue} />}
        <h3>Age{age ? <KeyboardArrowUpIcon onClick={() => {showAge(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showAge(true)}}/>}</h3>
        {age && <div className="row">
            <div className="col-sm-3">
              <CustomizedChip label={"All Ages"} setLabels={selectAge} col={0} values={selectedAge}/>
            </div>
            <div className="col-sm-3">
              <CustomizedChip label={"For Kids"} setLabels={selectAge} col={1} values={selectedAge}/>
            </div>
            <div className="col-sm-3">
              <CustomizedChip label={"18+"} setLabels={selectAge} col={2} values={selectedAge}/>
            </div>
            <div className="col-sm-1">
            </div>
          </div>}
        <h3>Rating{rating ? <KeyboardArrowUpIcon onClick={() => {showRating(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showRating(true)}}/>}</h3>
        {rating && <CustomizedSlider min={0} max={5} setFilterValue={setRatingValue} lastValues={ratingValue} />}
        <h3>Other Filters{other ? <KeyboardArrowUpIcon onClick={() => {showOther(false)}}/> : <KeyboardArrowDownIcon onClick={() => {showOther(true)}}/>}</h3>
        {other && <div className="row">
            <div className="col-sm-4">
              <CustomizedChip label={"Exhibitions ending soon"} setLabels={selectOther} col={0} values={selectedOther}/>
            </div>
            <div className="col-sm-2">
              <CustomizedChip label={"Online"} setLabels={selectOther} col={1} values={selectedOther}/>
            </div>
            <div className="col-sm-3">
            </div>
          </div>}
          <div className="mt-1 text-right">
          <button
                  className="btn btn-lg mr-3"
                  onClick={() => {fProps.setShowFilters(false)}}
                  style={{ backgroundColor: "#000000", color: "white" }}
                >
                  CANCEL
          </button>
          <button
                  className="btn btn-lg"
                  onClick={applyHandler}
                  style={{ backgroundColor: "#00A3A3", color: "white" }}
                >
                  APPLY
          </button></div>
          </div>
        </div>
      </div>
    </Modal>}</Fragment>
  );
};

export default Filters;
