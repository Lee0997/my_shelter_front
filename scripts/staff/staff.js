function Staff(firstName, secondName, role, id = null) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.role = role;
    this.id = id;
}

const staffHeaders = ['id', 'firstName', 'secondName', 'role']
const animalHeaders = ['id', 'staff', 'name', 'species', 'gender']

function renderStaffTable(staff, containerElement) {
    const tableManager = new TableManager();
    const table = tableManager.createTable(staffHeaders, staff);
    containerElement.replaceChildren(table);
}
