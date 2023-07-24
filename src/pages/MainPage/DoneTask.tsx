import React, {useEffect, useState} from 'react'
import Card from "../../components/static/Card"
import {readTask3}  from "../../utils/APi"
const DoneTask = () => {
	const [state3, setState3] =useState<any>([])
	useEffect(()=>{
	//  readTask3().then((res:any)=>{
//    return setState3(res)	
readTask3().then((res:any) => {
	return setState3(res)
})
	},[])
    return (
        <div>DoneTask
	  <Card 
  title='Done Task'
  data={state3}
//   move4='Do Process'
  />
        </div>
    )
}

export default DoneTask




// import React from 'react'
// 
// const ViewTask = () => {
//     return (
//         <div>ViewTask</div>
//     )
// }
// 
// export default ViewTask