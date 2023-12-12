import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Perguntas? Entre em contato conosco.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Relações com Investidores</Footer.Link>
          <Footer.Link href="#">Formas de Assistir</Footer.Link>
          <Footer.Link href="#">Informações Corporativas</Footer.Link>
          <Footer.Link href="#">Originais Zomify</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Central de Ajuda</Footer.Link>
          <Footer.Link href="#">Vagas de Emprego</Footer.Link>
          <Footer.Link href="#">Termos de Uso</Footer.Link>
          <Footer.Link href="#">Entre em Contato</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Conta</Footer.Link>
          <Footer.Link href="#">Resgatar Cartões Presente</Footer.Link>
          <Footer.Link href="#">Privacidade</Footer.Link>
          <Footer.Link href="#">Teste de Velocidade</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Centro de Mídia</Footer.Link>
          <Footer.Link href="#">Comprar Cartões Presente</Footer.Link>
          <Footer.Link href="#">Preferências de Cookies</Footer.Link>
          <Footer.Link href="#">Avisos Legais</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Zomify &copy; Carlos Moyses - 2023</Footer.Text>
    </Footer>
  );
}
