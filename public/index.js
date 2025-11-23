export function showDialog(type,msg){
    let Dialog = document.createElement("div");
    Dialog.id = "dialog";
    Dialog.innerHTML = `
<h1>${type}</h1>
<p>${msg}</p>
`;
    document.body.appendChild(Dialog);
    setTimeout(() => {
        Dialog.style.opacity = '0';
    }, 1500);
    setTimeout(() => {
        document.body.removeChild(Dialog);
    }, 2000);
}