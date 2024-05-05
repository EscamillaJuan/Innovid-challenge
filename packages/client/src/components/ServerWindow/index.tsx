import { useState } from "react";
import "./ServerWindow.scss"

interface IProps {
    id: number;
    usage: number;
}
export const ServerWindow: React.FC<IProps> = (props) => {
    const [isOn, setIsOn] = useState<boolean>(false);
    return (
        <div className="window server-window" style={{width: "320px"}}>
            <div className="title-bar">
                <div className="title-bar-text">Server #{props.id}</div>
            </div>
        <div className="window-body server-window__body">
            <img
                src={isOn ? "pc-on.gif": "pc-off.png"}
                width='50%'
                aspect-ratio='14/12'
                alt="server-img"
            />
        </div>
            <div className="status-bar">
                <p className="status-bar-field status-bar-field__center">Status {isOn ? "ON" : "OFF"}</p>
                <p
                    className="status-bar-field status-bar-field__center status-bar-field__btn"
                    onClick={() => setIsOn(!isOn)}
                >
                    {
                        isOn ?
                        "Shut down" : "Turn on"
                    }
                </p>
                <p className="status-bar-field status-bar-field__center">CPU Usage: 14%</p>
            </div>
        </div>
    )
}