// import React, {useEffect,useRef,useState} from "react";

// const formatTime = (time)=>{
//    let minutes = Math.floor(time / 60)
//    let seconds = Math.floor(time - minutes * 60)
//    if(minutes<=10) minutes = '0' + minutes;
//    if(minutes<=10) seconds = '0' + seconds;
//    return minutes + ":" + seconds
// }
// function useCountdown({seconds}){

//     const[countdown,setCountdown]  = useState(seconds);
//     const timer = useRef();
//      useEffect(()=>{
//         timer.current = setInterval(()=>{
//             setCountdown(prev => prev -1)
//         },1000)
//         return() => clearInterval(timer.current);
//      },[])
//      useEffect(()=>{
//         if(countdown<=0){
//             clearInterval(timer.current);
//             alert("END")
//         }
//      },[countdown])
//     return(
//       <>
//       <h1>Countdown :{formatTime(countdown)}</h1>
//     </>

//     )
// }

// export default useCountdown;