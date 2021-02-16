import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Messages from "./components/Messages";
import Popup from "./custom/Popup";
import PopupAddMessage from "./components/Popups/PopupAddMessage";
import PopupDeleteMessage from "./components/Popups/PopupDeleteMessage";
import PopupUpdateMessage from "./components/Popups/PopupUpdateMessage";
import API from "./RequestApi";

type PopupTypes = {
    add: boolean,
    delete: boolean,
    update: boolean
}

function App(): JSX.Element {
    const [isEventPopup, setIsEventPopup] = useState<PopupTypes>({
        add: false,
        delete: false,
        update: false
    });

    const [messages, setMessages] = useState<Array<any>>([]);
    const [comments, setComments] = useState<Array<any>>([]);
    const [idMessage, setIdMessage] = useState<string>("");

    useEffect(() => {
        getAllMessages();
        getAllComments();
    }, [])

    const togglePopup = (eventName: string, boolVal: boolean, id = ""): void => {
        setIdMessage(id);

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

    const deleteMessage = (): void => {
        API.delete(`/messages/${idMessage}`).then(() => {
            const messagesList = messages.filter(item => item._id !== idMessage);
            setMessages(messagesList);
        });

        togglePopup("delete", false, "");
    }

    return (
        <div className="wrapper">
            <Header 
                togglePopup = {togglePopup}
            />

            <Popup 
                show={isEventPopup.add}
                className="popup__modal--500"
                popupType="add"
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
                popupType="delete"
                togglePopup = {togglePopup}
            >
                <PopupDeleteMessage
                    togglePopup = {togglePopup}
                    deleteMessage = {deleteMessage}
                />
            </Popup>

            <Popup 
                show={isEventPopup.update}
                className="popup__modal--500"
                popupType="update"
                togglePopup = {togglePopup}
            >
                <PopupUpdateMessage 
                    togglePopup = {togglePopup}
                    idMessage = {idMessage}
                />
            </Popup>

            <div className="content">
                <div className="content__center">
                    <Messages 
                        messages={messages}
                        comments = {comments}
                        togglePopup = {togglePopup}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
