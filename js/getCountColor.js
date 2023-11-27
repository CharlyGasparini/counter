const getCountColor = (count) => {
    if(count > 0) {
        value.setAttribute("style", "color: green");
    } else if(count < 0) {
        value.setAttribute("style", "color: red");
    } else {
        value.setAttribute("style", "color: black");
    }
}