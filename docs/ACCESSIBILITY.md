# Checklist de acessibilidade

A versão IV foi preparada para avaliação com base nos princípios da WCAG 2.1 AA.

- [x] HTML semântico com `header`, `nav`, `main`, `section`, `article` e `footer`.
- [x] Link de salto para o conteúdo principal.
- [x] Foco visível com `:focus-visible`.
- [x] Navegação por teclado nos links, botões e formulários.
- [x] `aria-label`, `aria-current`, `aria-expanded`, `aria-describedby` e `aria-invalid` nos pontos necessários.
- [x] Mensagens de validação associadas aos campos.
- [x] Modal com título acessível e foco inicial no primeiro campo.
- [x] `alt` descritivo para a imagem principal e imagens decorativas com `alt=""`.
- [x] Modo escuro e alto contraste.
- [x] Respeito a `prefers-reduced-motion`.
- [x] Imagens SVG responsivas, com `loading="lazy"` nas imagens não críticas.

## Validação manual recomendada
1. Navegar somente com `Tab`, `Shift + Tab`, `Enter` e `Esc`.
2. Testar a aplicação com NVDA ou outro leitor de tela.
3. Verificar contraste no WebAIM Contrast Checker ou Lighthouse.
4. Testar zoom de até 200% e diferentes larguras de viewport.
