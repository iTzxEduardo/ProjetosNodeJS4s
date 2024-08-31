import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NovoLivro() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [ano, setAno] = useState('');
    const [genero, setGenero] = useState('');
    const navigate = useNavigate();

    const adicionarLivro = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/livros', { titulo, autor, ano, genero })
            .then(() => navigate('/'))
            .catch(error => console.error('Erro ao adicionar livro:', error));
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '16px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    return (
        <form onSubmit={adicionarLivro} style={formStyle}>
            <h1 style={{ color: '#333' }}>Novo Livro</h1>
            <input
                type="text"
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
                placeholder="Título"
                required
                style={inputStyle}
            />
            <input
                type="text"
                value={autor}
                onChange={e => setAutor(e.target.value)}
                placeholder="Autor"
                required
                style={inputStyle}
            />
            <input
                type="number"
                value={ano}
                onChange={e => setAno(e.target.value)}
                placeholder="Ano"
                required
                style={inputStyle}
            />
            <input
                type="text"
                value={genero}
                onChange={e => setGenero(e.target.value)}
                placeholder="Gênero"
                required
                style={inputStyle}
            />
            <button
                type="submit"
                style={buttonStyle}
                onMouseOver={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
            >
                Adicionar
            </button>
        </form>
    );
}

export default NovoLivro;
