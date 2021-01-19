import React from 'react';

function Message(): JSX.Element {
    return (
        <div className="message">
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

            <div className="comments">
                <div className="message message--comments">
                    <div className="message__content">
                        <div className="message__line"></div>

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
                </div>
            </div>
        </div>
    )
}

export default Message;