import Product from "../product/Product"
import "./home.css"
import Container from '@mui/material/Container'

const Home = () => {
   
    return (
        <>
            <div className='banner-img'>
            </div>
            <Container maxWidth="lg" sx={{paddingTop:"20px"}}>              
            <Product />
            </Container>
        </>

    )
}

export default Home