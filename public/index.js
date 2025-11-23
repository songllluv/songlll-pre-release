function showDialog(type,msg){
    let Dialog = document.createElement("div");
    Dialog.id = "dialog";
    Dialog.innerHTML = `
<h1>${type}</h1>
<p>${msg}</p>
`;
    document.body.appendChild(Dialog);
}
