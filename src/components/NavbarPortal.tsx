// src/components/NavbarPortal.tsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Navbar from "./Navbar";

export default function NavbarPortal() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return createPortal(<Navbar />, document.body);
}