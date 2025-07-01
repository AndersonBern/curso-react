function FormReserva(props) {
    const [form, setForm] = React.useState({
        cliente: '',
        dia: '',
        horario: '',
        wifi: false,
        churrasqueira: false,
        piscina: false,
        obs: ''
    })

    const handleChange = (evento) => {
        const auxForm = { ...form };
        auxForm[evento.target.name] = 
            evento.target.type === 'checkbox' ? evento.target.checked : evento.target.value;
        setForm(auxForm);
    }

    const enviarForm = (envio) => {
        envio.preventDefault();

        console.log(form);

        console.log(form.cliente)
    }

    // React.useEffect(()=> {
    //     console.log(form)
    // }, [form])

    return (
        <div className="m-4">
            <h2 className="mb-3 text-center">Formulário</h2>
            <form onSubmit={enviarForm} className="p-4">

                <div className="mb-3">
                    <label htmlFor="nome" className="form-label fw-bold">Nome Completo</label>
                    <input onChange={handleChange} name="cliente" type="text" className="form-control" id="nome" placeholder="Digite aqui"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="dia" className="form-label fw-bold">Dia da Reserva</label>
                    <select onChange={handleChange} className="form-select" id="dia" name="dia">
                        <option value=''>Selecione o dia</option>
                        <option value="segunda">Segunda</option>
                        <option value="terça">Terça-feira</option>
                        <option value="quarta">Quarta-feira</option>
                        <option value="quinta">Quinta-feira</option>
                        <option value="sexta">Sexta-feira</option>
                        <option value="sabado">Sabado</option>
                        <option value="domingo">Domingo</option>
                    </select>

                    <div className="mb-3 mt-3">
                         <label htmlFor="radiogroup" className="form-label fw-bold">Horário</label>
                        
                        <div id="radiogroup">
                            <div className="form-check">
                                <input onChange={handleChange} className="form-check-input" type="radio" name="horario" id="radio1" value='manha'></input>
                                <label className="form-check-label" htmlFor="radio1">
                                Manhã
                                </label>
                            </div>
                            <div className="form-check">
                                <input onChange={handleChange} className="form-check-input" type="radio" name="horario" id="radio2" value='tarde'></input>
                                <label className="form-check-label" htmlFor="radio2">
                                Tarde
                                </label>
                            </div>
                            <div className="form-check">
                                <input onChange={handleChange} className="form-check-input" type="radio" name="horario" id="radio3" value='noite' checked></input>
                                <label className="form-check-label" htmlFor="radio3">
                                Noite
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="checkboxgroup" className="form-label fw-bold">Adicionais</label>
                    <div id="checkboxgroup">
                        <div className="form-check">
                            <input onChange={handleChange} name="wifi" className="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                            <label className="form-check-label" htmlFor="checkDefault">
                            Wi-fi
                            </label>
                        </div>
                        <div className="form-check">
                            <input onChange={handleChange} name="churrasqueira" className="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                            <label className="form-check-label" htmlFor="checkDefault">
                            Churrasqueira
                            </label>
                        </div>
                        <div className="form-check">
                            <input onChange={handleChange} name="piscina" className="form-check-input" type="checkbox" value="" id="checkChecked"></input>
                            <label className="form-check-label" htmlFor="checkChecked">
                            Piscina
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="txtarea" className="form-label fw-bold">Observações</label>
                    <div className="form-floating" id="txtarea">
                        <textarea onChange={handleChange} name="obs" className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label htmlFor="floatingTextarea">Deixe sua mensagem</label>
                    </div>
                </div>

                <div className="mb-3 mt-3">
                    <button type="submit" className="btn btn-primary">FAZER RESERVA</button>
                </div>
            </form>
        </div>
    )
}

function App() {
    return (
        <FormReserva />
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);