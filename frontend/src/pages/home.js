import React from "react";
import { OptForm, Feature } from "../components";
import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Filmes, programas de TV e muito mais.</Feature.Title>
          <Feature.SubTitle>
            Assista em qualquer lugar. Cancelar a qualquer momento.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Endereço de email" />
            <OptForm.Button>Tente agora</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Pronto para assistir? Insira seu email para criar ou reiniciar sua
              associação.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
