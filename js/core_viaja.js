function verificar(patron,elemento){
	if(!patron.test(elemento.value)){
		elemento.value='';
		elemento.focus();
		return 0;
	}
}