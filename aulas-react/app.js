//JSX
/*const nome = 'Anderson Bernardo';
const user = {
    nome: 'Anderson',
    sobrenome: 'Bernardo'
};

function nomeCompleto(user) {
    return user.nome + ' ' + user.sobrenome;
};

const elemento = (
    <div>
        <h1 className="header">Olá, {nomeCompleto(user)}!</h1>
        <p>Isto é um paragrafo.</p>
    </div>
);*/

function BemVindo(props) {
    if(props.nome) {
        return <h1>Olá {props.nome}!</h1>
    }
    return <h1>Olá, Estranho!</h1>
    
};
function Conteudo(props) {
    return (
        <div>
            <h2>Subtitulo</h2>
            <p>blablablablablablablablablalbs</p>
        </div>
    );
};

function App() {
    return (
        <div>
            <BemVindo nome='Bernardo'/>
            <Conteudo/>
        </div>
    );
}

//Basico do REACT
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);