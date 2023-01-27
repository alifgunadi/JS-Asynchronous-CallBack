fetch("https://jsonplaceholder.typicode.com/users").then((data) =>{
    // console.log(data);       // ngecek json format
    return data.json();
}).then((objectData) => {
    console.log(objectData);
    let tableData = "";
    objectData.map((values) => {
        tableData += `
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.username}</td>
        <td>${values.email}</td>
        <td>${values.address.street}, ${values.address.suite}, ${values.address.city}</td>
        <td>${values.company.name}</td>
    </tr>`;
    });
    document.getElementById("data-output").innerHTML = tableData;
});






