
import { useState } from "react";
import { Link } from "react-router-dom";
import { ContatoContainer } from "./contato";


export default function Contato() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        alert(`Olá, ${name}. Do email ${email}. Logo entraremos em contato!`)
    }

    return (
        <ContatoContainer>
            <h1>Fale conosco</h1>

            <form onSubmit={onSubmit}>
                <label>Nome</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                
                <button type="submit">Enviar</button>
                <Link to="/">Voltar a página principal</Link>
            </form>
        </ContatoContainer>
    );
}