// 1.
class Author {
    constructor (name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name () {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    static toString(a) {
        return a._name;
    }
};

class Book{
    constructor (title, author, price, quantity) {
        this._title = title;
        if (author instanceof Author) {
            this._author = author;
        } else {
            this._author = undefined;
        }
        this._price = price;
        this._quantity = quantity;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get price() {
        return this._price;
    }

    get quantity() {
        return this._quantity;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    set author(newAuthor) {
        if (!(newAuthor instanceof Author)) {
            return 'Error: Must be an instance of class Author';
        } else {
            this._author = newAuthor;
        }
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    set quantity(newQuantity) {
        this._quantity = newQuantity;
    }

    static getProfit(b) {
        return b.price * b.quantity;
    }

    static toString(b) {
        return `"${b.title}", ${Author.toString(b.author)}`;
    }
};

// let a = new Author('Louis Carol', '123', 'm');
// let b = new Book('Alice in wonderland', 'asd', 3000, 100000);
// console.log(Book.getProfit(b));

// 2.
class Account {
    static id = 0;

    constructor (name, balance) {
        this._name = name;
        this._balance = balance;
        this._id = ++Account.id;
    }

    get name() {
        return this._name;
    }

    get balance() {
        return this._balance;
    }

    get id() {
        return this._id;
    }

    set name(newName) {
        this._name = newName;
    }

    set balance(newBalance) {
        this._balance = newBalance;
    }

    credit(amount) {
        this.balance += amount;
        return this.balance;
    }

    debit(amount) {
        if (amount > this.balance) {
            console.log('Amount exceeded balance.');
            return -1;
        }
        this.balance -= amount;
        return this.balance;
    }

    transferTo(anotherAccount, amount) {
        if (amount > this.balance) {
            console.log('Amount exceeded balance.');
            return -1;
        }
        this.balance -= amount;
        anotherAccount.balance += amount;
        return this.balance;
    }

    static identifyAccounts(accountFirst, accountSecond) {
        if (Object.keys(accountFirst).length !== Object.keys(accountSecond).length) {
            return false;
        }
        for (const key in accountFirst) {
            if (accountFirst[key] !== accountSecond[key]) {
                return false;
            }
        }

        return true;
    }

    static toString(acc) {
        return `#${acc.id}\nName: ${acc.name}\nBalance: ${acc.balance}\n`;
    }
};

// let p = new Account('asd', 1000);
// let p2 = new Account('dsa', 2000);
// let p3 = new Account('asd', 1000);
// console.log(Account.toString(p));
// console.log(Account.toString(p2));
// console.log(Account.identifyAccounts(p, p3));

// 3.
class Person {
    constructor (firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get gender() {
        return this._gender;
    }

    get age() {
        return this._age;
    }

    set firstName(newFirstName) {
        this._firstName = newFirstName;
    }

    set lastName(newLastName) {
        this._lastName = newLastName;
    }

    set name(newName) {
        [this._firstName, this._lastName] = newName.split(' ');
    }

    set gender(newGender) {
        this._gender = newGender;
    }

    set age(newAge) {
        this._age = newAge;
    }

    static toString(p) {
        return `${p.firstName} ${p.lastName}, ${p.gender}, ${p.age}`;
    }
};

class Student extends Person {
    constructor (firstName, lastName, gender, age, programs, year, fee) {
        super (firstName, lastName, gender, age);
        this._programs = programs;
        this._year = year;
        this._fee = fee;
    }

    get programs() {
        return this._programs;
    }

    get year() {
        return this._year;
    }

    get fee() {
        return this._fee;
    }

    set programs(newPrograms) {
        this._programs = newPrograms;
    }

    set year(newYear) {
        this._year = newYear;
    }

    set fee(newFee) {
        this._fee = newFee;
    }

    increaseYear() {
        let allPassed = true;
        for (let i = 0; i < this.programs.length; i++) {
            if (this.programs[i].grade < 50) {
                allPassed = false;
            }
        }

        if (allPassed) {
            ++this.year;
            for (let i = 0; i < this.programs.length; i++) {
                this.programs[i].grade = 0;
            }
        }
    }

    passExam(programName, grade) {
        for (let i = 0; i < this._programs.length; i++) {
            if (this._programs[i].programName === programName) {
                this._programs[i].grade = grade;
            }
        }

        this.increaseYear();
    }

    static toString(s) {
        let programString = '';
        for (let i = 0; i < s.programs.length; i++) {
            programString += `${s.programs[i].programName} - ${s.programs[i].grade}, `;
        }
        programString = programString.slice(0, -2);

        return super.toString(s) + `, year ${s.year}, ${s.fee}$\nStudying: ${programString}\n`;
    }
};

// let s = new Student('asd', 'qwe', 'male', 25, [{ programName: 'Advanced JS', grade: 0 }, { programName: 'Web-design', grade: 0 }, { programName: 'Mathematical analysis', grade: 0 }], 2, 1000);
// console.log(Student.toString(s));
// s.passExam('Advanced JS', 85);
// s.passExam('Web-design', 85);
// console.log(Student.toString(s));
// s.passExam('Mathematical analysis', 85);
// console.log(Student.toString(s));

