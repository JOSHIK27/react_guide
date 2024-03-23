// this is a powerful hook when you are performing same operation for each render and it rarely changing based on some other dependency variable
// it lets u cache the result between 2 renders
export default function UseMemoExample() {
  console.time("timer");
  const ans = sample(2000);
  console.timeEnd("timer");
  return <div>HIi</div>;
}
function sample(num) {
  let ans = 0;
  for (let i = 0; i < num; i++) {
    ans = ans + i;
  }
  return ans;
}
