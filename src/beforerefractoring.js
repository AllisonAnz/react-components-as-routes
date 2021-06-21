import React from 'react';
import ReactDOM from 'react-dom';
//Import react-router function 
//We create an alias with syntax BrowserRout as Router, so that 
//everytime we refer to Router in this file, we are refering to BrowserRouter
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

//Add basic syling for NavLinks
const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}

//add the navbar comp. 
const Navbar = () =>
    <div>
        <NavLink
            to="/"
            /* set exact so it knows to only set activeStyle when route is deeply equal to link */
            exact
            /* add styling to Navlink */
            style={link}
            /* add prop for activeStyle */
            activeStyle={{
                background: 'darkblue'
            }}
        >Home</NavLink>
        <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
        >About</NavLink>
        <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
        >Login</NavLink>
    </div >

const Home = () => {
    return (
        <div>
            <h1>Home!</h1>
        </div>
    );
};

const About = () => {
    return (
        <div>
            <h1>This is my about component!</h1>
        </div>
    )
}

const Login = () => {
    return (
        <div>
            <form>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                    <label htmlFor="username">Username</label>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />
                    <label htmlFor="password">Password</label>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
//Change to have router coordinate what is displayed
//The Router (our alias for Browser Router) comp. is the base for our applications 
//routing. It is where we declare how React Router will be used. The Route comp. has two props
//in our example: path and component. The Route comp. is in charge of saying "when the URL matches this specified path, render this specified comp."
//use npm start, you'll notice when you type in the URL it will render <div><h1>Home!</h1><div>
//lets add our /about and /login routes to our router
//now if you add /about or /login in the URL box, different pages show up!
ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
        </div>
    </Router>,
    document.getElementById('root')
);

//You may have noticed the aberrant behavior of Home comp. 
//it always renders, no matter which route we go 
//even if we type nonsense. we still get the home component 
//Imagine we wanted a header displayed no matter which rought was hit. 
//in this case, this behavior is desirable. 
//Otherwise there are ways to fix it 
//One way is to change our Route component for Home to exact path instead of just path 
//<Route exact path="/" component={Home} />

