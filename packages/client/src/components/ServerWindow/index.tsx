import { useEffect, useState } from "react";
import "./ServerWindow.scss"
import { APIService } from "../../services/APIService";

interface IProps {
    id: number;
}
export const ServerWindow: React.FC<IProps> = (props) => {
    const [usage, setUsage] = useState<number>(0);
    const [isOn, setIsOn] = useState<boolean>(false);

    useEffect(() => {
        const getServerInfo = async () => {
            const response: {id: number, load: number} = await APIService.getServerUsage(props.id);
            setUsage(response.load);
        }
        getServerInfo();
        const intervalId = setInterval(() => {
            getServerInfo();
        }, 5000);
        return () => {
          clearInterval(intervalId);
        };
      });

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
                <p className="status-bar-field status-bar-field__center">CPU Usage: {isOn ? usage + "%" : "0%"}</p>
            </div>
        </div>
    )
}