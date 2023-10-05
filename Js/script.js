const contactoNombre = document.querySelector('#nombre')
const contactoAsunto = document.querySelector('#asunto')
const contactoMail = document.querySelector('#email')
const contactoTelefono = document.querySelector('#telefono')
const contactoMensaje = document.querySelector('#mensaje')
function escrib_01() {
    console.log("\x1b[34m\x1b[1m\x1b[4mSu nombre es:%2s\t\x1b[0m" + contactoNombre.value)
}
function escrib_02() {
    console.log("\x1b[34m\x1b[1m\x1b[4mSu ausnto es:\t\x1b[0m" + contactoAsunto.value)
}
function escrib_03() {
    console.log("\x1b[34m\x1b[1m\x1b[4mSu mail es:\t\x1b[0m" + contactoMail.value)
}
function escrib_04() {
    console.log("\x1b[34m\x1b[1m\x1b[4mSu telefono es:\t\x1b[0m" + contactoTelefono.value)
}
function escrib_05() {
    console.log("\x1b[34m\x1b[1m\x1b[4mSu mensaje es:\t\x1b[0m" + contactoMensaje.value)
}

/* console.log("\x1b[31m\x1b[1m Texto en Rojo\x1b[0m y \x1b[32mTexto en Verde\x1b[0m'); */

/* - Negrita
    \x1b[4m  */

console.log("%cTexto en #FF5733", "color: #FF5733;");
console.log("%cTexto en RGB(255, 87, 51)", "color: rgb(255, 87, 51);");
console.log('\x1b[31mTexto en rojo y \x1b[4msubrayado\x1b[0m');
console.log('\x1b[31m\x1b[47mTexto en rojo y \x1b[0msubrayado\x1b[7m');


contactoNombre.addEventListener('input', escrib_01);
contactoAsunto.addEventListener('input', escrib_02);
contactoMail.addEventListener('input', escrib_03);
contactoTelefono.addEventListener('input', escrib_04);
contactoMensaje.addEventListener('input', escrib_05);

/* console.log("\x1b[34m\x1b[1m\x1b[4m Su nombre es :\n\n\x1b[0m"+ contactoNombre.append)

console.log("\x1b[34m\x1b[1m\x1b[4m Su nombre es :\n\n\x1b[0m"+ contactoNombre.value)
console.log("\x1b[34m\x1b[1m\x1b[4m Su mail es :\n\n\x1b[0m"+ contactoMail.value)
console.log("\x1b[34m\x1b[1m\x1b[4m Su ausnto es :\n\n\x1b[0m"+ contactoAsunto.value)
console.log("\x1b[34m\x1b[1m\x1b[4m Su telefono es :\n\n\x1b[0m"+ contactoTelefono.value)
console.log("\x1b[34m\x1b[1m\x1b[4m Su mensaje es :\n\n\x1b[0m"+ contactoMensaje.value) 
*/
/* 
console.clear(" ")
console.clear(" ")
console.clear(" ")
console.clear(" ")
console.clear(" ") */