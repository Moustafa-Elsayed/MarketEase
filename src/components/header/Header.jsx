import React from 'react'
import "./header.css"
import { Fragment } from "react";
import {
    Box,
    Button,
    Divider,
    Drawer,
    ListItemButton,
    ListItemText,
    AppBar,
    Toolbar,
    Typography,
    ListItemIcon,
    Collapse,
    List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import StarBorder from "@mui/icons-material/StarBorder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import "./header.css";
const Header = () => {




    const [open, setOpen] = useState("none");
    const [ope, setOpe] = useState(false);
    const [close, setClose] = useState("permanent");

    return (
        <Fragment>
            <div className="appbar">
                <AppBar
                    position="sticky"
                    sx={{ backgroundColor: "white" }}
                    elevation={2}
                >
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Typography
                            variant="p"
                            className="logo"
                            onClick={() => {
                            }}
                        >
                            Eflyer
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
                                            color: "#343a40",

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
                                            color: "#343a40",
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
                                        color: "#343a40",
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

            {/* start Drawer */}
            <Drawer
                open={true}
                onClose={() => {
                    setClose("permanent");
                    setOpen("none");
                }}
                sx={{
                    position: "relative",
                    width: 250,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: { xs: "100%", sm: "250px" },
                        boxSizing: "border-box",
                    },
                    display: { xs: open },
                }}
                variant={close}
                anchor="right"
            >
                <CloseIcon
                    onClick={() => {
                        setClose("permanent");
                        setOpen("none");
                    }}
                    sx={{
                        position: "absolute",
                        right: 13,
                        color: "#343a40",
                        top: 13,
                        zIndex: "555",
                        cursor: "pointer",
                    }}
                />

                <Toolbar />
                <Divider />
                <Box>
                    <ListItemButton
                        sx={{
                            textAlign: "center",
                            mb: 1,
                            "&:hover": { backgroundColor: "#ff7662" },
                        }}
                        onClick={() => {
                            // setClose("permanent");
                            // setOpen("none");
                            // navigate("/");
                            setOpe(!ope);
                        }}
                    >
                        <ListItemIcon>
                            <HomeIcon sx={{ color: "blue" }} />
                        </ListItemIcon>
                        <ListItemText
                            className="drawer-links"
                            primary="Home"
                            sx={{ paddingLeft: "21px" }}
                        />
                        {ope ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={ope} timeout="auto" unmountOnExit>
                        <List
                            component="div"
                            disablePadding
                            sx={{ justifyContent: "space-between" }}
                        >
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder sx={{ color: "#343a40" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Main Home"
                                    onClick={() => {
                                        setClose("permanent");
                                        setOpen("none");
                                        setOpe(!ope);
                                    }}
                                />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton
                        sx={{
                            textAlign: "center",
                            mb: 1,
                            "&:hover": { backgroundColor: "#ff7662" },

                        }}
                        onClick={() => {
                            setClose("permanent");
                            setOpen("none");
                        }}
                    >
                        <ListItemIcon>
                            <PermContactCalendarIcon sx={{ color: "blue" }} />
                        </ListItemIcon>
                        <ListItemText primary="Product" />
                    </ListItemButton>

                    <Button
                        sx={{
                            backgroundColor: "transparent",
                            color: "#343a40",
                            marginLeft: "10px",
                            "&:hover": {
                                color: "#f26522",
                                backgroundColor: "transparent",
                            },
                        }}
                        onClick={() => {
                            setClose("permanent");
                            setOpen("none");
                        }}
                        disableElevation
                        startIcon={
                            <Badge color="primary" badgeContent="0" showZero>
                                <ShoppingCartIcon />
                            </Badge>
                        }
                    ></Button>

                </Box>
            </Drawer>
        </Fragment>
    )
}

export default Header