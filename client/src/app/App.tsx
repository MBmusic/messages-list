// New version

import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Messages from "./components/Messages";
import Popup from "./custom/Popup";
import PopupAddMessage from "./components/Popups/PopupAddMessage";
import PopupDeleteMessage from "./components/Popups/PopupDeleteMessage";
import PopupUpdateMessage from "./components/Popups/PopupUpdateMessage";
import PopupAddComment from "./components/Popups/PopupAddComment";
import API from "./RequestApi";

type PopupTypes = {
    [addMessage: string]: boolean,
    deleteMessage: boolean,
    updateMessage: boolean,
    addComment: boolean,
    deleteComment: boolean
}

function App(): JSX.Element {
    const [isEventPopup, setIsEventPopup] = useState<PopupTypes>({
        addMessage: false,
        deleteMessage: false,
        updateMessage: false,
        addComment: false,
        deleteComment: false
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
            API.delete(`/comments/message/${idMessage}`);

            setMessages(messagesList);
        });

        togglePopup("deleteMessage", false, "");
    }

    const deleteComment = (idComment): void => {
        API.delete(`/comments/${idComment}`).then(() => {
            const commentsList = comments.filter(item => item._id !== idComment);
            setComments(commentsList);
        });
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
            <PopupAddComment 
                idMessage = {idMessage} 
                togglePopup = {togglePopup} 
                setComments = {setComments}
            />
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
                        deleteComment = {deleteComment}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
