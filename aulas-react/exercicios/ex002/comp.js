function Header(props) {
    return (
        <div>
            <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"></img> 
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>  
        </div>
    )
};
function CampoEmail(props) {
    return (
        <div class="form-floating"> 
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input> 
                
            <label for="floatingInput">Email address</label> 
        </div> 
    )
};
function CampoSenha(props) {
    return (
        <div class="form-floating"> 
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input> 
                    
            <label for="floatingPassword">Password</label> 
        </div>
    )
};
function EsqueciSenha(props) {
    return (
        <div class="form-check text-start my-3"> 
            <input class="form-check-input" type="checkbox" value="remember-me" id="checkDefault"></input>

            <label class="form-check-label" for="checkDefault">
            Remember me</label> 
        </div> 
    )
}
function Botao(props) {
    return ( 
        <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>  
    )
};
function Footer(props) {
    return (
        <p class="mt-5 mb-3 text-body-secondary">© 2017–2025</p>
    )
}