// Exercise 5: Type Casting
// Define an interface for a "User" with a required "id" (number) and optional "email" (string).
// Create an object with unknown type, then cast it to the "User" interface and log the email if it exists.

interface User {
id: number;
email?: string;
}

const unknownUser: any = {
  id: 1,
  email: "test@example.com"
};

const user = unknownUser as User;

console.log(user.email ?? "Email not available");
// Expected Output: "test@example.com"