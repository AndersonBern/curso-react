/*function Destaque(props) {
    return (
        <div class="p-5 mb-4 bg-body-tertiary rounded-3"> <div class="container-fluid py-5"> <h1 class="display-5 fw-bold">Custom jumbotron</h1> <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p> <button class="btn btn-primary btn-lg" type="button">Example button</button> </div> </div>
    )
};*/

class Destaque extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Bernardo'
        }
    }

    trocaNome = ()=> {
        this.setState((prevState)=> {
            if(prevState.nome == 'Bernardo'){
                return { nome: 'Anderson'}
            }
            return { nome : 'Bernardo'}
        })
    }

    render() {
        return (
            <div class="p-5 mb-4 bg-body-tertiary rounded-3"> <div class="container-fluid py-5"> <h1 class="display-5 fw-bold">{this.state.nome}</h1> <p class="col-md-8 fs-4">Aprendendo State(Estado).</p> <button onClick={this.trocaNome} class="btn btn-primary btn-lg" type="button">Trocar nome</button> </div> </div>
        )
    }
}

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    add = ()=> {
        this.setState((prevState)=> {
            return { count: prevState.count + 1 }
        })
    }
    sub = ()=> {
        this.setState((prevState)=> {
            if(prevState.count == 0) {
                return
            }
            return { count: prevState.count - 1 }
        })
    }

    render() {
        return (
            <div class="p-5 mb-4 bg-body-tertiary rounded-3"> 
                <div class="container-fluid py-5"> 
                    <h1 class="display-5 fw-bold">Contador: {this.state.count}</h1> <p class="col-md-8 fs-4">Aprendendo State(Estado).</p> 
               
                    <div class='row gap-2' >
                        <button onClick={this.sub} class="col btn btn-danger btn-lg" type="button">Sub -</button> 
                    
                        <button onClick={this.add} class="col btn btn-success btn-lg" type="button">Add +</button>
                    
                    </div> 
                </div>

            </div>
            
        )
    }
}

function App() {
    return (
        <main>
            <div class='container py-4'>
                <Contador/>
            </div>
        </main>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);