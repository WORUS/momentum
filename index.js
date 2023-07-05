
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
const changeBackgroundImage = () => {
    const body = document.querySelector("body");
    setInterval(() => {
        let rndImg = Math.floor(Math.random()*3 + 1);
        body.style.background = `url("../Images/${rndImg}.jpg")`;
    }, 10000);
}


showTime();
setUserName();
changeBackgroundImage();

const input = document.querySelector(".user-name");
input.onkeydown = handleKeyDown;