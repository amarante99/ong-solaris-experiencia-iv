# Testes de Acessibilidade

## Navegação por teclado

A navegação principal, formulários, botões e componentes interativos devem permitir utilização pelo teclado, mantendo uma ordem lógica de foco.

## Foco visível

Os elementos interativos apresentam indicação visual de foco por meio de `:focus-visible`, facilitando a identificação do elemento atualmente selecionado.

## Link de salto

A aplicação possui um link de salto que permite ao usuário acessar diretamente o conteúdo principal, evitando a necessidade de percorrer repetidamente os elementos de navegação.

## Formulários

Os campos utilizam atributos como `aria-invalid` e `aria-describedby` para relacionar mensagens de validação aos respectivos controles.

## Contraste e modos de visualização

A aplicação possui modo escuro e alto contraste, permitindo ajustar a apresentação visual conforme a necessidade do usuário.

## Redução de movimento

A interface considera a preferência `prefers-reduced-motion`, reduzindo animações quando essa configuração está habilitada no sistema.
