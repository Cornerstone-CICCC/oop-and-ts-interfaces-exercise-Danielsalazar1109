// Exercise 8: Optional Chaining
// Create an interface for a "House" object with a nested "address" object that includes an optional "city" (string).
// Use optional chaining to safely access the "city" and log it to the console.

interface Address {
  address: {
    city: string; 
  };
}

interface House {
  address?: Address; 
}


const myHouse: House = {
  address: {
    city: "New York" 
  }
};

// Acceso a la ciudad de myHouse
console.log(myHouse.address?.city ?? "City not available"); // Expected Output: "New York"

// Objeto sin dirección
const noCityHouse: House = {};

// Acceso a la ciudad de noCityHouse
console.log(noCityHouse.address?.city ?? "City not available"); // Expected Output: "City not available"