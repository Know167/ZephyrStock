"use client";
import { useState, useContext, useEffect } from "react";
import {
    Box,
    Stack,
    Typography,
} from "@mui/material";
import { inventoryDataContext } from "../../utils/inventoryDataContext";
import { useRouter } from "next/navigation";



export default function Home() {
    // States
    const { handleUpdate } =
        useContext(inventoryDataContext);
    const router = useRouter();
    useEffect(() => {
        handleUpdate();
    }, []);
    // Handle modal opeining and closing

    return (
        <Box width="100vw" height="100vh">
            <Box
                width="100%"
                height="50vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor="lightblue">
                <Typography variant="h2" color="textPrimary">
                    Welcome to the Inventory Management System
                </Typography>
            </Box>
            <Box
                width="100%"
                height="100px"
                bgcolor="transparent"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                mt={5}
                p={2}>
                
                <Typography variant="body1" color="textSecondary">
                    &copy; 2024 Inventory Management
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Typography variant="body1" color="textSecondary">
                        Home
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        About
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Contact
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}
