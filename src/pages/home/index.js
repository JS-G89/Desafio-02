import Cliente from "../../models/cliente";
import Clientes from "../clientes";
import imagem from "./Logo.jpeg";
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function Home() {
    return (
        <div className="conteudo">
            <h1>
                <img src={imagem} width={500} height={300}></img>
            </h1>
            <h2>Seja bem vindo!<br></br>
                 Você está no Controle de Estoque da Auto Peças.<br></br>
                 <a href="./clientes">
                 <button className="btn btn-outline-primary btn-sm mr-3"  >Clique Aqui!</button>
                 </a>
                 
            </h2>
        </div>
    )
}
