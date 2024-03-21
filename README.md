# React_Guide

## Basics

React is a javascript library (not framework !) which is very powerful in creating frontend applications with ease.

<h2>What is JSX ?</h2>
JSX is an extension which allows us to write HTML inside javascript file. This allows us to write render logic, event handlers, ui at the same place unlike traditional HTML, CSS, JS.

<h2>What is component in react ?</h2>
Each react component is nothing but a javascript function which returns custom HTML like element. This element is then transpiled to javascript object by babel (like React.creatElement("div", null, "Hello")) and placed on the dom tree by the react. Hence each component must only return one element (wrap everything in a single html tag or react fragment).
