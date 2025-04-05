import * as React from "react";
import ProjectCard from "./ProjectCard.tsx";

function OrganizationSelection() {
    const [selected, setSelected] = React.useState(String)
    // const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    //     console.log(event)
    //     const clickedButton = event.currentTarget;
    //     setSelected(clickedButton.textContent || "");
    // };

    const displaySelected = (selected: string) => {
        if (selected === "ASE") {
            return (
                <div className="grid grid-cols-1 md:grid-cols-5">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            )
        } else if (selected === "SWE") {
            return (
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            )
        } else if (selected === "VPG") {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            )
        } else {
            return (
                <></>
            )
        }
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3">

                <a
                    className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                    onClick={() => {
                        setSelected("ASE");
                    }}
                >
                    ASE
                </a>
                <a
                    className="inline-block rounded-sm border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden"
                    onClick={() => {
                        setSelected("SWE");
                    }}
                >
                    SWE
                </a>
                <a
                    className="inline-block rounded-sm border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden"
                    onClick={() => {
                        setSelected("VPG");
                    }}
                >
                    VPG
                </a>
            </div>
            {
                displaySelected(selected)
            }
        </div>
    )
}

export default OrganizationSelection;