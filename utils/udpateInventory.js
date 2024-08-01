import { doc, getDoc, setDoc, collection, deleteDoc } from "firebase/firestore";

import { firestore } from "@/app/firebase";

export const addItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    console.log(docRef);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("doc snap exists");
        const { quantity } = docSnap.data();
        await setDoc(docRef, { quantity: quantity + 1 });
    } else {
        console.log("docsnap doesnt exist");
        await setDoc(docRef, { quantity: 1 });
    }
};
export const removeItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    console.log(docRef);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const { quantity } = docSnap.data();
        if (quantity === 1) {
            await deleteDoc(docRef);
        } else {
            await setDoc(docRef, { quantity: quantity - 1 });
        }
    }
};
