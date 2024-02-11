// 浅拷贝
function shallowCopy(obj) {
    // 检查输入是否为对象
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // 创建新对象
    const newObj = Array.isArray(obj) ? [] : {};

    // 遍历原对象的属性
    for (let key in obj) {
        // 检查是否是自身属性
        if (obj.hasOwnProperty(key)) {
            // 复制属性值到新对象
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

const person = {
    name: '佐科姐姐',
    age: 1000000,
    address: {
        city: 'ChongQing',
        area: 'NanShan'
    },
    title: ['student', { year: 2022, title: 'GoodStudent' }]
};

const copy = shallowCopy(person);

console.log(copy);
