const btnGerar = document.getElementById('btnGerar');
const quantidadeInput = document.getElementById('quantidade');
const formInstrumentos = document.getElementById('formInstrumentos');
const containerFormularios = document.getElementById('containerFormularios');
const btnMostrar = document.getElementById('btnMostrar');
const resultado = document.getElementById('resultado');

let quantidade = 0;

btnGerar.addEventListener('click', () => {
  quantidade = parseInt(quantidadeInput.value);

  if (!quantidade || quantidade < 1) {
    alert('Informe uma quantidade válida (1 ou mais).');
    return;
  }

  containerFormularios.innerHTML = ''; // limpa os formulários anteriores
  resultado.innerHTML = '';
  formInstrumentos.style.display = 'block';

  for(let i = 0; i < quantidade; i++) {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = `Instrumento ${i + 1}`;
    fieldset.appendChild(legend);

    const labelNome = document.createElement('label');
    labelNome.setAttribute('for', `nome-${i}`);
    labelNome.textContent = 'Nome:';
    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.id = `nome-${i}`;
    inputNome.name = `nome-${i}`;

    const labelTipo = document.createElement('label');
    labelTipo.setAttribute('for', `tipo-${i}`);
    labelTipo.textContent = 'Tipo (corda, sopro, percussão, etc):';
    const inputTipo = document.createElement('input');
    inputTipo.type = 'text';
    inputTipo.id = `tipo-${i}`;
    inputTipo.name = `tipo-${i}`;

    const labelOrigem = document.createElement('label');
    labelOrigem.setAttribute('for', `origem-${i}`);
    labelOrigem.textContent = 'Origem:';
    const inputOrigem = document.createElement('input');
    inputOrigem.type = 'text';
    inputOrigem.id = `origem-${i}`;
    inputOrigem.name = `origem-${i}`;

    fieldset.appendChild(labelNome);
    fieldset.appendChild(inputNome);
    fieldset.appendChild(labelTipo);
    fieldset.appendChild(inputTipo);
    fieldset.appendChild(labelOrigem);
    fieldset.appendChild(inputOrigem);

    containerFormularios.appendChild(fieldset);
  }
});

btnMostrar.addEventListener('click', () => {
  const instrumentos = [];

  for(let i = 0; i < quantidade; i++) {
    const nome = document.getElementById(`nome-${i}`).value.trim();
    const tipo = document.getElementById(`tipo-${i}`).value.trim();
    const origem = document.getElementById(`origem-${i}`).value.trim();

    if (!nome || !tipo || !origem) {
      alert(`Preencha todos os campos do instrumento ${i + 1}`);
      return;
    }

    instrumentos.push({ nome, tipo, origem });
  }

  let html = '<h2>Instrumentos Cadastrados</h2>';

  instrumentos.forEach((inst, i) => {
    html += `<p><strong>Instrumento ${i + 1}</strong><br>
             Nome: ${inst.nome}<br>
             Tipo: ${inst.tipo}<br>
             Origem: ${inst.origem}</p>`;
  });

  resultado.innerHTML = html;
});
