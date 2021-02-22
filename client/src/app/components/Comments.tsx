import React from 'react';
import moment from "moment";

type Props = {
    _id: string,
    name: string,
    comment: any,
    date: Date,
    deleteComment: any
}

function Comments({_id, name, comment, date, deleteComment}: Props): JSX.Element {
    return (
        <div className="message message--comments">
            <div className="message__content">
                <div className="message__line"></div>

                <div className="message__avatar"></div>
                <div className="message__info">
                    <div className="message__text">
                        <div className="message__title">
                            {name}
                        </div>
                        <p>
                            {comment}
                        </p>
                    </div>

                    <div className="messate__date">
                        {moment(date).format('ll')}
                    </div>
                </div>

                <div className="message__btns">
                    <i onClick={() => deleteComment(_id)} className="tiny material-icons">delete</i> 
                </div>
            </div>
        </div>
    )
}

export default Comments;