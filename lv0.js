const person = {
    name: '佐科姐姐',
    age: 1000000,
    address: {
        city: 'ChongQing',
        area: 'NanShan'
    },
    title: ['student', { year: 2022, title: 'GoodStudent' }]
};

// 对象解构赋值
const { name, age, address: { city, area }, title: [title1, { year, title: title2 }] } = person;

console.log(name);   // 输出: 佐科姐姐
console.log(age);    // 输出: 1000000
console.log(city);   // 输出: ChongQing
console.log(area);   // 输出: NanShan
console.log(title1); // 输出: student
console.log(title2); // 输出: GoodStudent