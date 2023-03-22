const btnPrint = document.querySelector("#btnPrint");
const table = document.querySelector("#table").innerHTML;

btnPrint.addEventListener("click", () => {
    let win = window.open("", "", "heigth=500, width:500");
    window.print();
    win.close();
});
