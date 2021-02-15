import React from "react";

type Props = {
    togglePopup: any
}

function PpupUpdateMessage({ togglePopup }: Props): JSX.Element {
    return (
        <>
            <div className="title">
                Редактирование сообщения
            </div>

            <div className="flex-btn">
                <span className={`waves-effect waves-light btn blue darken-2 btn--130 margin-right_20`}>
                    Удалить
                </span>

                <span onClick={() => togglePopup("update", false)} className="waves-effect waves-light btn blue darken-2 btn--130">
                    Отменить
                </span>
            </div>
        </>
    )
}

export default PpupUpdateMessage;