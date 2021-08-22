
let login = prompt("Mời bạn nhập", '');
let massage = (login === "Employee") ? "Hello" : (login === "Director") ? "Greetings" : (login ==="") ? "No login" : "";
alert(massage)