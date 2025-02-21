import { space_grotesk } from "@/app/fonts/fonts";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content">
            <div className={space_grotesk.className}>
                <div className="grid grid-flow-col gap-4">
                    <Link href="/about">About</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/team">Team</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div>
                    <p>Copyright © MRAC 2025 - All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}