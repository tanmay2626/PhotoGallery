import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { LinearProgress } from '@mui/material'


const Progress = ({file,setFile}) =>{
    const { url , progress } = useStorage(file)

    useEffect(()=>{
        if(url){
            setFile(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])
    

    return (
        <LinearProgress value={progress}/>
    )
}

export default Progress