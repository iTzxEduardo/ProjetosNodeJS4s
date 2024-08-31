import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditarLivro() {
    const { id } = useParams();
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [ano, setAno] = useState('');
    const [genero, setGenero] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/livros/${id}`)
            .then(response => {
                setTitulo(response.data.titulo);
                setAutor(response.data.autor);
                setAno(response.data.ano);
                setGenero(response.data.genero);
            })
            .catch(error => console.error('Erro ao buscar o livro:', error));
    }, [id]);

    const atualizarLivro = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/livros/${id}`, { titulo, autor, ano, genero })
            .then(() => navigate('/'))
            .catch(error => console.error('Erro ao atualizar livro:', error));
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
        backgroundColor: '#28a745',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#218838',
    };

    return (
        <form onSubmit={atualizarLivro} style={formStyle}>
            <h1 style={{ color: '#333' }}>Editar Livro</h1>
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
                Atualizar
            </button>
        </form>
    );
}

export default EditarLivro;
