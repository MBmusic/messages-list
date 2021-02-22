import React from "react";

type Props = {
    togglePopup: any,
    deleteMessage: any
}

function PopupDeleteMessage({ togglePopup, deleteMessage }: Props): JSX.Element {
    return (
        <>
            <div className="title">
                Вы действительно хотите удалить?
            </div>

            <div className="flex-btn">
                <span onClick={() => deleteMessage()} className={`waves-effect waves-light btn blue darken-2 btn--130 margin-right_20`}>
                    Удалить
                </span>

                <span onClick={() => togglePopup("deleteMessage", false)} className="waves-effect waves-light btn blue darken-2 btn--130">
                    Отменить
                </span>
            </div>
        </>
    )
}

export default PopupDeleteMessage;
