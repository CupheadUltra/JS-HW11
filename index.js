const bankAccount = {
    ownerName: "Sviatoslav",
    accountNumber: "123456789",
    balance: 0,
    deposit(amount) {
        this.balance += amount;
        console.log(`Баланс після поповнення: ${this.balance}`);
    },
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Баланс після зняття: ${this.balance}`);
        } else {
            console.log('Недостатньо коштів на рахунку.');
        }
    }
};
// Приклад використання bankAccount
bankAccount.deposit(100);  
bankAccount.withdraw(50);   
bankAccount.withdraw(100); 

const weather = {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    isCold() {
        return this.temperature < 0;
    }
};
// Приклад використання weather
weather.temperature = -5; 
if (weather.isCold()) {
    console.log("Температура нижче 0 градусів Цельсія.");
} else {
    console.log("Температура вище або рівна 0 градусів Цельсія.");
}

const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    password: "password123",
    login(inputEmail, inputPassword) {
        return this.email === inputEmail && this.password === inputPassword;
    }
};
// Приклад використання user
const loginEmail = "jane@example.com"; 
const loginPassword = "password123";   
if (user.login(loginEmail, loginPassword)) {
    console.log("Логін успішний!");
} else {
    console.log("Невірний email або пароль.");
}

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 9,
    isHighRated() {
        return this.rating > 8;
    }
};
// Приклад використання movie
console.log(`Назва: ${movie.title}`);
console.log(`Режисер: ${movie.director}`);
console.log(`Рік: ${movie.year}`);
console.log(`Рейтинг: ${movie.rating}`);

if (movie.isHighRated()) {
    console.log("Цей фільм має високий рейтинг!");
} else {
    console.log("Цей фільм має середній або низький рейтинг.");
}
