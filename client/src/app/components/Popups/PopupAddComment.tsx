import React, { useState } from "react";
import { isEmpty } from "lodash";
import { InputValidator } from "../../helpers/InputValidator";
import API from "../../RequestApi";

type Props = {
    idMessage: string
    togglePopup: any,
    setComments: any
}

type Comment =  {
    name: string,
    comment: string
}

function PopupAddComment({ idMessage, togglePopup, setComments }: Props) {
    const [comment, setComment] = useState<Comment>({
        name: "",
        comment: ""
    });
    const maxSize = 50;

    const addComment = (e: React.FormEvent): void => {
        e.preventDefault();

        API.post("/comments", {
            message_id: idMessage,
            name: comment.name,
            comment: comment.comment,
            date: Date.now()
        }).then(res => setComments((arr: any) => [...arr, res.data]));

        togglePopup("addComment", false);
    }

    const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targ = e.target;

        setComment(prevValue => {
            return {
                ...comment,
                [targ.id]: InputValidator(prevValue[targ.id as keyof Comment], targ.value, maxSize)
            };
        });
    }

    const toggleActiveBtn = (): any => {
        return Object.values(comment).filter(item => isEmpty(item));
    }

    return (
        <>
            <div className="title">
                Добавить комментарий
            </div>

            <form onSubmit={ addComment }>
                <div className="label">
                    <div className="input-field col s6">
                        <input 
                            id="name" 
                            type="text"
                            value={comment.name}
                            onChange={(e) => handleChangeField(e)}
                            
                        />
                        <label htmlFor="name">Имя</label>
                        <span className="label__max">{comment.name.length}/{maxSize}</span>
                    </div>
                </div>

                <div className="label margin-bottom_30">
                    <div className="input-field col s6">
                        <input 
                            id="comment" 
                            type="text"
                            value={comment.comment}
                            onChange={(e) => handleChangeField(e)}
                        />
                        <label htmlFor="comment">Комментарий</label>
                        <span className="label__max">{comment.comment.length}/{maxSize}</span>
                    </div>
                </div>

                <div className="flex-btn">
                    <button className={`waves-effect waves-light btn blue darken-2 btn--130 margin-right_20 ${isEmpty(toggleActiveBtn()) ? "" : "disabled"}`}>
                        Добавить
                    </button>

                    <span onClick={() => togglePopup("addComment", false)} className="waves-effect waves-light btn blue darken-2 btn--130">
                        Отменить
                    </span>
                </div>
            </form>
        </>
    )
}

export default PopupAddComment;