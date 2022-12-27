let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let empId = document.querySelector('.empId');
let position = document.querySelector('.position');
let add = document.querySelector('.add');

// Created an Empty Object
const employees = {
    fName: "",
    lName: "",
    id: "",
    post: ""
}

//   This is Also one Type of Displaying The Data which are Inputed in a form

// add.addEventListener("click", (fName, lName, id, post) => {
//     var myWindow = window.open("", "MsgWindow", "width=600,height=800");
//     employees['fName'] = firstName.value;
//     employees['lName'] = lastName.value;
//     employees['id'] = empId.value;
//     employees['post'] = position.value;
//     let text = "";
//     for (let x in employees) {
//         text += employees[x] + "<br>";
//     };
//     myWindow.document.write(text);

// });


// onClick event the Data in the Input will be stored in the Empty Object and then will be displayed in another windows 

add.addEventListener("click", () => {
    // const para = document.createElement("p");
    // const node = document.createTextNode("Kia Chal Raha ha Bhai?")
    // para.appendChild(node);

    //Here we created variable in which we opened a new window
    var myWindow = window.open("", "MsgWindow", "width=600,height=720");
    const dispEmp = document.getElementById('dispEmployee');

    // Getting Data From the Input Form and then rendering it through for loop 
    employees['fName'] = firstName.value;
    employees['lName'] = lastName.value;
    employees['id'] = empId.value;
    employees['post'] = position.value;
    let text = "";
    for (let x in employees) {
        text += employees[x] + "<br>";
    };

    // Displaying the Data which we got from the Input in a form
    // We are Displaying it in a new Window Tab
    myWindow.document.write(
        `<div style="border: 1px solid black; border-radius: 10px; padding: 20px 10px; text-align: center; text-transform: uppercase;">
        <h1>${text}</h1>
        </div>`
    );
});