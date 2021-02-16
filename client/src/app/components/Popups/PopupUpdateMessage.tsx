import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { InputValidator } from "../../helpers/InputValidator";
import API from "../../RequestApi";

type Props = {
    togglePopup: any,
    idMessage: string
}

type Message =  {
    name: string,
    message: string
}

function PpupUpdateMessage({ togglePopup, idMessage }: Props): JSX.Element {
    const [message, setMessage] = useState<Message>({
        name: "",
        message: ""
    });
    const maxSize = 50;

    useEffect(() => {
        getMessageData();
    }, []);

    const updateMessage = (): void => {

    }

    const getMessageData = async () => {
        const response = await API.get(`/messages/${idMessage}`);

        setMessage({
            name: response.data[0].name,
            message: response.data[0].message
        })
    }

    const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targ = e.target;

        setMessage(prevValue => {
            return {
                ...message,
                [targ.id]: InputValidator(prevValue[targ.id as keyof Message], targ.value, maxSize)
            };
        });
    }

    const toggleActiveBtn = (): any => {
        return Object.values(message).filter(item => isEmpty(item));
    }

    return (
        <>
            <div className="title">
                Редактирование сообщения
            </div>

            <form onSubmit={ updateMessage }>
                <div className="label">
                    <div className="input-field col s6">
                        <input 
                            id="name" 
                            type="text"
                            value={message.name}
                            onChange={(e) => handleChangeField(e)}
                        />
                        <label htmlFor="name">Имя</label>
                        <span className="label__max">{message.name.length}/{maxSize}</span>
                    </div>
                </div>

                <div className="label margin-bottom_30">
                    <div className="input-field col s6">
                        <input 
                            id="message" 
                            type="text"
                            value={message.message}
                            onChange={(e) => handleChangeField(e)}
                        />
                        <label htmlFor="message">Текст сообщения</label>
                        <span className="label__max">{message.message.length}/{maxSize}</span>
                    </div>
                </div>

                <div className="flex-btn">
                    <button className={`waves-effect waves-light btn blue darken-2 btn--130 margin-right_20 ${isEmpty(toggleActiveBtn()) ? "" : "disabled"}`}>
                        Удалить
                    </button>

                    <span onClick={() => togglePopup("update", false)} className="waves-effect waves-light btn blue darken-2 btn--130">
                        Отменить
                    </span>
                </div>
            </form>
        </>
    )
}

export default PpupUpdateMessage;