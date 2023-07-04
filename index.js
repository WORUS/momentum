
const showTime = () => {
    const currentTime = document.querySelector(".current-time");
    
    setInterval(() => {
        let date = new Date();
        const fixedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        currentTime.textContent = fixedDate;
    }, 1000);
}
const setUserName = () => {
    const input = document.querySelector(".user-name");
    input.value = localStorage.getItem("username");

}
const handleKeyDown = (event) => {
    if(event.code === "Enter"){         //=== сравнение типа данных
        localStorage.setItem("username", event.currentTarget.value);

    }
    
}

showTime();
setUserName();

const input = document.querySelector(".user-name");
input.onkeydown = handleKeyDown;