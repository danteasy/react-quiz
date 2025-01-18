import React from "react";
import Button from "./Button/Button";
import { TiArrowBack } from "react-icons/ti";

function HomeButton({ text = "Back", ...props }) {
    return (
        <Button type="router-link" to="/" {...props}>
            <TiArrowBack size="1.5rem" />
            <span className="font-[600]">{text}</span>
        </Button>
    );
}

export default HomeButton;
