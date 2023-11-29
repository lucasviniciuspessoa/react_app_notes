import { Container, Form } from "./styles";
import { Header} from '../../Components/Header'
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
export function New() {

    return (
        <Container>
            <Header/>

            <main>
                <Form>
                  <header>
                  <h1>Criar nota</h1>
                    <a href="/">Voltar</a>
                  </header>
                  <Input placeholder="Título"/>
                  <TextArea placeholder=""Observações/>
                </Form>
            </main>
        </Container>
    )
}