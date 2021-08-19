var userName=prompt("Who's there?" ,'');
    if (userName === "Admin") {
        let pass = prompt("password?", '')
        if (pass === "TheMaster") {
            alert("Wellcome");
        } else if (pass === null) {
            alert("Canceled")
        } else {
            alert("Wrong password");
        }
    } else if (userName === null) {
        alert('Canceled');
    } else {
        alert("I don't know you");
    }

