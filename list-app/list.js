var todos = ["yeet"];

window.setTimeout(function () {
    var input = prompt("Enter a command");


    while (input !== "quit") {
        if (input === "list") {
            console.log(todos);
        }
        else if (input === "new") {
            var newTodo = prompt("Enter new item");
            todos.push(newTodo);
        }
        input = prompt("Enter a command");
    }
    console.log("App terminated.")

}

    , 500);
