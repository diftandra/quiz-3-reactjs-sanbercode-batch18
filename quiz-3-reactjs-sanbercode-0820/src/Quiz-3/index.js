import React,{useContext} from 'react'
import logo from './public/img/logo.png';
import {MovieContext} from "../Quiz-3/Crud/context";
import {MovieProvider} from "../Quiz-3/Crud/context";
import {LoginContext} from "./logincontext";
import './public/css/style.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './about'
import MovieListEditor from './Crud/Main'
import Login from './login'

  export default function App() {
    const [login, setLogin, input, setInput] = useContext(LoginContext) 

    return (
        <Router>
            <div>
                <header>
                    <img id="logo" src={logo} width="200px" />
                    <nav>
                        <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        {login.enableEdit&&
                            <li>
                                <Link to="/Movie_Edit">Movie List Editor</Link>
                            </li>
                        }
                        {!login.logout&&
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        }
                        {login.logout&&
                            <li>
                                <Link to="/Logout">Logout</Link>
                            </li>
                        }
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route exact path="/" component={Arrange}/>
                    <Route exact path="/About" component={About}/>
                    <section>
                        {login.enableEdit&&
                            <Route exact path="/Movie_Edit" component={MovieListEditor}/>
                        }
                        <Route exact path="/Login" component={Login}/>
                    </section>              
                </Switch>
            </div>
        </Router>
    );
}

const Arrange = () =>{
    return(
        <MovieProvider>
            <Index/>
        </MovieProvider>
      )
}

 const Index = () =>{
    
    const [daftarMovie] = useContext(MovieContext)

    return(
        <>
            <section >
            <h1>Daftar Film Film Terbaik</h1>
            
            {
                daftarMovie !== null && daftarMovie.map((item, index)=>{
                    return(
                        <div id="article-list">
                            <div class="article">
                            <h3>{item.title}</h3>
                            <div style={{display:"inline-block"}}>
                                <div class="conten">
                                    <img src={item.image_url} alt="alt"/>
                                </div>
                                <div class="details">
                                    <h3>Rating {item.rating}</h3>
                                    <h3>Durasi : {Math.round(item.duration/60)} jam</h3>
                                    <h3>Genre : {item.genre}</h3>
                                </div>
                            </div>
                            <p>
                                <strong>Description : </strong>{item.description}
                            </p>
                            </div>
                        </div>
                    )
                })
            }
            </section>
            <footer>
                <h5>copyright &copy; 2020 by Sanbercode</h5>
            </footer>
        </>
    )   
}