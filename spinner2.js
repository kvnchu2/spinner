const spinner = ['|','/','-','\\','|']

let dur = 100
for (let spin of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}   `)    
  }, dur)
  dur += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, dur);