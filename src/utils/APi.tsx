import axios from "axios"

// const URL = " http://localhost:2001/data"
// const URL2 = " http://localhost:2001/process"
const URL3 = " http://localhost:2001/done"
const realURL = " http://localhost:2001/done/"
const getURL = "http://localhost:2354/api/v1/task/"
const doneURL = " http://localhost:2001/done/"

export const createTask = async (data: any)=>{
    try {
     await axios.post(getURL, data).then((res)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const doneTask = async (data: any)=>{
    try {
     await axios.post(doneURL, data).then((res)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const createTask2 = async (data: any)=>{
    try {
     await axios.post(doneURL, data).then((res)=>{
               return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const createTask3 = async (data: any)=>{
    try {
     await axios.post(URL3, data).then((res)=>{
   return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const createTask4 = async (data: any)=>{
    try {
     await axios.post(URL3, data).then((res)=>{
   return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const readTask = async ()=>{
    try {
    return await axios.get(getURL).then((res: any)=>{
             return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const readTask2 = async ()=>{
    try {
    return await axios.get(doneURL).then((res: any)=>{
       return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const readTask3 = async ()=>{
    try {
    return await axios.get(URL3).then((res: any)=>{
             return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const readTask4 = async ()=>{
    try {
    return await axios.get(URL3).then((res: any)=>{
             return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const updateTask = async (id: string)=>{
    try {
    return await axios.patch(`${realURL}/${id}`, {completed: true}).then((res: any)=>{
          return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const updateTask2 = async (id: string)=>{
    try {
    return await axios.patch(`${realURL}/${id}`, {completed: false}).then((res: any)=>{
      return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteTask = async (id: string)=>{
    try {
    return await axios.delete(`${URL}/${id}`).then((res: any)=>{
         return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const deleteTask2 = async (id: string)=>{
    try {
    return await axios.delete(`${realURL}/${id}`).then((res: any)=>{
        return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const deleteTask3 = async (id: string)=>{
    try {
    return await axios.delete(`${URL3}/${id}`).then((res: any)=>{
               return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteTask4 = async (id: string)=>{
    try {
    return await axios.delete(`${URL3}/${id}`).then((res: any)=>{
               return res.data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}