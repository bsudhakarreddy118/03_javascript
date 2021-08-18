let today = new Date();

console.log(today);
console.log(today.getTime());

// 26/4/2020 12:54

let dateStr = today.getDate() + '/' + (today.getMonth()+ 1) + '/' + today.getFullYear();

console.log(dateStr);

//ES6 - Template Strings/literals

let dateStr1 = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
console.log(dateStr1);