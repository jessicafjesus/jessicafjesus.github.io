import { styled } from '@mui/material/styles';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { Box } from '@mui/material';
import { useState } from 'react';

interface sliderProps {
    min : number;
    max : number;
    setFilterValue : React.Dispatch<React.SetStateAction<number[]>>;
    lastValues : number[]
}

const CustomizedSlider = (props : sliderProps) => {
    const [value,setValue] = useState<number[]>(props.lastValues)
    const CustomSlider = styled(Slider)(({ theme }) => ({
        color: '#8190A5',
        height: 3,
        padding: '13px 0',
        '& .MuiSlider-thumb': {
          height: 27,
          width: 27,
          backgroundColor: '#fff',
          border: '1px solid currentColor',
          '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
          },
          '& .custom-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
          },
        },
        '& .MuiSlider-track': {
          height: 3,
        },
        '& .MuiSlider-rail': {
          color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
          opacity: theme.palette.mode === 'dark' ? undefined : 1,
          height: 3,
        },  
        '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 12,
            background: 'unset',
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: '50% 50% 50% 0',
            backgroundColor: '#8190A5',
            transformOrigin: 'bottom left',
            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
            '&:before': { display: 'none' },
            '&.MuiSlider-valueLabelOpen': {
              transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
            },
            '& > *': {
              transform: 'rotate(45deg)',
            },
          }
      }));

      
    interface customThumbComponentProps extends React.HTMLAttributes<unknown> {}

    function CustomThumbComponent(props: customThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="custom-bar" />
      <span className="custom-bar" />
      <span className="custom-bar" />
    </SliderThumb>
  );
}

    return (<Box sx={{ width: 400 }}><CustomSlider
        min={props.min}
        max={props.max}
        valueLabelDisplay='auto'
        components={{ Thumb: CustomThumbComponent }}
        onChangeCommitted={(event,newValue) => {setValue(newValue as number[]);props.setFilterValue(newValue as number[])}}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        defaultValue={value}
        disableSwap
      /></Box>)
}

export default CustomizedSlider