import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Messages from "./components/Messages";
import Popup from "./custom/Popup";
import PopupAddMessage from "./components/Popups/PopupAddMessage";
import PopupDeleteMessage from "./components/Popups/PopupDeleteMessage";
import PopupUpdateMessage from "./components/Popups/PopupUpdateMessage";
import API from "./RequestApi";

type PopupTypes = {
    [add: string]: boolean,
    delete: boolean,
    update: boolean,
    comment: boolean
}

function App(): JSX.Element {
    const [isEventPopup, setIsEventPopup] = useState<PopupTypes>({
        add: false,
        delete: false,
        update: false,
        comment: false
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

    const popupChildren = () => {
        return [
            <PopupAddMessage 
                togglePopup = {togglePopup} 
                setMessages = {setMessages} 
            />,
            <PopupDeleteMessage 
                togglePopup = {togglePopup}  
                deleteMessage = {deleteMessage} 
            />,
            <PopupUpdateMessage  
                togglePopup = {togglePopup} 
                idMessage = {idMessage} 
                messages = {messages} 
                setMessagesMain = {setMessages} 
            />,
            <div>123</div>
        ]
    }

    const renderAllPopups = () => {
        return Object.keys(isEventPopup).map((item, index) => {
            return (
                <Popup 
                    show={isEventPopup[item]}
                    className="popup__modal--500"
                    popupType={item}
                    togglePopup={togglePopup}
                    key={index}
                >
                    {popupChildren()[index]}
                </Popup>
            )
        })
    }

    return (
        <div className="wrapper">
            <Header 
                togglePopup = {togglePopup}
            />

            {renderAllPopups()}

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
