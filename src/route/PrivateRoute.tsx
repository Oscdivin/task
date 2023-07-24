import {Navigate} from "react-router-dom"

import React, {PropsWithChildren} from "react"

import {useSelector} from "react-redux"

const PrivateRoute: React.FC<PropsWithChildren> =({children})=>{
	const user = useSelector((state:any)=>state.user)
	return(
		<>
		{
			user ? <div>
			{children}
			</div> : <Navigate to="/sigin-in"/>
		}
		</>
	)
}

export default  PrivateRoute
