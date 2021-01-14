import React from 'react';
import Header from "./components/Header";
import Message from "./components/Message";
import Popup from "./custom/Popup";

function App() {
    return (
        <div className="wrapper">
            <Header />

            <Popup 
                show={true}
                className="popup__modal--500"
            >
                <div>123</div>
            </Popup>

            <div className="content">
                <div className="content__center">
                    <Message />
                </div>
            </div>
        </div>
    );
}

export default App;
