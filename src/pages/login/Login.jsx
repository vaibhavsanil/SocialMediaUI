import "./login.scss"

function Login() {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Facere iusto fugit, laboriosam sed labore iure totam ex ut. 
                Rem nostrum, amet illo natus quibusdam odit repellat consequatur 
                facilis minima vero?</p>
                <span>Dont Worry you have an account ?</span>
                <button>Register</button>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Login