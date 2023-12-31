import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/productSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import { useEffect } from "react";
import { addToCart } from "../../redux/cartSlice";
import "./product.css";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Product = () => {
  const [showMore, setShowmore] = useState(false);
  const product = useSelector((state) => state.product.data);
  const isloading = useSelector((state) => state.product.isloading);
  const history = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    <>
      {isloading ? (
        <h1>looooding....</h1>
      ) : (
        <Grid container spacing={5}>
          {product.slice(0, showMore ? product.length : 4).map((product) => (
            <Grid key={product.id} xs={12} sm={6} md={4} lg={3} item>
              <Card
                elevation={2}
                sx={{
                  backgroundColor: "#21201d",
                  maxWidth: "100%",
                  borderRadius: "9px",
                  height: "100%",
                  padding: "3px",
                }}
                onClick={() => {}}
              >
                {/* <Typography
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
                </Typography> */}
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
                  <Button
                    startIcon={<ExpandMoreIcon />}
                    variant="outlined"
                    className="btn-add"
                    onClick={() => {
                      dispatch(addToCart(product));
                      history("/cart");
                    }}
                  >
                    ADD TO CART
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {product.length > 4 && (
            <Grid item xs={12}>
              <Button
                sx={{}}
                variant="outlined"
                onClick={() => {
                  setShowmore((prev) => !prev);
                }}
              >
                {showMore ? "SEE LESS ⇪" : "SEE MORE ⇩"}
              </Button>
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
};

export default Product;
