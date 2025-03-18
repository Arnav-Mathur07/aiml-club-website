"use client"
import { useEffect, useState } from "react";
import { poppins } from "../fonts/fonts";
import { faculty, student } from "@/constants";
import TeamCard from "@/components/cards/team-card";

export default function Page() {
    //logic here
    const [animationStep, setAnimationStep] = useState(0)
    const [activeTab, setActiveTab] = useState("student")

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationStep(prevStep => (prevStep + 1) % 2);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    function checkAnimation(step: number) {
        if (animationStep == step && step == 0) {
            return "bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent transition-all duration-300"
        }
        else if (animationStep == step && step == 1) {
            return "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent transition-all duration-300"
        }
        else return "text-black"

    }
    // rendering here
    return (
        <main className="pt-32 pl-12  text-center">
            <h1 className={`${poppins.className} text-6xl font-bold`}>
                <span className={checkAnimation(0)}>Our </span>
                <span className={checkAnimation(1)}>Team</span>
            </h1>
            <div className="flex gap-2 justify-center mt-4">

                <button className={`${activeTab === "student" && "btn-accent px-8"} btn transition-all duration-150`} onClick={() => setActiveTab("student")}>Student Chair</button>
                <button className={`${activeTab === "faculty" && "btn-accent px-8"} btn transition-all duration-150`} onClick={() => setActiveTab("faculty")}>Executive Chair</button>

            </div>
            {
                activeTab === "student" ?
                    <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-7 w-full">
                        {student.map((s, i) => (

                            <TeamCard
                                name={s.name}
                                position={s.position}
                                image={s.image}
                                gitHubLink={s.gitHubLink}
                                linkedInLink={s.linkedInLink}
                                key={i}
                            />
                        ))}
                    </div>
                    :
                    <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-7 w-full">
                    {faculty.map((f, i) => (

                        <TeamCard
                            name={f.name}
                            position={f.position}
                            image={f.image}
                            gitHubLink={""}
                            linkedInLink={f.linkedInLink}
                            key={i}
                        />
                    ))}
                </div>
            }
        </main>
    )
}