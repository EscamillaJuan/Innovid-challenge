import { ServerWindow } from "../../components/ServerWindow";
import { Wrapper } from "../../components/Wrapper";
import "./Home.scss";

const servers = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
]
export const Home: React.FC = () => {
    return (
        <Wrapper>
            <div className="container">
                {servers.map((v, k) => (
                    <ServerWindow id={v.id} key={k} />
                ))}
            </div>
        </Wrapper>
    );
}