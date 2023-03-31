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
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center mb-3">Staff Login</h5>
                            <form>
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" class="form-control" id="username" name="username" required />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" name="password" required />
                                </div>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" onClick={routeChange}>Log in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Login;