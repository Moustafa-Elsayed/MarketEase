import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "../../redux/productSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import "./product.css"
const Product = () => {
  const product = useSelector((state) => state.product.data)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])
  return (
    <Grid container spacing={5}>
      {product.map((product) => (
        <Grid key={product.id} xs={12} sm={6} md={4} lg={3} item>
          <Card
            elevation={2}
            className="card-style"
            sx={{
              maxWidth: "100%",
              borderRadius: "9px",
              height: "100%",
              padding: "10px",
            }}
            onClick={() => { }}
          >

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                paddingTop: "10px",
                color: "white",
                fontWeight: "600",
              }}
            >
              {product.category}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                paddingTop: "10px",
                color: "white",
                fontWeight: "600",
              }}
            >
              {product.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "5px", color: "#f26522" }}
            >
              {product.price}$
            </Typography>

            <CardMedia
              component="img"
              height="180"
              image={product.image}
              alt="green iguana"
              sx={{ paddingTop: "10px" }}
            />
            <CardContent>

            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Product