import React ,{useState,useEffect} from 'react';
import { mineBgArray } from './data'
import './app.css'
console.log('mineBgArray: ', mineBgArray);
const GOOD_LUCK_TIMES = [9,21,40];
export const App =()=>{
   const [mineArray, setMineArray] = useState(mineBgArray);
   const [times, setTimes] = useState(0);
   const [showError,setShowError] = useState(false);
   const onClick=(k,t)=>{
      const item = mineArray[k][t];
      setTimes(times+1)
      if(item.value === '*'){
         setShowError(true);
         const newArray = mineArray.map(i=>i.map(t=>{
            t.value='*';
            t.clicked=true;
            return t
         }));
         setMineArray(newArray);
         return
      }
      let newLine ={};
      if(item.clicked && item.value != '*'){
         newLine = {...item,clicked:false};
      } else {  
         newLine = {...item,clicked:true};
      }
      mineArray[k].splice(t,1,newLine);
      setMineArray([...mineArray]);
   }
   useEffect(() => {
     if(GOOD_LUCK_TIMES.includes(times)){
      window.alert(`你真优秀，已经得分${times}！`)
     }
   }, [times]);
   const reset = ()=>{
      setMineArray(rows=>rows.map(row=>row.map(x=>({
         ...x,
         clicked:false
      }))));
      setShowError(false);
      setTimes(0);
   }
   return<div className='outer'>
      <div className='outer_button'>
         <button onClick={reset}>
            restart</button>
      </div>
      {showError && <div>Woo...,第{times} 次击中炸弹！</div>}
      <div className='outer_frame'>
      {mineArray.map((array,k)=>{
         return <div className='outer_line' key={k}>
               { array.map((i,t)=>(<div key={t} 
               className={i.clicked ? 'inner_row clicked':'inner_row'} 
               onClick={(i)=>onClick(k,t)}>{i.value}</div>)
               )}
            </div>
      })}
      </div>
   
   </div>
 
}