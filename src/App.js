import {Route, Switch, Link} from "react-router-dom";
import './App.css'
import PokemonList from "./components/PokemonList"
import CaughtPokemonList from "./components/CaughtPokemonList";
import Card from "./components/Card"

function App() {

    return (
        <div className='wrapper'>
            <div className='header'>
                <h1>Pokémon: gotta catch 'em all!</h1>
                <nav
                    className='navigation'>
                    <Link to="/">
                        <button
                            className='link'>
                            All Pokemon
                        </button>
                    </Link>
                    <Link to="/caught">
                        <button
                            className='link'>
                            Caught Pokemon
                        </button>
                    </Link>
                </nav>
            </div>
            <Switch>
                <Route exact path="/" component={PokemonList}/>
                <Route exact path="/caught" component={CaughtPokemonList}/>
                <Route exact path="/card" component={Card}/>
            </Switch>
        </div>
    );
}

export default App;