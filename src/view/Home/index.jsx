import { Container } from "react-bootstrap";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import TimerRange from "../../components/TimerRange";

export default function Home() {
    return(
        <Container>
            <Navbar/>
            <TimerRange/>
            <Menu/>
        </Container>
    )
}