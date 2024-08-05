"use client";
import { useContext, useState } from "react";
import {
    Button,
    Box,
    Modal,
    TextField,
    Typography,
    Stack,
    Skeleton,
} from "@mui/material";

import { inventoryDataContext } from "../../../utils/inventoryDataContext";
const InventoryPage = () => {
    const { inventoryData, handleAddition, handleDeletion } =
        useContext(inventoryDataContext);
    const [open, setOpen] = useState(false);

    const [itemName, setItemName] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleImage = async() => {
        const res = await fetch('/api/imageRec')
        const response=await JSON(res)
        console.log(response)
    } 
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "white",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 3,
    };

    return (
        <>
            <Box
                width="100%"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                gap={2}
                mt={2}>
                <Button variant="contained" onClick={handleOpen}>
                    Add New Item
                </Button>
                <Button variant="contained" onClick={handleImage}>
                    Add New Item using Image
                </Button>
                
                <Box border="1px solid #333" width="800px">
                    <Box
                        height="100px"
                        bgcolor="#ADD8E6"
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Typography
                            variant="h2"
                            color="#333"
                            textAlign="center">
                            Inventory Items
                        </Typography>
                    </Box>
                    {inventoryData ? (
                        <Stack height="300px" spacing={2} overflow="auto" p={2}>
                            {inventoryData.length < 1 ? (
                                <>No Items Found</>
                            ) : (
                                inventoryData.map(({ name, quantity }) => (
                                    <Box
                                        key={name}
                                        width="100%"
                                        minHeight="150px"
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        bgcolor="#f0f0f0"
                                        paddingX={5}>
                                        <Typography
                                            variant="h3"
                                            color="#333"
                                            textAlign="center">
                                            {name.charAt(0).toUpperCase() +
                                                name.slice(1)}
                                        </Typography>
                                        <Typography
                                            variant="h3"
                                            color="#333"
                                            textAlign="center">
                                            Quantity: {quantity}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            onClick={() =>
                                                handleDeletion(name)
                                            }>
                                            Remove
                                        </Button>
                                    </Box>
                                ))
                            )}
                        </Stack>
                    ) : (
                        <Stack>
                            {Array(5)
                                .fill(0)
                                .map((element) => (
                                    <Skeleton
                                        variant="text"
                                        key={"skeleton"}
                                        width={500}
                                        height={50}
                                    />
                                ))}
                        </Stack>
                    )}
                </Box>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2">
                        Add Item
                    </Typography>
                    <Stack width="100%" direction="row" spacing={2}>
                        <TextField
                            id="outlined-basic"
                            label="Item"
                            variant="outlined"
                            fullWidth
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                        <Button
                            variant="outlined"
                            onClick={() => {
                                handleAddition(itemName);
                                setItemName("");
                                handleClose();
                            }}>
                            Add
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
};

export default InventoryPage;
