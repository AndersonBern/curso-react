const arr = [1, 2, 3, 4, 5];

const itemLista = arr.map(
    (numero) => 
        <li key={numero.toString()}> {numero} </li>
);

function App() {
    return (
        <ul>{itemLista}</ul>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);