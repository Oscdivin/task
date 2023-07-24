import React, {useEffect, useState} from 'react'
import Card from "../../components/static/Card"
import {readTask}  from "../../utils/APi"
const Viewtasx = () => {
	const [state, setState] =useState<any>([])
	useEffect(()=>{
	//  readTask3().then((res:any)=>{
//    return setState3(res)	
readTask().then((res:any) => {
	return setState(res)
})
	},[])
    return (
        <div>Do Task
	  <Card 
  title='Task'
  data={state}
//   move4='Do Process'
  />
        </div>
    )
}
export default Viewtasx