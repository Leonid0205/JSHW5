// Task 1

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}
function printNumbersMore(number, numbersObj) {
    for (const key in numbersObj) {
        if (numbersObj[key] >= number) {
            console.log(numbersObj[key])
        };
    }
}
printNumbersMore(3, numbers);

// Task 2

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Task 3

const productsThird = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
function multiplyPriceOfObject(value, products) {
    products.forEach(element => {
        element.price = element.price * value;
    });
    console.log(products);
}
multiplyPriceOfObject(0.85, productsThird);

// Task 4

const productsFourth = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];
let filteredProductsFourth1 = productsFourth.filter(item => 'photos' in item && item.photos.length !== 0);
let filteredProductsFourth2 = productsFourth.filter(item => item.photos ? item.photos.length : undefined);
console.log(filteredProductsFourth1);
console.log(productsFourth.sort((a,b) => a.price - b.price));

// Task 5

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
function createObjectFromArrays(arrayFirst, arraySecond) {
    const arrayObj = {};
    if (arrayFirst.length === arraySecond.length) {
        for (let i = 0; i < arrayFirst.length; i++) {
            arrayObj[arrayFirst[i]] = arraySecond[i];
        }
        console.log(arrayObj);
        return arrayObj;
    } else {
        console.log('arrayFirst length not equal to arraySecond length');
    }
}
createObjectFromArrays(en, ru);