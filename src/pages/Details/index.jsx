import { Container, Links, Content } from "./styles";

import {Header} from "../../Components/Header/index"
import { Button } from "../../Components/Button";
import { Section } from "../../Components/Section";
import { Tag } from "../../Components/Tag";
import { ButtonText } from "../../Components/ButtonText";


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quam
            quasi veritatis? Tenetur voluptate recusandae itaque non in fuga,
            debitis saepe ipsa quae sit magni nemo consequatur! Cupiditate, fuga
            blanditiis?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
