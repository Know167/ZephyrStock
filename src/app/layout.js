import { Inter } from "next/font/google";
import "./globals.css";

import InventoryDataProvider from "../../utils/inventoryReducer";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Zephyr Stock",
    description:
        "An inventory Management App built with Firestore, Next.js and MUI",
};

export default async function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <InventoryDataProvider>
                    <Navbar />
                    {children}
                </InventoryDataProvider>
            </body>
            <footer>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320">
                    <path
                        fill="#0099ff"
                        fill-opacity="1"
                        d="M0,192L24,176C48,160,96,128,144,144C192,160,240,224,288,234.7C336,245,384,203,432,192C480,181,528,203,576,181.3C624,160,672,96,720,85.3C768,75,816,117,864,154.7C912,192,960,224,1008,229.3C1056,235,1104,213,1152,197.3C1200,181,1248,171,1296,165.3C1344,160,1392,160,1416,160L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
                </svg>
            </footer>
        </html>
    );
}
