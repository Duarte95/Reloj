const dolar = document.querySelector('.dolar');
const bolivar = document.querySelector('.bolivar');
const punto = document.querySelector('.punto');
const tasa = document.querySelector('.tasa');
const monto = document.querySelector('.montoDolar');
const calcular = document.querySelector('.calcular');

let tasaDelDia;

tasaDelDia = prompt('¿Cual es la tasa del dia?');

tasa.value = parseInt(tasaDelDia);

//calcular
function calculo(){
  if (dolar.readOnly === false) {
    console.log('valor');
  }else{
  dolar.value = monto.value;
  bolivar.value = monto.value * tasa.value;
  punto.value = monto.value * tasa.value;
  }
}
calcular.addEventListener('click', ()=>{calculo()});
//editar
const editar = document.querySelector('.editar');
const guardar = document.querySelector('.guardar');
editar.addEventListener('click', ()=>{
  tasa.readOnly = false;
  tasa.focus();
  guardar.style.display = 'block';
});

guardar.addEventListener('click', ()=>{
  tasa.readOnly = true;
  guardar.style.display = 'none';
  calculo();
});

//fragmento
const fraccion = document.querySelector('.fraccion');
fraccion.addEventListener('click', ()=>{
  dolar.readOnly = false;
  dolar.focus();
  bolivar.value, punto.value = (monto.value - dolar.value) * tasa.value;
});