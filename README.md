# react-create
Simple React CLI that aims to speed up development by allowing you to create react components from the command line with lots of customizations.

[![Build Status](https://travis-ci.org/ipeters90/react-create.svg?branch=master)](https://travis-ci.org/ipeters90/react-create) [![npm version](https://badge.fury.io/js/react-create.svg)](https://badge.fury.io/js/react-create)
## Installation
### Via NPM
Make sure to install this module globally so you can run the command from anywhere.
```bash
npm install https://github.com/saidmoya12/react-create -g 
```
### Or build Github repo
Clone Repository
```bash
$ git clone https://github.com/ipeters90/react-create.git
```
Navigate to the repo
```bash
$ cd react-create
```
Do a build
```bash
$ npm run build
```
Lastly, run this command in root folder of repo to add script to NPM path (So you can execute anywhere)
```bash
$ npm link
```

## Usage

    Usage: react-create component <filename> [options]',
    Usage: react-create redux <filename> <action> [options]',

    
    actions
      comp, component            Component creation
      rdx,  redux                Action and Reducer creation

    options
      -h, --help                 Prints out usage option
      -d, --dir                  Creates a [componen name] directory with component file insid

    component options
      -c, --controlled           Creates the component with controlled method
      -fn, --functional          Creates the component with React`s functional <unstate> syntax.
      --jsx                      Creates the component with '.jsx' extenstion. (Default is '.js')

    --css,--styl,--less,--scss   Create and choose your css preprocesso
      
## Examples with component

#### Create `Header` component with ES6 syntax and redux
```bash
$ react-create component Header --redux
```
will generate this `Home.js` file
```js
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className="header">
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = state => {
    //state.theReducer
}

export default connect(mapStateToProps)(Header);
```

#### Create `Header` component with fragment syntax and the `.jsx` extension
```bash
$ react-create component Header --jsx --fs
```
will generate this `Header.jsx` file
```js
import React from 'react';

const Header = () => (
  <div className="header"></div>
)

export default Header;
```

#### Create `Home` component file that mounts to the DOM
```bash
$ react-create component Home --entry
```
will generate this `Home.js` file
```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Home extends Component {
 render() {
    return (
      <div className="home">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<Home/>, document.getElementById('app'));
```

#### Create `Header` component folder with appropriate component files and a package.json 
```bash
$ react-create component Header -d --jsx --styl
```
will generate 2 files

```
└─ Header/
   ├─ Header.jsx         -> With ES6 Markup of a React component
   └─ Header.styl        -> Stylus stylesheet
```

## Example with redux

#### Create `todo.actions` and `todo.reducer` in your redux project
```bash
$ react-create redux todo add
```
will generate 2 files

```
└─ src/
   ├─ actions
      └─ todo.actions.js
   └─ reducers  
      └─ todo.reducer.js
```
src/actions/todo.actions.js
```js
import store    from '../store' //replace by your store location

const add = () =>{
  store.dispatch({
    type: todoActionTypes.TODO_ADD,
  })
}

const todoActionTypes = {
  TODO_ADD: 'TODO_ADD'
}

export default {
  add,
  todoActionTypes
}
```
src/reducers/todo.reducer.js
```js
import {todoActionTypes} from '../actions/todo.actions'

const {TODO_ADD} = todoActionTypes;

const initialState = {
}

const todo = (state = initialState, action) => {
    switch(action.type){
      case TODO_ADD:

        break;
    }
    return state;
}

export default todo;
```