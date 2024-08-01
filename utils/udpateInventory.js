import {
    doc,
    getDoc,
    setDoc,
    collection,
    deleteDoc,
    query,
    getDocs,
} from "firebase/firestore";
import { firestore } from "@/app/firebase";

export async function updateInventory() {
    try {
        const snapshot = query(collection(firestore, "inventory"));
        const docs = await getDocs(snapshot);
        const updatedData = docs.docs.map((doc) => ({
            name: doc.id,
            ...doc.data(),
        }));
        return updatedData;
    } catch (error) {
        console.error("Error updating inventory:", error);
        throw error;
    }
}

export const addItem = async (item) => {
    try {
        const docRef = doc(collection(firestore, "inventory"), item);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const { quantity } = docSnap.data();
            await setDoc(docRef, { quantity: quantity + 1 });
        } else {
            await setDoc(docRef, { quantity: 1 });
        }
    } catch (error) {
        console.error("Error adding item:", error);
        throw error;
    }
};

export const removeItem = async (item) => {
    try {
        const docRef = doc(collection(firestore, "inventory"), item);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const { quantity } = docSnap.data();
            if (quantity === 1) {
                await deleteDoc(docRef);
            } else {
                await setDoc(docRef, { quantity: quantity - 1 });
            }
        }
    } catch (error) {
        console.error("Error removing item:", error);
        throw error;
    }
};
