import { ServerWindow } from "../../components/ServerWindow";
import { Wrapper } from "../../components/Wrapper";


export const Home: React.FC = () => {
    return (
        <Wrapper>
            <ServerWindow id={1} usage={9}/>
        </Wrapper>
    );
}