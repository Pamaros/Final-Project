import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps) {

    return(
        <div className={className}>{ children }</div>
    )
}

export default Card