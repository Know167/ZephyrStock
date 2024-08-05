"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    AppBar,
    Box,
    Container,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const router = useRouter();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}>
                        Inventory Management
                    </Typography>
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <Button
                            sx={{ color: "white" }}
                            onClick={() => router.push("/")}>
                            Home
                        </Button>
                        <Button
                            sx={{ color: "white" }}
                            onClick={() => router.push("/inventory")}>
                            Inventory
                        </Button>
                        <Button
                            sx={{ color: "white" }}
                            onClick={() => router.push("/")}>
                            About
                        </Button>
                        <Button
                            sx={{ color: "white" }}
                            onClick={() => router.push("/")}>
                            Contact
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setOpenMenu(!openMenu)}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={null}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={openMenu}
                            onClose={() => setOpenMenu(false)}>
                            <MenuItem
                                onClick={() => {
                                    router.push("/");
                                    setOpenMenu(false);
                                }}>
                                Home
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    router.push("/inventory");
                                    setOpenMenu(false);
                                }}>
                                Inventory
                            </MenuItem>
                            <MenuItem onClick={() => {
                                router.push("/");
                                setOpenMenu(false);
                            }}>
                                About
                            </MenuItem>
                            <MenuItem onClick={() => {
                                router.push("/");
                                setOpenMenu(false);
                            }}>
                                Contact
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
