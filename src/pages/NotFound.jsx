import React from "react";
import Button from "../components/Button/Button";
import { IoMdArrowRoundBack } from "react-icons/io";

function NotFound() {
    return (
        <div className="flex items-center h-[70vh] justify-center text-center">
            <div>
                <h1 className="text-3xl">The page wasn't found</h1>
                <Button type="router-link" to="/" className="my-2">
                    <IoMdArrowRoundBack />
                    <span>Main page</span>
                </Button>
            </div>
        </div>
    );
}

export default NotFound;
