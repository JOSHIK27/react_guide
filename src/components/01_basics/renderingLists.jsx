export default function RenderingLists() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {numbers.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
}
