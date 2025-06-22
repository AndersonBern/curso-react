function App() {
    return (
        <body class="d-flex align-items-center py-4 bg-body-primary" cz-shortcut-listen="true">
            <main class="form-signin w-50 m-auto">
                <form>
                    <Header/>
                    <CampoEmail/>
                    <CampoSenha/>
                    <EsqueciSenha/>
                    <Botao/>
                    <Footer/>
                </form>
            </main>
        </body>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);