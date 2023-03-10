const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("EventDias", () => console.log("Buenos dias!"));
emitter.on("EventTardes", () => console.log("Buenas tardes!"));
emitter.on("EventNoches", () => console.log("Buenas noches!"));


// Obtener fecha
let date_ob = new Date();
// Fecha actual
let date = ("0" + date_ob.getDate()).slice(-2);
// Mes actual
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// Año actual
let year = date_ob.getFullYear();
// Hora actual
let hours = date_ob.getHours();
// Minutos actuales
let minutes = date_ob.getMinutes();
// Segundos actuales
let seconds = date_ob.getSeconds();
// Imprimir fecha en formato: YYYY-MM-DD 
console.log(year + "-" + month + "-" + date);
// Imprimir fecha y hora en formato: YYYY-MM-DD HH:MM:SS
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
// Imprimir hora en formato HH:MM
console.log(hours + ":" + minutes);

if (hours>=0 && hours <12) emitter.emit("EventDias");
if (hours>=12 && hours <19) emitter.emit("EventTardes");
if (hours>=19 && hours <=23) emitter.emit("EventNoches");

