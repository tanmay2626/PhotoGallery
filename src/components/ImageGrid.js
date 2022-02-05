import React , { useState } from 'react'
import { Container } from 'react-bootstrap'
import  useFirestore from '../hooks/useFirestore'
import ImgCard from './Card'
import { motion } from 'framer-motion'

const ImageGrid = ({selectedImg,setSelectedImg,confirm,setConfirm,setDelClick}) =>{
    const [fav,setFav] = useState(false)
    const { docs } = useFirestore('feeds',selectedImg,confirm,setConfirm,fav)


    return (
        <motion.div layout>
        <Container className='feed-grid'>
        { docs && docs.map(doc =>{
                return (
                    <ImgCard key={doc.id} src={doc.url} date={doc.date} id={doc.id} 
                    setSelectedImg={setSelectedImg} setDelClick={setDelClick}
                    fav={fav} setFav={setFav}
                     />
                )
            })}
        </Container>
        </motion.div>
    )
}

export default ImageGrid