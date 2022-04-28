function Staff(firstName, secondName, role, id = null) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.role = role;
    this.id = id;
}

function Animal(name, species, gender, id = null) {
    this.name = name;
    this.species = species;
    this.gender = gender;
    this.id = id;
}

const staffHeaders = ['id', 'firstName', 'secondName', 'role']
const animalHeaders = ['id', 'staff', 'name', 'species', 'gender']

function renderAnimalTable(animal, containerElement) {
    const tableManager = new TableManager();
    const table = tableManager.createTable(animalHeaders, animal);
    containerElement.replaceChildren(table);
}

function renderStaffTable(staff, containerElement) {
    const tableManager = new TableManager();
    const table = tableManager.createTable(staffHeaders, staff);
    containerElement.replaceChildren(table);
}
