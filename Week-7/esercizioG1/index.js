class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  ageCompare(y) {
    if (this.age > y.age) {
      return this.firstName + " è più vecchio di " + y.firstName;
    }
    if (y.age > this.age) {
      return y.firstName + " è più vecchio di " + this.firstName;
    } else {
      return this.firstName + " è un coeataneo di " + y.firstName;
    }
  }
}

const utenteX = new User("Jimmy", "Black", 18, "L.A.");
const utenteY = new User("Billy", "White", 20, "Chicago");

console.log(utenteX.ageCompare(utenteY));

///////////////////////////////////////////////////////////////////

const nameIn = document.getElementById("name");
const ownerIn = document.getElementById("owner");
const speciesIn = document.getElementById("species");
const breedIn = document.getElementById("breed");
const petList = document.getElementById("petList");
let ownArray = [];

class Pet {
  constructor(name, owner, species, breed) {
    this.name = name;
    this.owner = owner;
    this.species = species;
    this.breed = breed;
    this.same = "";
  }
  sameOwn() {
    if (ownArray.includes(this.owner)) {
      this.same = true;
    }
  }
  print() {
    return (
      this.name +
      ", " +
      this.owner +
      ", " +
      this.species +
      ", " +
      this.breed +
      " " +
      this.same
    );
  }
}

function addPet() {
  const add1 = new Pet(
    nameIn.value,
    ownerIn.value,
    speciesIn.value,
    breedIn.value
  );

  add1.sameOwn();
  ownArray.push(add1.owner);

  let newPet = document.createElement("li");
  newPet.innerText = add1.print();
  petList.appendChild(newPet);
  nameIn.value = "";
  ownerIn.value = "";
}
