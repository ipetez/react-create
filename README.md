# react-create
Simple React CLI that aims to speed up development by allowing you to create react components from the command line with lots of customizations.

[![Build Status](https://travis-ci.org/ipeters90/react-create.svg?branch=master)](https://travis-ci.org/ipeters90/react-create) [![npm version](https://badge.fury.io/js/react-create.svg)](https://badge.fury.io/js/react-create)
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
Do a build
```bash
$ npm run build
```
Lastly, run this command in root folder of repo to add script to NPM path (So you can execute anywhere)
```bash
$ npm link
```

## Usage

    Usage: react-create component <component name> [options]

    Actions:
      comp, component            Passed in as first argument to signify component creation

    Options:
      -v, --version              Outputs the version number (e.g rc -v)
      -h, --help                 Prints out usage options
      -d, --dir                  Creates a [component name] directory with component file inside. (Default is just the component file)
      -p, --pkg                  Includes a package.json file with component
      --es5                      Generates the component with React's ES5 syntax. (Default is ES6).
      --jsx                      Creates the component with `.jsx` extenstion. (Default is `.js`)
      --entry                    Bootstraps the component with the 'ReactDOM.render' function.
      --css,--styl,--less, -scss Create and choose your css preprocessor to generate
      
## Examples
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

#### Create `Header` component with ES5 syntax and the `.jsx` extension
```bash
$ react-create component Header --jsx --es5
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

module.exports = Header;
```

#### Create `Header` component folder with appropriate component files and a package.json 
```bash
$ react-create component Header -d --jsx -pkg --styl
```
will generate 3 files

```
└─ Header/
   ├─ Header.jsx         -> With ES6 Markup of a React component
   ├─ Header.styl        -> Stylus stylesheet
   └─ package.json       -> With name, main and version number markup included
```
