import React, {useEffect, useState} from 'react'
import Card from "../../components/static/Card"
import {readTask2}  from "../../utils/APi"
const ProgresTasx = () => {
	const [state2, setState2] =useState<any>([])
	useEffect(()=>{
	//  readTask3().then((res:any)=>{
//    return setState3(res)	
readTask2().then((res:any) => {
	return setState2(res)
})
	},[])
    return (
        <div>DoneTask
	  <Card 
  title='In Process'
  data={state2}
//   move4='Do Process'
  />
        </div>
    )
}

export default ProgresTasx