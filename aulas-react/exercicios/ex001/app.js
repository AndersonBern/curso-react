/*function Destaque(props) {
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3"> <div className="container-fluid py-5"> <h1 className="display-5 fw-bold">Custom jumbotron</h1> <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p> <button className="btn btn-primary btn-lg" type="button">Example button</button> </div> </div>
    )
};*/

// className Destaque extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             nome: 'Bernardo'
//         }
//     }

//     trocaNome = ()=> {
//         this.setState((prevState)=> {
//             if(prevState.nome == 'Bernardo'){
//                 return { nome: 'Anderson'}
//             }
//             return { nome : 'Bernardo'}
//         })
//     }

//     render() {
//         return (
//             <div className="p-5 mb-4 bg-body-tertiary rounded-3"> <div className="container-fluid py-5"> <h1 className="display-5 fw-bold">{this.state.nome}</h1> <p className="col-md-8 fs-4">Aprendendo State(Estado).</p> <button onClick={this.trocaNome} className="btn btn-primary btn-lg" type="button">Trocar nome</button> </div> </div>
//         )
//     }
// }

// className Contador extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }

//     add = ()=> {
//         this.setState((prevState)=> {
//             return { count: prevState.count + 1 }
//         })
//     }
//     sub = ()=> {
//         this.setState((prevState)=> {
//             if(prevState.count == 0) {
//                 return
//             }
//             return { count: prevState.count - 1 }
//         })
//     }

//     render() {
//         return (
//             <div className="p-5 mb-4 bg-body-tertiary rounded-3"> 
//                 <div className="container-fluid py-5"> 
//                     <h1 className="display-5 fw-bold">Contador: {this.state.count}</h1> <p className="col-md-8 fs-4">Aprendendo State(Estado).</p> 
               
//                     <div className='row gap-2' >
//                         <button onClick={this.sub} className="col btn btn-danger btn-lg" type="button">Sub -</button> 
                    
//                         <button onClick={this.add} className="col btn btn-success btn-lg" type="button">Add +</button>
                    
//                     </div> 
//                 </div>

//             </div>
            
//         )
//     }
// }

function Explodiu(props) {
    return (
        <h1 className="text-danger">EXPLODIU!</h1>
    )
};

function Contador(props) {
    //Criando o ESTADO
    const [count, setCount] = React.useState(0);
    const [nome, setNome] = React.useState(btnNome);

    //Efeito Colateral depois de RENDERIZADO
    React.useEffect(()=> {
        console.log('Componente Renderizado!')
    });

    //Efeito Colateral depois de ALTERAR o ESTADO count
    React.useEffect(()=> {
        document.title = 'Contador: ' + count
        console.log('Estado COUNT Alterado!')

        if(count < 1) [
            setNome(false)
        ]
        if(count >= 1) {
            setNome('Anderson')
        }
        if(count > 9) {
            setNome(false)
        }

    }, [count])
    //Efeito Colateral depois de ALTERAR o ESTADO nome
    React.useEffect(()=> {
        document.title = 'Contador: ' + count
        console.log('Estado NOME Alterado!')
    }, [nome])
    //Efeito Colateral apenas na CRIAÇÃO do componente
    React.useEffect(()=> {
        console.log('Estado NOME Alterado!')
    }, [])

    function add() {
         if(count == 10) {
            return count;
        }
        setCount( count + 1);
    }
    function sub() {
        if(count == 0) {
            return count;
        }
        setCount( count - 1 );
    }

    function trocaNome() {
        if(nome == 'Anderson') {
            setNome(nome + ' Bernardo');
        }
        else{
            setNome('Anderson');
        }
         
    }

    const btnNome = props.btnNome;

    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">                  
            <div className="container-fluid py-5"> 
                {
                    count >= 10 ? <Explodiu/> : <h1 className="display-5 fw-bold">Contador: {count} </h1> 
                }
                <p className="col-md-8 fs-4">Aprendendo State(Estado).</p> 
                                
                <div className='row gap-2'>                         
                    <button onClick={sub} className="col btn btn-danger btn-lg" type="button">Sub -</button> 
                    
                    <button onClick={add} className="col btn btn-success btn-lg" type="button">Add +</button>
                </div>
                {
                    nome && 
                    <div className='row gap-2'>
                        <h1 className="display-5 fw-bold mt-4">Nome: {nome} </h1> 
                        <button onClick={trocaNome} className="col btn btn-primary btn-lg" type="button">Trocar Nome</button>
                    </div>
                }
                
            </div>
        </div>
    )
}

function App() {
    return (
        <main>
            <div className='container py-4'>
                <Contador btnNome = {false}/>
            </div>
        </main>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);