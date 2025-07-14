function listObjectProperties(item) {
  // Get an array of the object's own enumerable property names
  const keys = Object.keys(item);

  console.log("--- Listing Properties ---");
  keys.forEach(function(key) {
    const value = item[key]; // Access the value using bracket notation
    console.log(`${key}: ${value}`);
  });
  console.log("--- End of Listing ---");
}

const product = {
  name: "Laptop",
  brand: "TechCo",
  price: 1200,
  inStock: true
};

const userSettings = {
  theme: "dark",
  fontSize: "16px",
  notifications: true,
  language: "en-US"
};

console.log("Product Details:");
listObjectProperties(product);

console.log("\nUser Settings:");
listObjectProperties(userSettings);