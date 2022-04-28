(function() {
    const dataTable = document.querySelector('#data-table');
    const dataForm = document.querySelector('#data-form');

    function createAnimalFromFormObj(dataObject) {
        const animal = new Animal(dataObject.name, dataObject.staff, dataObject.species, dataObject.gender, dataObject.id);
        return animal;
    }

    function create() {
        const formData = new FormData(dataForm);
        const formDataObject = Object.fromEntries(formData.entries());

        setStatus('PREPARING POST REQUEST');
        
        fetch('https://jsonplaceholder.typicode.com/animal', {
            method: 'POST',
            body: JSON.stringify(createAnimalFromFormObj(formDataObject)),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response => {
            setStatus('RECEIVED RESPONSE');
            if (response.ok) return response.json();
            else throw new Error('Uh oh, something went wrong...');
        })
          .then(animal => {
            setStatus('RENDERING TABLE');
            renderAnimalTable([animal], dataTable);
            setStatus('RESPONSE RENDERED INTO TABLE');
        })
          .catch(error => {
            setStatus('ERROR ENCOUNTERED');
            handleError(error);
        });
    }

    function handleFormSubmission(event) {
        event.preventDefault(); 
        create();
    }

    // initialise an event listener for submit events on the form
    dataForm.addEventListener('submit', handleFormSubmission);
})();