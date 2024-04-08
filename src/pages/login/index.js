import "./index.css";
import { useState } from "react"
import Swal from "sweetalert2";
import usuarioService from "../../services/usuario-service";
import { useLocation } from "react-router-dom";
import imagem from "./Logo.jpeg";


function mostrarLoading() {
    // Tenho que capturar o campo de loading e mostrar ele
    const divLoading = document.getElementById("loading");
    divLoading.style.display = "block";
    // pegar o emento caixa de login e esconder ela.
    const divBoxLogin = document.querySelector('tela');
    divBoxLogin.style.display = "none";
}

function Login() {

    const [email, setEmail] = useState("admin@admin.com");
    const [senha, setSenha] = useState("123456");
    // const navigate = useLocation();

    const autenticar = () => {
        if (!email || !senha) {
            Swal.fire({
                icon: 'error',
                text: "Os campos de e-mail e senha são obrigatórios. Verifique!",
            });
        }

        // Aqui tenho que me comunicar com o Backend
        usuarioService.autenticar(email, senha)
            .then(response => {
                //Aqui fazer alguma coisa se realmente conseguir autenticar....
                usuarioService.salvarToken(response.data.token);
                usuarioService.salvarUsuario(response.data.usuario);
                setTimeout(() => {
                
                    window.location = "/";
                }, 1);

                mostrarLoading();
                // navigate ("/");

            })
            .catch(erro => {
                // Fazer alguma coisa em caso de erro

            })
    };
    return (

        <div className="caixa-login" id="tela" >

            {/* Titulo da tela de login  */}
            < div className="titulo-login" >
                <h1> <img src={imagem} width={350} height={200}></img></h1>
            </div >

            {/*Grupo do email*/}
            < div className="grupo" >
                <label for="email">E-mail:</label> <br />
                <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Digite seu e-mail" />
            </div >

            {/*Grupo do senha*/}
            < div className="grupo" >
                <label for="senha">Senha:</label> <br />
                <input id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Digite sua senha" />
            </div >

            {/*Link para recuperar a senha*/}
            < div className="esqueci-minha-senha" >
                <a href="#">Esqueci minha senha</a>
            </div >

            {/*Botão de entrar*/}
            < button id="btn-entrar" onClick={autenticar} > Entrar</button >



        </div >

    )

}
export default Login;