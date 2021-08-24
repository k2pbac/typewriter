const sentence = "hello there from lighthouse labs";
let count = 0, index=0;

for (const char of sentence) {
  setTimeout(() => {
    index++;
    process.stdout.write(char);
    if(index === sentence.length){
      console.log("\n");
    }
  }, 1000 * count)  
  count += 0.5;
}
