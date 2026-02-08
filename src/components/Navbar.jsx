import React from "react";


const Navbar = () => {

    return (
    <>
        <div className="bg-black/50 bg-opacity-25 min-h-[70px] rounded-xl mt-[10px] flex text-center">
            <div className="bg-red-500 w-[100px]">Home</div>
            <div className="bg-red-500 w-[100px]">About</div>
            <div className="bg-red-500 w-[100px]">Projects</div>
            <div className="bg-red-500 w-[100px]">Contact</div>
        </div>
        
    </>
    )
}

export default Navbar;