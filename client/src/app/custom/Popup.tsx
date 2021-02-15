import React from "react";

type Props = {
    children: JSX.Element,
    show?: boolean,
    className?: string,
    popupType?: string,
    togglePopup?: any

}

const Popup = ({ children, show = true, className = "", popupType = "", togglePopup = () => {} }: Props): JSX.Element => {
    return (
        <>
            {
                show && (
                    <div className="popup">
                        <div className="popup__toggle" onClick={() => togglePopup(popupType, false)} />

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