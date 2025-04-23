import React, { useState } from 'react';
import './App.css';
import { MdDelete } from "react-icons/md";

function App() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');
    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== '') {
            setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa }]);
            setNovaTarefa('');
        }
    };
    const removerTarefa = (id) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    };
    return (
        <div className="container-principal">
            <h1 className='titulo-principal'>Lista de Tarefas</h1>

            <div className='container-lista-input'>
                <input
                    className='lista-input'
                    type="text"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    placeholder="Digite uma tarefa..."
                />
                
                <button className='btn-adicionar-tarefa' onClick={adicionarTarefa}>
                    Adicionar
                </button>
            </div>

            <ul className='lista-tarefas'>
                {tarefas.map((tarefa) => (
                    <li className='lista-tarefas__item' key={tarefa.id}>
                        {tarefa.texto}
                        <button className='btn-remover-tarefa' onClick={() => removerTarefa(tarefa.id)}>
                            <MdDelete className='btn-remover-tarefa__icon' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App;
