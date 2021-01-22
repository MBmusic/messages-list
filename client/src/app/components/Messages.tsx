import React from 'react';
import Comments from "./Comments";
import { map } from "lodash";

type Props = {
    messages: Array<string>
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
                                            Name
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vitae delectus accusamus optio! Temporibus provident cupiditate odio ut magni officiis beatae, qui doloremque eveniet ullam sit, minus quae ipsam unde!
                                        </p>
                                    </div>

                                    <div className="messate__date">
                                        14.01.2021
                                    </div>
                                </div>
                            </div>

                            <Comments />
                        </div>
                    )
                }) 
            )
        }
    }

    return renderMessage();
}

export default Messages;