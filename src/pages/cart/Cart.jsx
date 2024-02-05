import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from "sweetalert2";
import { addToCart, decreaseCart, deleteFromCart, increseCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, cart) => {
    acc += cart.price * cart.quantity;
    return acc;
  }, 0);
  return (
    <>
      <h1 style={{ paddingTop: "100px" }}> MarketEase Cart</h1>
      <hr sx={{ paddingTop: "40px" }} />
      <Container maxWidth="lg">
        <TableContainer
          sx={{
            marginTop: "40px",
            backgroundColor: "black",
            borderRadius: "10px",
          }}
          component={Paper}
        >
          <Table
            sx={{ minWidth: 650, paddingTop: "40px" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }} align="left">
                  PRODUCT
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  PRICE
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  QUINTATITY
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  TOTAL
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  ACTIONS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((cartitems) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={cartitems.id}
                >
                  <TableCell sx={{ color: "white" }} align="left">
                    {cartitems.title}
                  </TableCell>

                  <TableCell sx={{ color: "white" }} align="left">
                    {cartitems.price} $
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="left">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "7px",
                        border: "1px solid gray",
                        borderRadius: "10px",
                        padding: "9px",
                        maxWidth: "30%",
                      }}
                    >
                      <button
                        onClick={() => {
                          dispatch(decreaseCart(cartitems));
                        }}
                        style={{ padding: "5px" }}
                      >
                        -
                      </button>
                      <p>{cartitems.quantity}</p>
                      <button
                        onClick={() => {
                          dispatch(increseCart(cartitems));
                          toast.success(`${cartitems.title} add to cart`, {
                            position: "bottom-left", // Set the position of the notification
                          });
                        }}
                        style={{ padding: "5px" }}
                      >
                        +
                      </button>
                    </div>
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="left">
                    {totalPrice.toFixed(2)}
                  </TableCell>

                  <TableCell
                    align="left"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure?",
                        text: `${cartitems.title}`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!",
                        preConfirm: () => {
                          dispatch(deleteFromCart(cartitems));
                        },
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire({
                            title: "Deleted!",
                            text: `${cartitems.title} has been deleted.`,
                            icon: "success",
                          });
                        }
                      });
                    }}
                  >
                    <DeleteForeverIcon
                      sx={{ color: "red", paddingLeft: "20px" }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Cart;
