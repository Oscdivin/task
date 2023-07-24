import React, {useState, useEffect, createContext, PropsWithChildren, Children}  from "react"
import { boolean } from "yup"

interface iData{
	globalState?: boolean;
	setGlobalState?: React.Dispatch<React.SetStateAction<boolean>>
}
	
	export const contextState =  createContext<iData>({})
	export const GlobalState: React.FC<PropsWithChildren> =({children})=>{
		const [globalState, setGlobalState] =useState<boolean>(false)
	// export const  GlobalState:React.FC<PropsWithChildren> =({childern})=>{
		// const {state, setState} = useState<boolean>(false)
		
		return(
			<contextState.Provider value ={{globalState, setGlobalState}}>{children}</contextState.Provider>
		)
	}
	