
import { ReactNode } from "react";
import Navbar from "./component/Navbar"
interface AuthLayoutProps { 
    children : ReactNode;
}
export default function  AuthLayout({children}: AuthLayoutProps) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    ) ;
}