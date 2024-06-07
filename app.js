const os = require('os');

const cpus = os.cpus();

console.log('CPU Information:');

cpus.forEach((cpu, index) => {
  console.log(`CPU ${index + 1}:`);
  console.log('- Model:', cpu.model);
  console.log('- Speed:', cpu.speed);
  console.log('- Times:', cpu.times);
  console.log('----------------------');
});
