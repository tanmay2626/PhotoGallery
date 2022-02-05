import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Progress from './Progress'

const Upload = () =>{

    const [file,setFile] = useState(null)
    const [error,setError] = useState(null)

    const fileType = ['image/jpeg','image/jpg','image/png']

    const onChangeHandler = (e) =>{
        let selected = e.target.files[0]

        if(selected && fileType.includes(selected.type)){
            setFile(selected)
            setError('')
        }else{
            setFile(null)
            setError('Please select and image in JPG/PNG format only')
        }
    }
    
    return (
        <form>
        <label>
        <input type="file" onChange={onChangeHandler}/>
        <Button className='Button' variant="outlined" size='large' component='span'>Upload</Button>
        </label>
        <div className='output'>
        <br></br>
        { error && <div style={{color : 'red'}}>{error}</div>}
        { file && <div>{file.name}</div>}
        <br></br>
        { file && <Progress file={file} setFile={setFile} /> }
        </div>
        </form>
    )
}

export default Upload