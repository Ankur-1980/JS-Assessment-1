// constructor instantiates the object
// it gives us immediate access to whatever is inside the contructor

class GroceryStore {
	constructor() {
		// need a place to store the items
		this.list = [];
	}
	// get the grocery list. Don't make it harder than it needs to be
	getGroceryList() {
		return this.list;
	}

	// input an item and return the price
	getItems(name) {
		// find needs a function to know what to look for
		// x is a placeholder variable for the array
		// looks for array.item and sees if it matches the input
		const getItem = this.list.find(x => x.item === name);
		return `The price of ${name} is ${getItem.price}`;
	}

	// add items to the list
	// this example we are doing it the hard way
	// {item: 'apples', price: 5.00}
	addItems(name) {
		// pushed the input into the array (this.list)
		this.list.push(name);
	}

	// remove items from the list
	removeItems(name) {
		//same as aboce look inside the array to find input
		const getItem = this.list.find(x => x.item === name);
		// use that information to find the index number of the item
		const index = this.list.indexOf(getItem);
		// splice starts at the index we just found
		// and deletes that item
		return this.list.splice(index, 1);
	}

	// increase the price of an item
	increasePrice(name) {
		// use the function above to get item
		const itemToGet = this.getItems(name);
		// use that to get the index
		const index = this.list.indexOf(itemToGet);
		// changes the price of that index
		// it starts as a string, we need to convert to to a number
		// then we need to convert it back to a string so the data is all the same
		// add the decimal points to match everything else
		return (this.list[index].price = String(Number(itemToGet.price) + 1) + '.00');
	}
}

const walmart = new GroceryStore();
walmart.addItems({ item: 'cake', price: '3.00' });
walmart.addItems({ item: 'pop', price: '5.00' });
walmart.addItems({ item: 'meat', price: '15.00' });
walmart.addItems({ item: 'ice cream', price: '6.00' });
walmart.addItems({ item: 'bread', price: '7.00' });
console.log(walmart.getGroceryList());
// console.log(walmart.getItems('ice cream'));
// console.log(walmart.increasePrice('ice cream'));
// console.log(walmart.getItems('ice cream'));
// console.log(walmart.removeItems('meat'));
// console.log(walmart.getGroceryList());
