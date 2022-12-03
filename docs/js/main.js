window.onload = function () {
    setInterval(() => {
        let unix = Math.floor(Date.now() / 1000);
        let bin = unix.toString(2);
        let val = ("00000000000000000000000000000000" + bin).slice(-32);
        document.querySelector("#_main").textContent = val;
    }, 500);
};