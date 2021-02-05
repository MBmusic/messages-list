import React from 'react';
import Comments from "./Comments";
import { map } from "lodash";
import moment from "moment";

type Props = {
    messages: any
}

function Messages({ messages }: Props): JSX.Element {
    const renderMessage = (): any => {
        if (!messages.length) {
            return (
                <div className="not-found">
                    Сообщений пока нет
                </div>
            )
        } else {
            return (
                map(messages, (item, i) => {
                    return (
                        <div key={i} className="message">
                            <div className="message__content">
                                <div className="message__avatar"></div>
                                <div className="message__info">
                                    <div className="message__text">
                                        <div className="message__title">
                                            {item.name}
                                        </div>
                                        <p>
                                            {item.message}
                                        </p>
                                    </div>

                                    <div className="messate__date">
                                        {moment(item.date).format('ll')}
                                    </div>
                                </div>
                                <div className="message__btns">
                                    <div>
                                        <i className="tiny material-icons">edit</i>
                                        <i className="tiny material-icons">delete</i>
                                    </div>

                                    <span className="link">
                                        Комментировать
                                    </span>
                                </div>
                            </div>
                            
                            {/* 
                            <Comments />
                            */}
                        </div>
                    )
                }) 
            )
        }
    }

    return renderMessage();
}

export default Messages;