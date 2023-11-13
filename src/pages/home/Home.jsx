import React, { useEffect, useState } from 'react'
import "./home.css"
import axios from 'axios'
const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/mobiles").then((response) => {
            setData(response.data);
        });
    }, []);
    return (
        <>
            <div className='banner-img'>
            </div>
            {data.map((product) => (
                <div key={product.id}>
                    <h1>{product.category}</h1>
                    <p>{product.description}</p>
                </div>
            ))}
        </>

    )
}

export default Home