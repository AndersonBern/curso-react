function App() {
    const usuarios = [
        {id: 1, nome: 'Anderson', idade: 25},
        {id: 2, nome: 'Bernardo', idade: 27},
        {id: 3, nome: 'Maria', idade: 21}
    ]
    return (
        <ul><Item lista={usuarios}/></ul>
    )
};

function Item(props) {
    const usuarios = props.lista
    return (
        usuarios.map(
            usuario => 
                <li key={usuario.id.toString()}> 
                    Nome: {usuario.nome} <br/>
                    Idade: {usuario.idade} <br/> <br/> 
                </li>
        )
    )
};


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);