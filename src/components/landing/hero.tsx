"use client";

import { useEffect, useState } from "react";

import Code from "./code";
import { poppins, space_grotesk } from "@/app/fonts/fonts";

export default function Hero() {

    const [animationStep, setAnimationStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationStep(prevStep => (prevStep + 1) % 3);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="hero min-h-[80vh]">
                <div className="hero-content text-center">
                    <div className={`${poppins.className}`}>
                        <h1 className="text-6xl font-extrabold">
                            <span className={animationStep === 1 ? 'bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent transition-all duration-300' : ''}>Learn. </span>
                            <span className={animationStep === 2 ? 'bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent transition-all duration-300' : ''}>Develop. </span>
                            <span className={animationStep === 0 ? 'bg-gradient-to-r from-cyan-500 to-yellow-500 bg-clip-text text-transparent transition-all duration-300' : ''}>Advance. </span>
                        </h1>
                        <p className={`py-6 text-lg font-medium ${space_grotesk.className}`}>
                            A collaborative and passionate community for students, by students
                        </p>
                        <button className={`btn btn-accent hover:px-7 transition-all duration-150 ${space_grotesk.className}`}>Join Us &rarr;</button>
                    </div>
                </div>
                <Code />
            </div>

        </>

    )
}