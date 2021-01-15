import React, { useState } from 'react';
import Header from "./components/Header";
import Message from "./components/Message";
import Popup from "./custom/Popup";
import PopupAddMessage from "./components/Popups/PopupAddMessage";

function App(): JSX.Element {
    const [isPopupMessage, setIsPopupMessage] = useState<boolean>(false);

    const toggleAddMessage = (boolVal: boolean): void => {
        setIsPopupMessage(boolVal);
    }

    return (
        <div className="wrapper">
            <Header 
                togglePopup = {toggleAddMessage}
            />

            <Popup 
                show={isPopupMessage}
                className="popup__modal--500"
            >
                <PopupAddMessage 
                    togglePopup = {toggleAddMessage}
                />
            </Popup>

            <div className="content">
                <div className="content__center">
                    <Message />
                </div>
            </div>
        </div>
    );
}

export default App;
