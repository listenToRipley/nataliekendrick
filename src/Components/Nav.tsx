import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
    <nav className="flex items-center justify-between flex-wrap bg-sky-900 p-4">
        <div className="has-tooltip ">
            <span 
            className="tooltip shadow-lg p-1 mt-16 ml-20 duration-150 bg-sky-500 rounded-lg text-teal-200 ease-in-out">
                    Home
            </span>
            <Link to="/" className="block lg:inline-block lg:mt-0">
                <div className="flex items-center flex-shrink-0 text-white mr-8">
                    <svg 
                    className="fill-current h-12 w-12 mr-2 mt-4 " 
                    width="64" height="64" 
                    viewBox="0 4 35 30" xmlns="http://www.w3.org/2000/svg">

                        <path className="cls-2" 
                            d="M12.15,14.49a1.88,1.88,0,0,1-.92-.23L9,13.08,6.73,14.26a2,2,0,0,1-2.86-2.08l.42-2.5L2.48,7.91A2,2,0,0,1,3.57,4.54l2.51-.36L7.21,1.9A2,2,0,0,1,9,.8H9a2,2,0,0,1,1.77,1.1h0l1.12,2.28,2.52.36a2,2,0,0,1,1.09,3.37L13.66,9.68l.43,2.5a1.94,1.94,0,0,1-.79,1.93A1.89,1.89,0,0,1,12.15,14.49ZM9,2.78,7.41,6l-3.55.52L6.44,9l-.6,3.54L9,10.82l3.18,1.67L11.51,9l2.57-2.51L10.54,6Z"/>

                        <path className="cls-2" 
                        d="M12.15,30.47a2,2,0,0,1-.92-.23L9,29.05,6.73,30.24a2,2,0,0,1-2.86-2.08l.42-2.51L2.48,23.88a1.93,1.93,0,0,1-.5-2,2,2,0,0,1,1.59-1.35l2.51-.36,1.13-2.28A2,2,0,0,1,9,16.77H9a2,2,0,0,1,1.77,1.1l1.12,2.28,2.52.36a2,2,0,0,1,1.09,3.37l-1.82,1.77.43,2.51a2,2,0,0,1-1.94,2.31ZM9,18.75,7.41,22l-3.55.51L6.44,25l-.6,3.55L9,26.79l3.18,1.68L11.51,25l2.57-2.5L10.54,22Z"/>

                        <path className="cls-3" 
                        d="M23.85,11.21,25.21,14l3,.44a1,1,0,0,1,.54,1.66L26.59,18.2l.52,3a1,1,0,0,1-1.42,1L23,20.82l-2.72,1.43a1,1,0,0,1-1.41-1l.52-3-2.19-2.14a1,1,0,0,1,.53-1.66l3-.44,1.36-2.75A1,1,0,0,1,23.85,11.21Z"/>

                        <path className="cls-2" 
                        d="M19.81,23.36A2,2,0,0,1,18.65,23a2,2,0,0,1-.78-1.93l.43-2.5-1.82-1.78a2,2,0,0,1,1.09-3.36L20.09,13l1.12-2.28a2,2,0,0,1,3.54,0L25.87,13l2.52.37A2,2,0,0,1,30,14.75a2,2,0,0,1-.5,2l-1.82,1.78.43,2.5A2,2,0,0,1,27.31,23a2,2,0,0,1-2.08.15L23,22l-2.25,1.18A2,2,0,0,1,19.81,23.36ZM23,11.65l-1.54,3.22-3.55.52,2.59,2.46-.61,3.54L23,19.69l3.18,1.67-.65-3.51,2.58-2.51-3.55-.47Z"/>

                    </svg>
                    <span className="font-semibold text-xl tracking-tight mt-4 hover:hover:text-teal-200 transition duration-150 ease-in-out  md:text-3xl">Higher May</span>
                </div>
            </Link>
        </div>
        {/* <div className="block lg:hidden"> */}
            {/* placeholder */}
            {/* <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button> */}
        {/* </div> */}
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm mt-3 ml-1 lg:flex-grow md:text-xl ">

            <Link to="/resume" className="block lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">
            Resume
            </Link>

            <Link to="/projects" className="block lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">
            Projects
            </Link>

            <Link to="/about" className="block lg:inline-block lg:mt-0 text-white hover:text-teal-200">
            About
            </Link>
        </div>

    </div>
</nav>
    )
};

export default Navigation;