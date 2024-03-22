# React_Guide

## Moto

This repo goes through react documentation from the start to the end and follows some best practices. Few examples are taken from react documentation.

<h2>What is REACT ?</h2>
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

<h2>Lifting Up the State</h2>

What if two or more components need the access of some state (imagine 2 components are completely far away and we cannot pass down the props to all the components). In such cases we will have lift the state variable to the common ancestor of all the components.

<h2>Preserving and Resetting Of state</h2>
State is tied to position in the render tree. As the long the it is there, its state is preserved across the renders. The moment it is deleted from the ui tree, state will be reset to initial value. Also, different component at the same place will destroy the states during switching. 
NOTE : If you are rendering based on if else (ternary operator) make sure u use key to make the components are different else react will render as if it is the same component with different props. Refer docs for better understanding

<h2>Passing Data Via Context</h2>
Usually we pass data from parent component to down the tree via props. But it will lead to performance issues when we pass through several children which dont even need them. This will cause unnecessary re renders. This can be solved by context. We wrap the parent component with the context and make sure all the children down the tree receives the data (context). Most common use cases for context is theming, to know logged in user details, routing etc. It is easy to misuse context, hence use it only when u really need it (if props become overhead then consider context).

<img src="image.png" alt="Alt text" width="300" height="200">
