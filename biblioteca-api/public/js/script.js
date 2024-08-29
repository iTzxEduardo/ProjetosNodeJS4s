// URL da API (substitua pela URL correta se necessário)
const apiUrl = 'http://localhost:3000/livros';

// Função para buscar os livros na API e renderizar na tabela
function buscarLivros() {
    fetch(apiUrl)
        .then(response => response.json()) // Converte a resposta para JSON
        .then(livros => {
            const tabelaCorpo = document.getElementById('livrosCorpo');
            tabelaCorpo.innerHTML = ''; // Limpa a tabela antes de renderizar

            // Itera sobre os livros e cria uma linha para cada um
            livros.forEach(livro => {
                const linha = document.createElement('tr');
               
                // Cria as células da linha
                const idCelula = document.createElement('td');
                idCelula.textContent = livro._id; // Ou livro.id_livro dependendo da estrutura

                const tituloCelula = document.createElement('td');
                tituloCelula.textContent = livro.titulo;

                const autorCelula = document.createElement('td');
                autorCelula.textContent = livro.autor;

                const anoCelula = document.createElement('td');
                anoCelula.textContent = livro.ano;

                const generoCelula = document.createElement('td');
                generoCelula.textContent = livro.genero;

                // Adicionar botões de ação na célula
                const acoesCelula = document.createElement('td');
                const updateButton = document.createElement('a');
                updateButton.textContent = 'Atualizar';
                updateButton.classList.add('btn-adicionar');
                updateButton.style.marginRight = '8px'; // Adiciona um espaço de 8px entre os botões
                updateButton.href = `update.html?id=${livro._id}`;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Deletar';
                deleteButton.classList.add('btn-deletar');
                deleteButton.onclick = () => deletarLivro(livro._id);

                acoesCelula.appendChild(updateButton);
                acoesCelula.appendChild(deleteButton);

                // Adiciona as células na linha
                linha.appendChild(idCelula);
                linha.appendChild(tituloCelula);
                linha.appendChild(autorCelula);
                linha.appendChild(anoCelula);
                linha.appendChild(generoCelula);
                linha.appendChild(acoesCelula); // ações adicionadas na linha

                // Adiciona a linha na tabela
                tabelaCorpo.appendChild(linha);
            });
        })
        .catch(error => console.error('Erro ao buscar livros:', error)); // Loga um erro em caso de falha
}

// Chama a função para buscar e renderizar os livros ao carregar a página
window.onload = buscarLivros;

// Método ADD ----------------------------------------------
// ----------------------------------------------------------

// Adiciona um listener ao formulário com o ID 'livroForm', que escuta o evento 'submit' (quando o formulário é enviado)
document.getElementById('livroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário, que é recarregar a página

    const id = new URLSearchParams(window.location.search).get('id');

    // Captura os valores dos campos do formulário
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    const genero = document.getElementById('genero').value;

    // Cria um objeto livro com os dados capturados do formulário
    const livro = { titulo, autor, ano, genero };

    if (id) {
        // Se há um 'id' na URL, isso indica que um livro existente está sendo atualizado
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(livro)
        })
        .then(() => {
            alert('Livro atualizado com sucesso!'); // Exibe uma notificação de sucesso
            window.location.href = 'index.html'; // Redireciona para a página 'index.html'
        })
        .catch(error => console.error('Erro ao atualizar livro:', error));
    } else {
        // Caso não haja um 'id' na URL, isso indica que um novo livro está sendo adicionado
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(livro)
        })
        .then(() => {
            alert('Livro adicionado com sucesso!'); // Exibe uma notificação de sucesso
            window.location.href = 'index.html'; // Redireciona para a página 'index.html'
        })
        .catch(error => console.error('Erro ao adicionar livro:', error));
    }
});

// Preenche o formulário de atualização com os dados do livro existente
if (window.location.pathname.includes('update.html')) {
    const id = new URLSearchParams(window.location.search).get('id');
    fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(livro => {
            document.getElementById('livroId').value = livro._id;
            document.getElementById('titulo').value = livro.titulo;
            document.getElementById('autor').value = livro.autor;
            document.getElementById('ano').value = livro.ano;
            document.getElementById('genero').value = livro.genero;
        })
        .catch(error => console.error('Erro ao buscar livro:', error));
}

// Função para deletar um livro
function deletarLivro(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        alert('Livro deletado com sucesso!'); // Exibe uma notificação de sucesso ao deletar
        buscarLivros();
    })
    .catch(error => console.error('Erro ao deletar livro:', error));
}
