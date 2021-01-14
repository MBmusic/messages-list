import React from "react";

interface Props {
    children?: JSX.Element,
    show: boolean,
    className?: string
}

const Popup = ({ children, show = true, className = "" }: Props) => {
    return (
        <>
            {
                show && (
                    <div className="popup">
                        <div className={`popup__modal ${className}`}>
                            {children}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Popup;