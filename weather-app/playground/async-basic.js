console.log(`starting app`);

setTimeout(() => {
  console.log(`Inside of CB`);
}, 2000);

setTimeout(() => {
  console.log(`Second Timeout`);
}, 0);

console.log(`finishing up`);
