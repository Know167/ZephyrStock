import { createContext } from "react";

export const initialState = {
    inventoryData: [],
    handleUpdate: () => {},
    handleAddition: () => {},
    handleDeletion: () => {},
};
export const inventoryDataContext = createContext(initialState);
