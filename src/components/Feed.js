import React , { useState } from 'react'
import { Container } from 'react-bootstrap';
import ImageGrid from './ImageGrid';
import Title from './Title'
import DeleteModal from './DelModal'

const Feed = () =>{

    const [selectedImg,setSelectedImg] = useState(null)
    const [confirm,setConfirm] = useState(false)
    const [delClick,setDelClick] = useState(false)
 

    return (
        <div  className='main-body'>
        <Container className='feed'>
        <Title />
        </Container>
        <ImageGrid selectedImg={selectedImg} setSelectedImg={setSelectedImg}
         confirm={confirm} setConfirm={setConfirm} setDelClick={setDelClick} />
        {(delClick) && <DeleteModal setConfirm={setConfirm} setDelClick={setDelClick} />}
        </div>
    )
}

export default Feed