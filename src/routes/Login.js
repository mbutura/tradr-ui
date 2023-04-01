import Header from "../components/Header";
import { useNavigate, Fragment } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/manage`; 
      navigate(path);
    }

    return (
    <>
        <Header />
        <div class="jumbotron align-items-center">
            <div class="container mt-5">
                <div class="row justify-content-center ">
                    <div class="col-md-6 col-lg-4">
                        <div class="card shadow align-middle">
                            <div class="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="username" class="form-label color-655DBB"><strong>Username</strong></label>
                                        <input type="text" class="form-control" id="username" name="username" placeholder="Username*" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" class="form-label color-655DBB"><strong>Password</strong></label>
                                        <input type="password" class="form-control" id="password" name="password" placeholder="Password*" required />
                                    </div>
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-primary " onClick={routeChange}>Log in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Login;