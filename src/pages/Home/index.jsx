import {FiPlus, FiSearch} from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { Input } from '../../Components/Input';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>

        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>
      <Content></Content>

      <NewNote>
        <FiPlus/>
        Criar nota
      </NewNote>
    </Container>
  );
}