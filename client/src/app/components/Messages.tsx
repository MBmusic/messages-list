import React from 'react';
import Comments from "./Comments";
import { map } from "lodash";
import moment from "moment";

type Props = {
    messages: any,
    comments: any,
    togglePopup: any,
    deleteComment: any
}

function Messages({ messages, comments, togglePopup, deleteComment }: Props): JSX.Element {
    const renderComments = (id): any => {
        return map(comments, (comment, i) => {
            if (id === comment.message_id) {
                return <Comments 
                    key={i}
                    {...comment}
                    deleteComment={deleteComment}
                />;
            }
        })
    }

    const renderMessage = (): any => {
        if (!messages.length) {
            return (
                <div className="not-found">
                    Сообщений пока нет
                </div>
            )
        } else {
            return (
                map([...messages].reverse(), (message, i) => {
                    return (
                        <div key={i} className="message">
                            <div className="message__content">
                                <div className="message__avatar" />

                                <div className="message__info">
                                    <div className="message__text">
                                        <div className="message__title">
                                            {message.name}
                                        </div>
                                        <p>
                                            {message.message}
                                        </p>
                                    </div>

                                    <div className="messate__date">
                                        {moment(message.date).format('ll')}
                                    </div>
                                </div>
                                <div className="message__btns">
                                    <div>
                                        <i onClick={() => togglePopup("updateMessage", true, message._id)} className="tiny material-icons">edit</i>
                                        <i onClick={() => togglePopup("deleteMessage", true, message._id)} className="tiny material-icons">delete</i>
                                    </div>

                                    <span className="link" onClick={() => togglePopup("addComment", true, message._id)}>
                                        Комментировать
                                    </span>
                                </div>
                            </div>
                             
                            <div className="comments">
                                {renderComments(message._id)}
                            </div>
                        </div>
                    )
                }) 
            )
        }
    }

    return renderMessage();
}

export default Messages;