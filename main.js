const HashMap = require('./hashmap.js')

const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('apple', 'skibidi')
test.set('banana', 'toilet')

test.set('moon', 'silver')


console.log('length: ', test.length())
console.log('has apple: ', test.has('apple'))
console.log('value of apple: ', test.get('apple'))
console.log(test.keys())
console.log(test.values())


