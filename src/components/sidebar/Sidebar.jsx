import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import StarBorder from "@mui/icons-material/StarBorder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
    Box,
    Button,
    Divider,
    Drawer,
    ListItemButton,
    ListItemText,
    Toolbar,
    ListItemIcon,
    Collapse,
    List,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const Sidebar = ({ open, setOpen, ope, setOpe, close, setClose }) => {
    return (
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
    )
}

export default Sidebar