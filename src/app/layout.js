import { Inter } from "next/font/google";
import "./globals.css";

import InventoryDataProvider from "../../utils/inventoryReducer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Zephyr Stock",
    description:
        "An inventory Management App built with Firestore, Next.js and MUI",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <InventoryDataProvider>{children}</InventoryDataProvider>
            </body>
        </html>
    );
}
