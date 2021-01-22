import React, { useState } from 'react';
import Header from "./components/Header";
import Messages from "./components/Messages";
import Popup from "./custom/Popup";
import PopupAddMessage from "./components/Popups/PopupAddMessage";
import API from "./RequestApi";

function App(): JSX.Element {
    const [isPopupMessage, setIsPopupMessage] = useState<boolean>(false);
    const [messages, setMessages] = useState<Array<string>>([]);

    const toggleAddMessage = (boolVal: boolean): void => {
        setIsPopupMessage(boolVal);
    }

    const getAllMessages = async () => {
       const responce = await API.get("/messages");
       setMessages(responce.data);
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
                    <Messages 
                        messages={messages}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
