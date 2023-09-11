import React from 'react';

const RoutingError = () : JSX.Element => {
    return (
        <div className="h-screen flex flex-col items-center justify-start mt-5">
            <div className="flex justify-between w-full px-5">
                <button 
                className="relative text-5xl p-4 pt-5 text-white">
                    Back</button>
                <button 
                className="relative text-5xl p-4 pt-5 text-white">
                    Home</button>
            </div>
            <div className="text-center">
                <p className="text-5xl">Sorry</p>
                <img src="https://i.giphy.com/media/jOpLbiGmHR9S0/giphy.webp" alt="michael scott from the office, cringing" />
                <p className="text-xl pt-5">This page was not found.</p>
            </div>
        </div>
    );
};

export default RoutingError;