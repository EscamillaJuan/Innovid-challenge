import { Header } from "../Header";
import "98.css";
import "./Wrapper.scss";

interface IProps {
    children: React.ReactNode;
}

export const Wrapper: React.FC<IProps> = (props) => {
    return (
        <>
            <Header />
            <div className="wrapper-child window">
                {props.children}
            </div>
        </>
    )
}