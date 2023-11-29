import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { NoteItem } from '../../Components/NoteItem'
import { Section } from '../../Components/Section'
import {TextArea} from '../../Components/TextArea'
import {Button} from '../../Components/Button'

import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />
          <TextArea placeholder="Observações" />

          <Section title="links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>
          <Section title="Marcadores">
          <div className='tags'>
          <NoteItem value="react" />
            <NoteItem isNew placeholder="Nova tag" />
          </div>
          </Section>
          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}