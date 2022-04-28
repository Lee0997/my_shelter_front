(function() {
const dataForm = document.querySelector("#data-form");
const id = document.querySelector("#id");
const dataTable = document.querySelector("#data-table");

function createAnimalFromFormObj(dataObject) {
  const animal = new Animal(
    dataObject.name,
    dataObject.species,
    dataObject.gender,
    dataObject.id
  );
  return animal;
}

function update() {
  const formData = new FormData(dataForm);
  const formDataObject = Object.fromEntries(formData.entries());

  fetch(`http://localhost:8080/animal/${id.value}`, {
    method: "PUT",
    body: JSON.stringify(
      createAnimalFromFormObj(formDataObject),
      console.log(formDataObject)
    ),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      setStatus("RECEIVED RESPONSE");
      if (response.ok) return response.json();
      else throw new Error("Uh oh, something went wrong...");
    })
    .then((animal) => {
      setStatus("RENDERING TABLE");
      renderAnimalTable([animal], dataTable);
      setStatus("RESPONSE RENDERED INTO TABLE");
    })
    .catch((error) => {
      handleError(error);
    });
}

dataForm.addEventListener("submit", function (event) {
  event.preventDefault();
  update();
});
})();