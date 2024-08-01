"use client"

import { useReducer, useCallback } from "react";

import { addItem, removeItem, updateInventory } from "./udpateInventory";
import { inventoryDataContext, initialState } from "./inventoryDataContext";

const inventoryDataReducer = (inventoryDataState, action) => {
    switch (action.type) {
        case "UPDATE_INVENTORY":
            return { ...inventoryDataState, inventoryData: action.payload };
        default:
            return inventoryDataState;
    }
};

const InventoryDataProvider = (props) => {
    const [inventoryDataState, dispatch] = useReducer(
        inventoryDataReducer,
        initialState
    );
    const handleUpdate = useCallback(async () => {
        try {
            const newData = await updateInventory();
            dispatch({ type: "UPDATE_INVENTORY", payload: newData });
        } catch (error) {
            console.error("Failed to update inventory:", error);
        }
    }, []);

    const handleAddition = useCallback(
        async (itemName) => {
            try {
                await addItem(itemName);
                await handleUpdate();
            } catch (error) {
                console.error("Failed to add item:", error);
            }
        },
        [handleUpdate]
    );

    const handleDeletion = useCallback(
        async (itemName) => {
            try {
                await removeItem(itemName);
                await handleUpdate();
            } catch (error) {
                console.error("Failed to remove item:", error);
            }
        },
        [handleUpdate]
    );

    return (
        <inventoryDataContext.Provider
            value={{
                inventoryData: inventoryDataState.inventoryData,
                handleAddition:handleAddition,
                handleDeletion: handleDeletion,
                handleUpdate: handleUpdate,
            }}>
            {props.children}
        </inventoryDataContext.Provider>
    );
};

export default InventoryDataProvider;
