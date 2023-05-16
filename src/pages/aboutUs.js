import { Container} from "react-bootstrap"
import DetailAbout from "./DetailAbout"

export default function NicoGanteng() {
    return (
        <Container className="text-center">
            <p className="h1">About US</p>
            <p>
                Ini saya nico ganteng
            </p>
            <DetailAbout  total={10} />
        </Container>
    )
}