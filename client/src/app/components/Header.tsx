import React from 'react';

type Props = {
    togglePopup: any
}

function Header({ togglePopup }: Props): JSX.Element {
    return (
        <div className="header blue darken-1">
            <span onClick={() => togglePopup("add", true)} className="waves-effect waves-light btn blue lighten-2">
                Добавить сообщение
            </span>
        </div>
    )
}

export default Header;