import React from "react";

const Select = React.forwardRef(
    (
        {
            options,
            name,
            onChange = Function.prototype,
            className = "",
            ...props
        },
        ref
    ) => {
        return (
            <select
                {...props}
                ref={ref}
                defaultValue={name ? "default" : undefined}
                onChange={e => onChange(e)}
                className={`${className} rounded-lg px-2 py-1 max-w-full `}
            >
                {!!name && (
                    <option disabled value="default">
                        {name}
                    </option>
                )}
                {options.map(option => (
                    <option key={option.label} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }
);

export default Select;
