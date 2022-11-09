import React from 'react';
import { ThemeProvider } from 'styled-components';

import './App.css';

import { lightTheme, darkTheme } from './themes';
import { GlobalLayout }from './GlobalStyle';
import Toggle from './Toggle';

class App extends React.Component {
  contructor(props){
    super(props);
    this.state = {
      inputText: "",
      theme:"light",
    };

    toggleTheme=() => {
      if(this.state.theme === 'light'){
        this.setState({
          inputText: this.state.inputText,
          theme: 'dark',
        });
      }else{
        this.setState({
          inputText: this.state.inputText,
          theme: 'light',
        });
      }  
    }

    return (
      <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme }>
        <GlobalLayout />
            <div className='App'>
                <h1> React - Tema Claro / Escuro</h1>
                  <button type="button" class="btn btn-secondary">Tema</button>
                  <Toggle themeLabel={this.state.theme} toggleTheme={this.toggleTheme}/>
                 <hr />
                  <form className="row g-3">
                    <div className="col-auto">
                      <label for="staticEmail2" class="visually-hidden">Email</label>
                      <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com" />
                    </div>
                    <div className="col-auto">
                      <label for="inputPassword2" class="visually-hidden">Password</label>
                      <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
                    </div>
                    <div className="col-auto">
                      <button type="submit" class="btn btn-primary mb-3">Sing up</button>
                    </div>
                  </form>
            </div>
      </ThemeProvider>
    )
  }
}