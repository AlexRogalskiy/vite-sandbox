import * as React from "react";

export const Button: React.FC<{ text: string }> = ({text}) => {
    return <button>{text}</button>;
};
