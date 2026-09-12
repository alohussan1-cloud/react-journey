import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseFetch =  (url) => {


    const [data, setdata] = useState(null)
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(null)

    const getData = async ()=>{
        setloading(true)
        setdata(null)
        seterror(null)
        try{
            const response = await axios.get(url)
        setdata(response.data)
        } catch(error){
            seterror(error.message)
        }
        
        setloading(false)

    }

     useEffect(()=>{
        if(!url) return
        getData()
    },[url])
    
    return{
        data,
        loading,
        error
    }

    
}

export default UseFetch
