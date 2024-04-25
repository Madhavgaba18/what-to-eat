import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SpinWheel } from 'spin-wheel-game';

function Wheel() {
  const [spinResult, setSpinResult] = useState("")
  const [itemId , setItemId] = useState('')

  const segments = [
    { segmentText: "Pizza", segColor: "#0ACF83" },
    { segmentText: "Pasta", segColor: "#FBD462" },
    { segmentText: "HomeMade Food", segColor: "#FE9245" },
    { segmentText: "Burger and Fries", segColor: "#FF7262" },
    { segmentText: "Non-Veg Snacks", segColor: "#EB1AD6" },
    { segmentText: "Veg Snacks", segColor: "#A259FF" },
    { segmentText: "Main Course Veg", segColor: "#4285F4" },
    { segmentText: "Main Course Non-Veg", segColor: "#1ABCFE" },
  ];

  const handleSpinFinish = (value) => {
    console.log('value:', value)
    setSpinResult(value)
    if(value === 'Pizza'){
      setItemId('68987')
    }
    if(value === 'Burger and Fries'){
      setItemId('9055')
    }
    if(value === 'HomeMade Food'){
      setItemId('29165')
    }
    if(value === 'Pasta'){
      setItemId('51177')
    }
    if(value === 'Non-Veg Snacks'){
      setItemId('70599')
    }
    if(value === 'Veg Snacks'){
      setItemId('18664')
    }
    if(value === 'Main Course Veg'){
      setItemId('46756')
    }
    if(value === 'Main Course Non-Veg'){
      setItemId('15928')
    }
  }

  const spinWheelProps = {
    segments,
    onFinished: handleSpinFinish,
    primaryColor: 'black',
    contrastColor: 'white',
    buttonText: 'Spin',
    isOnlyOnce: false,
    size: 230,
    upDuration: 100,
    downDuration: 600,
    fontFamily: 'Arial',
    arrowLocation: 'center',
    showTextOnSpin: true,
    isSpinSound: true,
  };

  return (
    <>
    
      <h1 className='text-center font-[inter] text-7xl p-6'>WHAT TO EAT</h1>
      <div className='flex justify-center'>
        <div>
        <SpinWheel {...spinWheelProps}
        />
        </div>
      </div>
      {spinResult && <h1 className='text-center font-[inter] text-4xl p-6'> Order Directly From Here - <a href={`https://www.zomato.com/ncr/delivery?dishv2_id=${itemId}`} target='/blank' className='underline'> {spinResult}</a></h1>}
    </>
  )
}

export default Wheel
