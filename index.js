function submitData(name, email) {
    return fetch(`http://localhost:3000/users`, {
        method: `POST`,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const newID = document.createElement(`div`);
        newID.textContent = `ID: ${data.id}`;
        document.body.appendChild(newID);
    })
    .catch(error => {
        console.error("Error:", error);
        const errorMessage = document.createElement(`div`);
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);
    });
}
