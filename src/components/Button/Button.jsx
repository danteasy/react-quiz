import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({
    type,
    to = Function.prototype,
    size = "small",
    style = "primary",
    children,
    parentClass = "inline-block",
    className = "",
}) => {
    const clazzName = `text-center flex shrink-0 justify-self-start items-center gap-2 btn btn--${size} btn--${style} ${className}`;

    const renderButton = () => {
        switch (type) {
            case "btn": {
                return (
                    <button className={parentClass} onClick={() => to()}>
                        <div className={clazzName}>{children}</div>
                    </button>
                );
            }
            case "router-link": {
                return (
                    <Link to={to} className={parentClass}>
                        <div className={clazzName}>{children}</div>
                    </Link>
                );
            }
            case "link": {
                return (
                    <a className={parentClass} href={to}>
                        <div className={clazzName}>{children}</div>
                    </a>
                );
            }

            default:
                return <div>Error. Check the props you passed</div>;
        }
    };

    return <>{renderButton()}</>;
};

export default Button;
