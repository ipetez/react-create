# react-create
Simple React CLI that aims to speed up development by generating desired React component markup based on your preferences via the command line.

[![Build Status](https://travis-ci.org/ipeters90/react-create.svg?branch=master)](https://travis-ci.org/ipeters90/react-create)
## Installation
### Via NPM
Make sure to install this module globally so you can run the command from anywhere.
```bash
npm install -g react-create
```
### Or via Github repo
Clone Repository
```bash
$ git clone https://github.com/ipeters90/react-create.git
```
Navigate to the repo
```bash
$ cd react-create
```
Lastly, run command in root folder of repo to add script to NPM path (So you can execute anywhere)
```bash
$ npm link
```

## Usage

    Usage: react-create [component name]

    Options:
      -v, --version    Outputs the version number (e.g react-create -v)
      -h, --help       Prints out usage options
      -d, --dir        Creates a [component name] directory with component file inside. (Default is just the component file)
      -p, --pkg        Includes a package.json file with component
      --es5            Generates the component with React's ES5 syntax. (Default is ES6).
      --jsx            Creates the component with `.jsx` extenstion. (Default is `.js`)
      --entry          Bootstraps the component with the 'ReactDOM.render' function.
      
## Examples
#### Create `Header` component file that mounts to the DOM
```bash
$ react-create Header
```
will generate this `Header.js` file
```js
import React, { Component } from 'react';

export default class Header extends Component {
 render() {
    return (
      <div className="header">
        { this.props.children }
      </div>
    )
  }
}

ReactDom.render(<Header/>, document.getElementById('app'));
```

#### Create `Header` component with ES5 syntax and the `.jsx` extension
```bash
$ react-create Header --jsx --es5
```
will generate this `Header.jsx` file
```js
var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        { this.props.children }
      </div>
    )
  }
})
```

#### Create `Header` component folder with appropriate component files and a package.json 
```bash
$ react-create Header -d -jsx -p
```
will generate 3 files

```
└─ Header/
   ├─ Header.jsx         -> With ES6 Markup of a React component
   ├─ Header.css
   └─ package.json       -> With name, main and version number markup included
```
