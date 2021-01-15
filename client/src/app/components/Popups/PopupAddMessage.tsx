import React from "react";

type Props = {
    togglePopup: any
}

function PopupAddMessage({ togglePopup }: Props): JSX.Element {
    return (
        <>
            <div className="title">
                Добавить сообщение
            </div>    

            <form action="">
                <div className="label">
                    <div className="input-field col s6">
                        <input 
                            id="name" 
                            type="text"
                        />
                        <label htmlFor="name">Имя</label>
                    </div>
                </div>

                <div className="label margin-bottom_30">
                    <div className="input-field col s6">
                        <input 
                            id="message" 
                            type="text"
                        />
                        <label htmlFor="message">Текст сообщения</label>
                    </div>
                </div>

                <div className="flex-btn">
                    <span className="waves-effect waves-light btn blue darken-2 btn--130 margin-right_20">
                        Добавить
                    </span>

                    <span onClick={() => togglePopup(false)} className="waves-effect waves-light btn blue darken-2 btn--130">
                        Отменить
                    </span>
                </div>
            </form>
        </>
    )
}

export default PopupAddMessage;