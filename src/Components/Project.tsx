import React from 'react';
import CodeSamples from "./CodeSamples";
import ProjectList from "./ProjectList";

const Project = () => {
    return (
        <div className="p-6">
            <ProjectList/>
            <CodeSamples/>
        </div>
    );
};

export default Project;