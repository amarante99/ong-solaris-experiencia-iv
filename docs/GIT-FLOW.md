# Estratégia GitFlow — ONG Solaris

## Branches
- `main`: versão estável publicada em produção.
- `develop`: integração do desenvolvimento antes do lançamento.
- `feature/*`: novas funcionalidades ou melhorias.
- `hotfix/*`: correções urgentes da versão publicada.

## Fluxo individual
1. `main` recebe somente versões estáveis.
2. `develop` concentra a integração das funcionalidades.
3. Cada alteração começa em uma `feature/*` criada a partir de `develop`.
4. A funcionalidade é testada e submetida por Pull Request para `develop`.
5. Uma release é preparada a partir de `develop` e integrada em `main`.
6. Correções urgentes podem partir de `main` por meio de `hotfix/*`.

## Commits
Adotar Conventional Commits, no imperativo e com mensagem objetiva:
- `feat:` nova funcionalidade;
- `fix:` correção;
- `docs:` documentação;
- `refactor:` reorganização sem mudança funcional;
- `perf:` melhoria de desempenho;
- `a11y:` melhoria de acessibilidade;
- `build:` configuração de build/deploy.

## Releases
- `v1.0.0`: consolidação da versão acessível e preparada para produção.
- `v1.1.0`: melhoria funcional ou de acessibilidade sem quebra de compatibilidade.
- `v1.1.1`: correção pontual sem alteração de funcionalidade pública.
