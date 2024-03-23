import { useRef } from "react";

export default function UseRefExample() {
  const ref = useRef(null);
  const list_ref = useRef(null);
  const handleScroll = (index) => {
    const imageNodes = list_ref.current.querySelectorAll("li > img");
    imageNodes[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  return (
    <>
      <input ref={ref}></input>
      <button onClick={() => ref.current.focus()}>Click</button>
      <button onClick={() => handleScroll(0)}>0</button>
      <button onClick={() => handleScroll(1)}>1</button>
      <button onClick={() => handleScroll(2)}>2</button>
      <ul ref={list_ref}>
        <li>
          <img
            width={1000}
            src={
              "https://qph.cf2.quoracdn.net/main-qimg-d42ce1ebf3b9dee5f4be1c771fe88e4c.webp"
            }
          ></img>
        </li>
        <li>
          <img
            width={1000}
            src={
              "https://i.pinimg.com/736x/0f/62/65/0f6265fe8dc448b8f032f161db77c033.jpg"
            }
          ></img>
        </li>
        <li>
          <img
            width={1000}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0-J7dZWfEm6Oz7TH9d_gWF38jAK-4pVq9il77nYSDw&s"
            }
          ></img>
        </li>
      </ul>
    </>
  );
}
