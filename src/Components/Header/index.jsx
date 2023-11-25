import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/lucasvpessoafranca.png" alt="" />
        <div>
          <span>Bem-vindo</span>
          <strong>Lucas Vinícius</strong>
        </div>
      </Profile>
    </Container>
  );
}
