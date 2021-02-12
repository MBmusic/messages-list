import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Messages from "./components/Messages";
import Popup from "./custom/Popup";
import PopupAddMessage from "./components/Popups/PopupAddMessage";
import PopupDeleteMessage from "./components/Popups/PopupDeleteMessage";
import API from "./RequestApi";

type PopupTypes = {
    add: boolean,
    delete: boolean
}

function App(): JSX.Element {
    const [isEventPopup, setIsEventPopup] = useState<PopupTypes>({
        add: false,
        delete: false
    });

    const [messages, setMessages] = useState<Array<string>>([]);
    const [comments, setComments] = useState<Array<string>>([]);

    useEffect(() => {
        getAllMessages();
        getAllComments();
    }, [])

    const togglePopup = (eventName: string, boolVal: boolean): void => {
        setIsEventPopup({
            ...isEventPopup,
            [eventName]: boolVal
        });
    }

    const getAllMessages = async () => {
       const response = await API.get("/messages");
       setMessages(response.data);
    }

    const getAllComments = async () => {
        const response = await API.get("/comments");
        setComments(response.data);
    }

    return (
        <div className="wrapper">
            <Header 
                togglePopup = {togglePopup}
            />

            <Popup 
                show={isEventPopup.add}
                className="popup__modal--500"
                togglePopup = {togglePopup}
            >
                <PopupAddMessage 
                    togglePopup = {togglePopup}
                    setMessages = {setMessages}
                />
            </Popup>

            <Popup
                show={isEventPopup.delete}
                className="popup__modal--500"
            >
                <PopupDeleteMessage />
            </Popup>

            <div className="content">
                <div className="content__center">
                    <Messages 
                        messages={messages}
                        comments = {comments}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
