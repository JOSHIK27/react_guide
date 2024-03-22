# React_Guide

## Basics

React is a javascript library (not framework !) which is very powerful in creating frontend applications with ease.

<h2>What is JSX ?</h2>
JSX is an extension which allows us to write HTML inside javascript file. This allows us to write render logic, event handlers, ui at the same place unlike traditional HTML, CSS, JS.

<h2>What is component in react ?</h2>
Each react component is nothing but a javascript function which returns custom HTML like element. This element is then transpiled to javascript object by babel (like React.creatElement("div", null, "Hello")) and placed on the dom tree by the react. Hence each component must only return one element (wrap everything in a single html tag or react fragment).

<h2>State</h2>

Probably most important concept in react. State is a just like any javascript variable with some super powers.
It is the one the which triggers re-renders and it is the only variable whose value persist bn the renders. Changes made to local variables wont trigger re-renders. Hence, state variables provide a method (setState) which allows to update the state which further re renders the component. useState hook provides us these. Hooks are just like javascript functions which lets you hook through react core features. State is isolated and private. Each component has its own isolated states.

<h2>Rendering</h2>

Rendering happens in cases. Initial rendering and setting the state of the component. During the initial render, <App/> renders all of its children. For subsequent renders, react efficently renders only the component which is responsible for triggering the render. Rendering involves in three phases : Triggering, render (making necessary changes in VDOM), commit to DOM(painting the UI). If the compenent which is rendered has children, all of them are rendered too (recursive). although this can be optimised with Memo.
