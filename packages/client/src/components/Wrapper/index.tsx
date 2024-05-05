import { Header } from "../Header";
import "98.css";
import "./Wrapper.scss";
import { Footer } from "../Footer";

interface IProps {
    children: React.ReactNode;
}

export const Wrapper: React.FC<IProps> = (props) => {
    return (
        <>
            <Header />
            <main className="wrapper-child">
                {props.children}
            </main>
            <Footer />
        </>
    )
}