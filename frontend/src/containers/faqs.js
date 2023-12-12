import React from "react";
import { Accordion } from "../components";
import faqsData from "../fixtures/faqs.json";
import { OptForm } from "../components";


export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>
                Perguntas Frequentes
            </Accordion.Title>
            {
                faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>
                            {item.header}
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.body}
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
            <Accordion.Item />
            <OptForm>
                <OptForm.Input placeholder="Endereço de email" />
                <OptForm.Button>
                    Tente agora
                </OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>
                    Pronto para assistir? Insira seu email para criar ou reiniciar sua associação.
                </OptForm.Text>
            </OptForm>
        </Accordion>
    );
}