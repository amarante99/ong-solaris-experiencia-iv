import { getDiagnoses, getVolunteer } from './storage.js';

const projects = [
  { title: 'Educação', image: './educacao.svg', text: 'Ações de apoio à aprendizagem e ampliação de oportunidades educacionais.' },
  { title: 'Saúde', image: './saude.svg', text: 'Iniciativas de orientação, prevenção e acesso a informações de saúde.' },
  { title: 'Inclusão Social', image: './inclusao.svg', text: 'Projetos que estimulam participação, autonomia e inclusão na comunidade.' }
];

export function renderInicio() {
  return `
    <section class="hero">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-7">
            <span class="badge text-bg-light mb-3">Experiência Prática IV</span>
            <h1>Juntos por um futuro melhor</h1>
            <p>Uma versão interativa e acessível da ONG Solaris, preparada para demonstrar JavaScript, acessibilidade, otimização e publicação.</p>
            <div class="d-flex flex-wrap gap-2 mt-4">
              <a href="#/projetos" data-route="/projetos" class="btn btn-light btn-lg">Conheça os projetos</a>
              <a href="#/voluntariado" data-route="/voluntariado" class="btn btn-outline-light btn-lg">Quero participar</a>
            </div>
          </div>
          <div class="col-lg-5 text-center">
            <img class="hero-visual" src="./hero.svg" width="800" height="500" alt="Ilustração representando cuidado e transformação social" fetchpriority="high" decoding="async">
          </div>
        </div>
      </div>
    </section>
    <section class="page" aria-labelledby="destaques-title">
      <div class="container">
        <h2 class="visually-hidden" id="destaques-title">Destaques da aplicação</h2>
        <div class="row g-4">
          <div class="col-md-4"><div class="card-solaris p-4"><h3 class="h4">Acessibilidade</h3><p class="mb-0">Navegação por teclado, foco visível, semântica e opções de contraste.</p></div></div>
          <div class="col-md-4"><div class="card-solaris p-4"><h3 class="h4">Interatividade</h3><p class="mb-0">SPA, eventos, formulários e componentes gerados pelo JavaScript.</p></div></div>
          <div class="col-md-4"><div class="card-solaris p-4"><h3 class="h4">Produção</h3><p class="mb-0">Projeto preparado para build, minificação e deploy automatizado.</p></div></div>
        </div>
      </div>
    </section>`;
}

export function renderProjetos() {
  return `
    <section class="page" aria-labelledby="projetos-title">
      <div class="container">
        <h1 class="section-title" id="projetos-title">Projetos da Solaris</h1>
        <p class="section-lead mb-5">Conheça algumas frentes de atuação da organização.</p>
        <div class="row g-4">
          ${projects.map(project => `
            <div class="col-md-6 col-lg-4">
              <article class="card-solaris p-4">
                <img class="icon-box mb-3" src="${project.image}" alt="" loading="lazy" decoding="async">
                <h2 class="h4">${project.title}</h2>
                <p class="mb-0">${project.text}</p>
              </article>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
}

export function renderDiagnostico() {
  const diagnoses = getDiagnoses();
  return `
    <section class="page" aria-labelledby="diagnostico-title">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <div>
            <h1 class="section-title mb-1" id="diagnostico-title">Diagnóstico comunitário</h1>
            <p class="section-lead mb-0">Registre problemas observados e possíveis caminhos de solução.</p>
          </div>
          <button class="btn btn-solaris" type="button" data-bs-toggle="modal" data-bs-target="#diagnosisModal">Adicionar problema</button>
        </div>
        <div id="diagnosisList" aria-live="polite">
          ${diagnoses.length ? diagnoses.map(renderDiagnosisCard).join('') : '<div class="empty-state">Nenhum diagnóstico registrado ainda. Use o botão acima para adicionar o primeiro.</div>'}
        </div>
      </div>
    </section>
    ${diagnosisModal()}`;
}

function renderDiagnosisCard(item) {
  return `
    <article class="card-solaris problem-card p-4 mb-3" data-diagnosis-id="${item.id}">
      <div class="d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <span class="badge mb-2">Diagnóstico registrado</span>
          <h2 class="h4">${escapeHtml(item.problem)}</h2>
          <p><strong>Técnica:</strong> ${escapeHtml(item.technique)}</p>
          <p class="mb-0"><strong>Solução:</strong> ${escapeHtml(item.solution)}</p>
        </div>
        <button class="btn btn-outline-danger align-self-start" type="button" data-action="delete-diagnosis" data-id="${item.id}">Excluir</button>
      </div>
    </article>`;
}

function diagnosisModal() {
  return `
    <div class="modal fade" id="diagnosisModal" tabindex="-1" aria-labelledby="diagnosisModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title fs-3" id="diagnosisModalLabel">Adicionar principal problema</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <form id="diagnosisForm" novalidate aria-labelledby="diagnosisModalLabel">
            <div class="modal-body p-4">
              <fieldset class="border-0 p-0 m-0">
                <legend class="visually-hidden">Dados do diagnóstico</legend>
                <div class="mb-3">
                  <label class="form-label" for="problem">Problema</label>
                  <textarea class="form-control" id="problem" name="problem" maxlength="200" rows="2" required aria-describedby="problem-error" aria-invalid="false"></textarea>
                  <div class="field-feedback" id="problem-error" data-error-for="problem" role="alert"></div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="technique">Técnica de diagnóstico</label>
                  <textarea class="form-control" id="technique" name="technique" maxlength="200" rows="2" required aria-describedby="technique-error" aria-invalid="false"></textarea>
                  <div class="field-feedback" id="technique-error" data-error-for="technique" role="alert"></div>
                </div>
                <div class="mb-2">
                  <label class="form-label" for="solution">Solução</label>
                  <textarea class="form-control" id="solution" name="solution" maxlength="500" rows="4" required aria-describedby="solution-error" aria-invalid="false"></textarea>
                  <div class="field-feedback" id="solution-error" data-error-for="solution" role="alert"></div>
                </div>
              </fieldset>
            </div>
            <div class="modal-footer justify-content-end gap-2">
              <button type="button" class="btn btn-link text-decoration-none" data-bs-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-solaris">Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </div>`;
}

export function renderVoluntariado() {
  const volunteer = getVolunteer();
  return `
    <section class="page" aria-labelledby="voluntariado-title">
      <div class="container">
        <div class="row g-5 align-items-start">
          <div class="col-lg-5">
            <img class="icon-box mb-3" src="./imagens/voluntariado.svg" alt="" loading="lazy" decoding="async">
            <h1 class="section-title" id="voluntariado-title">Voluntariado</h1>
            <p class="section-lead">Cadastre seu interesse em participar das ações da Solaris. Os dados ficam armazenados localmente nesta aplicação demonstrativa.</p>
            ${volunteer ? `<div class="alert alert-solaris"><strong>Cadastro recuperado.</strong><br>Olá, ${escapeHtml(volunteer.name)}! Seus dados anteriores foram encontrados no navegador.</div>` : ''}
          </div>
          <div class="col-lg-7">
            <form id="volunteerForm" class="card-solaris p-4" novalidate aria-labelledby="volunteer-title">
              <fieldset class="border-0 p-0 m-0">
                <legend class="visually-hidden">Dados do voluntário</legend>
                <h2 class="h4 mb-4" id="volunteer-title">Quero ser voluntário</h2>
                ${field('name', 'Nome completo', 'text', volunteer?.name || '', 'Informe seu nome completo.')}
                ${field('email', 'E-mail', 'email', volunteer?.email || '', 'Informe um e-mail válido.')}
                ${field('phone', 'Telefone', 'tel', volunteer?.phone || '', 'Informe um telefone com DDD.')}
                <div class="mb-3">
                  <label class="form-label" for="area">Área de interesse</label>
                  <select class="form-select" id="area" name="area" required aria-describedby="area-error" aria-invalid="false">
                    <option value="">Selecione uma área</option>
                    ${['Educação','Saúde','Inclusão Social','Comunicação'].map(x => `<option ${volunteer?.area === x ? 'selected' : ''}>${x}</option>`).join('')}
                  </select>
                  <div class="field-feedback" id="area-error" data-error-for="area" role="alert"></div>
                </div>
                <button class="btn btn-solaris" type="submit">Salvar interesse</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>`;
}

function field(name, label, type, value, error) {
  return `<div class="mb-3"><label class="form-label" for="${name}">${label}</label><input class="form-control" id="${name}" name="${name}" type="${type}" value="${escapeHtml(value)}" required aria-describedby="${name}-error" aria-invalid="false"><div class="field-feedback" id="${name}-error" data-error-for="${name}" data-default-error="${error}" role="alert"></div></div>`;
}

export function renderContato() {
  return `
    <section class="page" aria-labelledby="contact-title">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-7">
            <h1 class="section-title" id="contact-title">Entre em contato</h1>
            <p class="section-lead">Use o formulário para enviar uma mensagem demonstrativa. A aplicação valida os campos antes de concluir o processo.</p>
            <form id="contactForm" class="card-solaris p-4 mt-4" novalidate aria-labelledby="contact-title">
              <fieldset class="border-0 p-0 m-0">
                <legend class="visually-hidden">Formulário de contato</legend>
                ${field('contactName','Nome','text','','Informe seu nome.')}
                ${field('contactEmail','E-mail','email','','Informe um e-mail válido.')}
                <div class="mb-3">
                  <label class="form-label" for="message">Mensagem</label>
                  <textarea class="form-control" id="message" name="message" rows="5" minlength="10" maxlength="500" required aria-describedby="message-error" aria-invalid="false"></textarea>
                  <div class="field-feedback" id="message-error" data-error-for="message" role="alert"></div>
                </div>
                <button class="btn btn-solaris" type="submit">Enviar mensagem</button>
              </fieldset>
            </form>
          </div>
          <div class="col-lg-5">
            <div class="card-solaris p-4 h-100">
              <img class="icon-box mb-3" src="./imagens/sede.svg" alt="" loading="lazy" decoding="async">
              <h2 class="h4">Atendimento</h2>
              <p>Este projeto acadêmico simula uma interface institucional para a ONG Solaris.</p>
              <div class="alert alert-solaris mb-0">As mensagens são tratadas apenas no navegador e não são enviadas para um servidor.</div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char]));
}
