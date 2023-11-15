import React from 'react'
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Swal from 'sweetalert2';

const Cart = () => {
    const cart = useSelector((state) => state.cart)

    return (
        <>
            <h1 style={{ paddingTop: "100px" }}> MarketEase Cart</h1>
            <hr /><Container maxWidth="lg">


                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "red" }}>
                                <TableCell align="left">PRODUCT</TableCell>
                                <TableCell align="left">PRICE</TableCell>
                                <TableCell align="left">QUINTATITY</TableCell>
                                <TableCell align="left">TOTAL</TableCell>
                                <TableCell align="left">ACTIONS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((cartitems) => (
                                <TableRow
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    key={cartitems.id}
                                >
                                    <TableCell align="left">{cartitems.id}</TableCell>

                                    <TableCell align="left">{cartitems.title}</TableCell>
                                    <TableCell align="left">{cartitems.price}</TableCell>
                                    <TableCell align="left">{cartitems.quantity}</TableCell>
                                    <TableCell align="left" sx={{ cursor: "pointer" }} onClick={() => {
                                        Swal.fire({
                                            title: "Are you sure?",
                                            text: `${cartitems.title}`,
                                            icon: "warning",
                                            showCancelButton: true,
                                            confirmButtonColor: "#3085d6",
                                            cancelButtonColor: "#d33",
                                            confirmButtonText: "Yes, delete it!",
                                            preConfirm: () => {
                                                // Add your onclick event logic here
                                                // For example, you can call a function to handle the deletion
                                                // of the item from the cart.
                                                console.log("delete");
                                              },
                                            
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                Swal.fire({
                                                    title: "Deleted!",
                                                    text: `${cartitems.title} has been deleted.`,
                                                    icon: "success"
                                                });
                                            }
                                        });
                                    }}>
                                        <DeleteForeverIcon sx={{color:"red"}}/>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </Container >
        </>
    )
}

export default Cart