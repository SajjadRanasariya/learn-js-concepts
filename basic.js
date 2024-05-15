// "use strict"

let obj1 = {
    id: 'ID0001',
    name: 'User1'
};

console.log(obj1);
console.log(obj2 = obj1); // it will throw error when we use "use strict" mode
console.log(obj2);

obj2.contact = '9876543210';
console.log(obj2);
console.log(obj1);

obj1['email'] = 'me@gmail.com'
console.log(obj2);
console.log(obj1);

delete obj2.contact;

console.log(obj2);
console.log(obj1);

// primitive data will stores in stack memeory (by value)
// non primitive data will stores in heap memeory (by reference)





