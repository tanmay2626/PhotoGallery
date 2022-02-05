import React from 'react'
import { Card , Row , Col, Container } from 'react-bootstrap'
import { Favorite , Delete , AddPhotoAlternate } from '@mui/icons-material';
import { motion} from 'framer-motion'


const ImgCard = (props) =>{

    const handleClick = () =>{
        props.setSelectedImg(props.id)
        props.setDelClick(true)
    }

    const handleFav = () =>{
        if(props.fav===true){
            props.setFav(false)
        }else{
            props.setFav(true)
            props.setSelectedImg(props.id)
        }
    }

    
    return (
        <motion.div>
        <Card  className='img-card' key={props.id}>
        <motion.div layout className='img-wrap'
         initial={{opacity : 0.6}} 
         whileHover={{opacity : 0.8 ,boxShadow: "inset 0 -35px 60px 1px red",scale : 1.05}}
         >
        <img  src={props.src} alt='name' />
           <Card.ImgOverlay>
           <Card.Title className='date'>{props.date}</Card.Title>
           <Container>
               <Row className='options'>
                   <Col xs={4} md={4} lg={4}>
                   <motion.div whileHover={{scale : 1.2}} 
                   style={ props.fav ? { color : "red" } : { color : "white"}}
                >
                   <Favorite  sx={{ fontSize: 40 }} onClick={handleFav} />
                   </motion.div>
                   </Col>
                   <Col xs={4} md={4} lg={4}>
                   <motion.div whileHover={{color : "#D67D3E",scale : 1.2}} >
                   <AddPhotoAlternate sx={{ fontSize: 40 }} />
                   </motion.div>
                   </Col>
                   <Col xs={4} md={4} lg={4}>
                   <motion.div whileHover={{color : "#D67D3E",scale : 1.2}} >
                   <Delete sx={{ fontSize: 40 }} onClick={handleClick} />
                   </motion.div>
                   </Col>
                </Row>
               </Container>
           </Card.ImgOverlay>
           </motion.div>
        </Card>  
        </motion.div>
    )
}


export default ImgCard