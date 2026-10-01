# ONG Solaris — Experiência Prática IV

Projeto acadêmico da disciplina de Desenvolvimento Front-end, evoluído a partir da versão JavaScript da Experiência Prática III. Esta versão consolida versionamento, acessibilidade, otimização e preparação para produção.

## 1. Visão geral

A aplicação é uma SPA da ONG Solaris com navegação por hash, renderização dinâmica do DOM, formulários, validação, `localStorage`, componentes Bootstrap e módulos ES6. Nesta etapa foram acrescentados recursos de acessibilidade WCAG 2.1 AA, modos de cor, preparação de build e deploy contínuo.

## 2. Tecnologias utilizadas

- HTML5 semântico e atributos WAI-ARIA;
- CSS3 responsivo, `:focus-visible`, `prefers-reduced-motion` e variáveis de tema;
- JavaScript ES Modules, DOM, eventos e Web Storage;
- Bootstrap 5.3 via CDN;
- Vite para desenvolvimento e build de produção;
- Git e GitHub para versionamento;
- GitHub Actions + GitHub Pages para CI/CD e publicação.

## 3. Estrutura do projeto

```text
index.html
css/style.css
imagens/*.svg
js/main.js
js/modules/
├── accessibility.js
├── components.js
├── events.js
├── forms.js
├── router.js
└── storage.js
package.json
vite.config.js
.github/
├── ISSUE_TEMPLATE/
├── PULL_REQUEST_TEMPLATE.md
└── workflows/deploy.yml
docs/
├── ACCESSIBILITY.md
└── GIT-FLOW.md
CHANGELOG.md
```

## 4. Instalação e execução local

Pré-requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local, normalmente `http://localhost:5173/`.

Para testar a versão de produção:

```bash
npm run build
npm run preview
```

A build é gerada na pasta `dist/` com minificação e sem source maps.

## 5. Versionamento e GitFlow

A estratégia adotada é:

- `main`: versão estável publicada;
- `develop`: integração das funcionalidades;
- `feature/*`: desenvolvimento de cada melhoria;
- `hotfix/*`: correções urgentes de produção.

As mensagens seguem Conventional Commits, por exemplo `feat: adiciona modo de alto contraste`, `a11y: melhora navegação por teclado`, `perf: otimiza carregamento de imagens` e `build: configura deploy no GitHub Pages`.

Consulte `docs/GIT-FLOW.md` para o fluxo completo e para a estratégia de releases.

## 6. Issues, milestones e Pull Requests

Mesmo em desenvolvimento individual, a organização deve reproduzir um fluxo colaborativo. Para esta etapa, recomenda-se o milestone **Experiência Prática IV — Produção**, com pelo menos as issues **Acessibilidade WCAG**, **Otimização e build** e **Deploy GitHub Pages**. Cada feature deve ser desenvolvida em branch própria e integrada por Pull Request, usando o template disponível em `.github/PULL_REQUEST_TEMPLATE.md`.

## 7. Acessibilidade

Foram implementados:

- landmarks semânticos (`header`, `nav`, `main`, `section`, `article`, `footer`);
- link de salto para o conteúdo principal;
- foco visível e navegação por teclado;
- `aria-current`, `aria-label`, `aria-expanded`, `aria-describedby` e `aria-invalid` onde necessários;
- mensagens de erro associadas aos respectivos campos;
- modal com título acessível e foco inicial no primeiro campo;
- imagens decorativas com `alt=""` e imagem principal com descrição textual;
- modo escuro e alto contraste;
- suporte a `prefers-reduced-motion`.

A paleta principal foi ajustada para atender ao contraste de texto normal. Exemplos verificados por cálculo de contraste: `#06745f` sobre `#ffffff` = **5,72:1**; `#173d40` sobre `#ffffff` = **11,81:1**; `#4bd0ae` sobre `#0d2021` = **8,78:1**; `#004b3f` sobre `#ffffff` = **10,10:1**.

O checklist de testes está em `docs/ACCESSIBILITY.md`. Para a entrega acadêmica, recomenda-se registrar também evidências de teste com teclado, leitor de tela e ferramenta automatizada como Lighthouse ou WAVE.

## 8. Otimização de imagens

As imagens foram mantidas em SVG por serem ilustrações vetoriais, escaláveis e leves. Os nove arquivos SVG do projeto totalizam aproximadamente **6,5 KB**. A imagem principal recebe `fetchpriority="high"`; as imagens não críticas usam `loading="lazy"` e `decoding="async"`.

Não foi necessária conversão para WebP porque os ativos já são vetoriais e apresentam tamanho muito reduzido.

## 9. Build e minificação

O projeto utiliza Vite configurado em `vite.config.js`. O build aplica minificação de JavaScript e CSS, remove source maps da entrega e gera os arquivos em `dist/`.

Uma estimativa simples sobre os arquivos-fonte selecionados indica redução aproximada de **11,6%** apenas com remoção de espaços/comentários. O percentual final da build deve ser obtido após `npm run build`, pois o Vite também realiza processamento e empacotamento dos módulos.

## 10. Deploy e CI/CD

O arquivo `.github/workflows/deploy.yml` configura o fluxo de integração e entrega contínuas:

1. checkout do repositório;
2. configuração do Node.js;
3. instalação das dependências;
4. execução de `npm run build`;
5. envio de `dist/` como artefato;
6. publicação pelo GitHub Pages.

No repositório GitHub, o Pages deve utilizar **GitHub Actions** como fonte de publicação. Cada push em `main` dispara uma nova build e publicação.

## 11. Releases

A estratégia de versionamento semântico utiliza:

- `v1.0.0`: consolidação da Experiência Prática IV;
- `v1.1.0`: novas funcionalidades ou melhorias compatíveis;
- `v1.1.1`: correções pontuais sem alteração de funcionalidade pública.

O histórico sugerido está em `CHANGELOG.md`.

## 12. Licença e finalidade

Projeto acadêmico fictício desenvolvido para fins educacionais.
