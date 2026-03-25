// Define a simple interface named Storable. This interface will serve as our generic constraint and should have a single property: id of type string | number.
// Create a generic class named Repository<T>.
// Apply a generic constraint to your class to ensure that T can only be a type that has an id property. You can achieve this by making T extend the Storable interface (<T extends Storable>).
// Inside the Repository class, add a private property named items to store an array of items of type T. Initialize it as an empty array.
// Implement the following public methods in the Repository class:
// add(item: T): void: Adds a new item to the items array.
// findAll(): T[]: Returns the complete array of items.
// findById(id: string | number): T | undefined: Finds and returns an item from the array by its id. If no item is found, it should return undefined.
// To demonstrate the reusability of your generic class, define two simple interfaces that are compatible with the Storable constraint:
// User with properties: id (number), name (string).
// Product with properties: id (string), title (string), price (number).
// Instantiate two separate repositories: userRepository for User objects and productRepository for Product objects.
// Add items to both repositories and use the findAll and findById methods. Log the results to the console to verify that both repositories work correctly and maintain full type safety.

interface Storable {
  id: string | number
}

class Repository<T extends Storable> {
  private items: T[] = []

  public add(item: T): void {
    this.items.push(item)
  }

  public findAll(): T[] {
    return this.items
  }
}
