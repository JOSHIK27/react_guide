export default function ConditionalRendering({ condition }) {
  return (
    <>
      <div>
        {condition == true ? "Condition is TRUE" : "Condition is FALSE"}
      </div>
      {condition && <div>Condition is TRUE</div>}
      {!condition && <div>Condition is TRUE</div>}
    </>
  );
}
