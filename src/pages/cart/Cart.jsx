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
import { Card } from '@mui/material';
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
                </TableRow>
              ))}
            </TableBody>
                          \
                    </Table>
                </TableContainer>




            </Container >
        </>
    )
}

export default Cart