function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane First", lastName: "User Last" };
document.body.innerHTML = greeter(user);
