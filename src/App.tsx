import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { mainRoutes } from './route/mainRoutes'
import { GlobalState } from './Global/GlobalState'
import {store} from "./Global/Store"
import {Provider} from "react-redux"
const App = () => {
  return (
    <div>
	<Provider store={store}>	
<GlobalState>
      <RouterProvider router={mainRoutes} />
</GlobalState>
	</Provider>

    </div>
  )
}

export default App