(function() {
    const dataForm = document.querySelector('#data-form');
    const id = document.querySelector('#id');

    function findById() {
        setStatus('Finding an animal to delete...')
        fetch(`http://localhost:8080/animal/${id.value}`, {
            method: 'GET'
        }).then(response => {
            if (response.ok) return response.json();
            else throw new Error('Uh oh, something went wrong...');
        })
          .then(animal => {
            confirm = window.confirm("Are you sure you want to delete " + animal.name + "?")
            if (confirm) {
                remove();
            }
        })
          .catch(error => {
            setStatus('ERROR ENCOUNTERED');
            handleError(error);
        });
    }

    function remove() {
        fetch(`http://localhost:8080/animal/${id.value}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) return response.json();
            else throw new Error('Uh oh, something went wrong...');
        }).then(json => {
            setStatus('ANIMAL DELETED');
            console.log(json);
        }).catch(error => {
            setStatus('FAILED TO DELETE ANIMAL');
            handleError(error);
        });
    }

    dataForm.addEventListener('submit', function(event) {
        event.preventDefault();
        findById();
    });

})();