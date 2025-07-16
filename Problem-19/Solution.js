function getObjectValues(obj) {
  const valuesArray = Object.values(obj);
  return valuesArray;
}

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "silver"
};

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  genre: "Classic"
};

console.log("Car Values:", getObjectValues(car));
console.log("Book Values:", getObjectValues(book));