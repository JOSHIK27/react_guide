// remember to stop the event propogation and prevent event default behaviour

export default function EventHandlersAsProps() {
  const handleClick = (event, message) => {
    alert(message);
  };
  return (
    <>
      <Component1 handler={handleClick} />
      <Component2 handler={handleClick} />
    </>
  );
}

function Component1({ handler }) {
  return (
    <button onClick={(e) => handler(e, "Button 1 clicked")}>Button 1</button>
  );
}

function Component2({ handler }) {
  return (
    <button onClick={(e) => handler(e, "Button 1 clicked")}>Button 2</button>
  );
}
