import React from "react";

type Props = {
    children: JSX.Element,
    show?: boolean,
    className?: string,
    togglePopup?: any

}

const Popup = ({ children, show = true, className = "", togglePopup = () => {} }: Props): JSX.Element => {
    return (
        <>
            {
                show && (
                    <div className="popup">
                        <div className="popup__toggle" onClick={() => togglePopup("add", false)} />

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