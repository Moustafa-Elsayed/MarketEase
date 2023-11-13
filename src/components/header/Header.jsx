import React, { useState } from 'react'
import "./header.css"
import { Fragment } from "react";
import {
    Box,
    Button,
    ListItemButton,
    ListItemText,
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import "./header.css";
import Sidebar from '../sidebar/Sidebar';

const Header = () => {
    const [open, setOpen] = useState("none");
    const [ope, setOpe] = useState(false);
    const [close, setClose] = useState("permanent");
    return (
        <Fragment>
            <div className="appbar">
                <AppBar
                    className='nav-bar'
                    position="sticky"
                    sx={{ backgroundColor: "black" }}
                    elevation={2}
                >
                    <Toolbar className='nav-bar' sx={{ justifyContent: "space-between" }}>
                        <Typography
                            variant="p"
                            className='logo'
                            sx={{ color: "orange",cursor:"pointer" }}
                            onClick={() => {
                            }}
                        >
                            MarketEase
                        </Typography>
                        <Box sx={{ display: { xs: "none", md: "block" } }}>
                            <Box sx={{ display: "flex", marginRight: "60px" }}>
                                <ListItemButton
                                    onClick={() => {
                                    }}
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                        },
                                        fontWeight: "900 !important",
                                    }}
                                >
                                    <ListItemText
                                        variant="p"
                                        primary="Home"
                                        className="home"
                                        sx={{
                                            color: "orange",

                                            marginRight: "30px",
                                            marginLeft: "30px",
                                            textAlign: "center",
                                            "&:hover": {
                                                color: "#f26522",
                                                backgroundColor: "transparent",
                                            },
                                        }}
                                    />
                                </ListItemButton>

                                <ListItemButton
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                    onClick={() => {
                                    }}
                                >
                                    <ListItemText
                                        primary="Product"
                                        sx={{
                                            color: "orange",
                                            marginRight: "30px",
                                            marginLeft: "30px",
                                            textAlign: "center",
                                            "&:hover": {
                                                color: "#f26522",
                                                backgroundColor: "transparent",
                                            },


                                        }}
                                    />
                                </ListItemButton>

                                <Button
                                    sx={{
                                        backgroundColor: "transparent",
                                        color: "orange",
                                        marginLeft: "10px",
                                        "&:hover": {
                                            color: "#f26522",
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                    onClick={() => {
                                    }}
                                    disableElevation
                                    startIcon={
                                        <Badge color="primary" badgeContent="0" showZero>
                                            <ShoppingCartIcon />
                                        </Badge>
                                    }
                                ></Button>
                            </Box>
                        </Box>

                        <MenuIcon
                            onClick={() => {
                                setClose("temporary");
                                setOpen("block");
                            }}
                            sx={{ display: { xs: "block", md: "none" }, color: "#343a40" }}
                        />
                    </Toolbar>
                </AppBar>

                <div className="overlay"></div>
            </div>
            <Sidebar open={open} setOpen={setOpen} ope={ope} setOpe={setOpe} close={close} setClose={setClose} />
        </Fragment>

    )
}

export default Header