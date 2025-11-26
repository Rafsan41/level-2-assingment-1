const formatValue = (
  input: string | number | boolean
): string | number | boolean | undefined => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return !input;
  }
};

// _________________________

const getLength = (input: string | any[]): number => {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.length;
  }
};

// ______________________________

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}
// ______________________________

interface Books {
  title: string;
  rating: number;
}

const filterByRating = (items: readonly Books[]): Books[] => {
  const result = items.filter((books) => books.rating >= 4);
  return result;
};
const books: Books[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
// _____________________________________

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (person: readonly User[]) => {
  const result = person.filter((user) => user.isActive === true);
  return result;
};
const users: User[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

// ____________________________

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  const result = `Title: ${book.title}, Author:  ${
    book.author
  }, PublishedYear: ${book.publishedYear}, Available: ${
    book.isAvailable ? " Yes" : "No"
  }`;

  return result;
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

// _____________________________

const getUniqueValues = <T extends string | number>(arr1: T[], arr2: T[]) => {
  const finalArray: T[] = [];

  const alreadyHaveVale = (arr: T[], value: T): boolean => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    finalArray.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!alreadyHaveVale(finalArray, arr2[i])) {
      finalArray.push(arr2[i]);
    }
  }
  return finalArray;
};

const array1 = [1, 2, 3, 4, 5];

const array2 = [3, 4, 5, 6, 7];
// _________________________________________

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  }
  const discountPrice = products.map((product) => {
    const discount = product.discount ?? 0;
    const result = product.price * product.quantity * (1 - discount / 100);
    return result;
  });
  return discountPrice.reduce((sum, price) => sum + price, 0);
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

// -------------------------------
