export default function WritingEventHandlers() {
  const handleClick = () => {
    alert("Clicked !!!!");
  };
  return (
    <>
      <button onClick={handleClick}>Click Meeeee !!!</button>
      <button
        onClick={() => {
          alert("Clicked");
        }}
      >
        Click Meeeee !!!
      </button>
    </>
  );
}
