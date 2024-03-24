# React_Guide

## Moto

This Repo is a quick refresher for all the important concepts in REACT along with code.

<h2>What is REACT ?</h2>
React is a javascript library (not framework !) which is very powerful in creating frontend applications with ease.

<h2>What is JSX ?</h2>
JSX is an extension which allows us to write HTML inside a javascript file. This allows us to write render logic, event handlers, ui in the same place, unlike traditional HTML, CSS, and JS.

<h2>What is component in react ?</h2>
Each react component is nothing but a javascript function which returns a custom HTML-like element. This element is then transpiled to a javascript object by babel (like React.creatElement("div", null, "Hello")) and placed on the dom tree by the react. Hence each component must only return one element (wrap everything in a single HTML tag or react fragment).

<h2>State</h2>

Probably most important concept in react. State is a just like any javascript variable with some super powers.
It is the one the which triggers re-renders and it is the only variable whose value persist bn the renders. Changes made to local variables wont trigger re-renders. Hence, state variables provide a method (setState) which allows to update the state which further re renders the component. useState hook provides us these. Hooks are just like javascript functions which lets you hook through react core features. State is isolated and private. Each component has its own isolated states.

<h2>Props</h2>
As the name suggests, props are properties of components. These can be passed via attributes from a parent to a child component. The props can be extracted from the child function parameter (usually destructured at the same place for better readability).
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

<h2>Standard Hooks</h2>
Hooks are just like normal javascript functions which start with "use" and lets u hook into some core features of react.

<h3>useState</h3>
The most important and common hook used in the react. This returns the value of state variable and setter function. This is responsible for re rendering for components.

<h3>useEffect</h3>
Extremely powerful if u want to handle something on sideeffect (on change of some other stuff in ur component). Takes a callback and a dependency array and returns undefined. Callback optionally returns a cleanup function which runs first when dependecny is changed (first clean up function is executed and then callback). If u don't pass dependency array, callback is executed each time component is rendered. If u pass empty, callback is executed only once during first render. Common usecases -> fetching data, initial animations for landing page etc. Thumb rule is if something has to done changed in the page on some other change (simply means side effect), useeffect can be used by passing the dependency.

<h3>useContext</h3>
This is used to extract the context from the context variable that is passed by context provider.

<h3>useCallback</h3>
Used to cached a function itself (unlike value -> useMemo)
<h3>useMemo</h2>
Very powerful in caching a heavy computation (like filtering an array etc). Use only if computation is expensive (more than 1 ms as per docs) else it would cause overhead. Takes a callback with no paramters and a dependency array. Each time the dependency array changes, the computation inside callback function body is calculated are return value (any js variable).

<h4>memo</h4>
Let us say we have a component. This component has child components. Lets say parent component is rendered, then react renders all of its child components recursively. So, what if props of child component are not changed ? There is no point of re-rendering. Here comes the memo, we can wrap child component with memo while exporting them.

<h3>useRef</h3>
refs are just like state variables which persist across the renders but do not trigger the renders. Refs are mutable. Most common usecase is, react allows to add ref attributes to dom elements. We can create a ref and store this as ref value to dom node. This can then be used to access the dom node. useRef returns an object with current property and a value. (focusing inputs, playing videos, scrolling image to view are common usecases)

<h2>Routing</h2>
Routing is mechanism of navigating across different webpages. React Router is the most popular library used for routing. Checkout the 06_routing folder for the code (goes through most common features of router).

<h2>Bundling</h2>
Merging all the import files to a single file and loaded once. Webpack does this magic under the hood.

<h2>Code Splitting</h2>
Bundling is fine and good. What if our app starts to import larger and larger files ? Importing them would be time consuming
Codesplitting comes handy in such cases, it optimises performance by lazy loading the imports (dynamically importing at the runtime). We can import functions/ components when they are actually required (at run time) instead importing at the top.
