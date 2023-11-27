const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");
let count = 0;

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
            value.textContent = count;
        } else if(styles.contains("increase")){
            count++;
            value.textContent = count;
        } else {
            count = 0;
            value.textContent = count;
        }
        getCountColor(count);
    })
})