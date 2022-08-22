export function cantidadCaracteres(input){
    if( input.value.trim().length >= 3 && input.value.trim().length <=50 ){
        console.log('dato valido');
        input.className = 'form-control is-valid';
        return true;
    }else{
        console.log('dato invalido');
        input.className = 'form-control is-invalid';
        return false;
    }
}

// xxxxxxxxxx@xxxxxxx.xxx.LLLL 

export function validarEdad(input){
    let patron = /^[0-9]{1,3}$/;
    if(patron.test(input.value) && input.value <= 130){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarDNI(input){
    let expReg = /^[\d]{7,8}$/;
    if(expReg.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarAltura(input){
    let expReg=/^[0-2](\,[\d]{1,2})?$/;
    if(expReg.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
    
}

export function validarGenero(input){
    if(input.selectedIndex!=0){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarPeso(input){
    let expReg=/^[\0-9]{1,3}?$/;
    if(expReg.test(input.value) && input.value >= 3){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
    
}

export function validarFechaNacimiento(input){
    let expReg=/^[\0-9]{4}$/;
    if(expReg.test(input.value) && input.value >= 1905 && input.value <= 2022){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
    
}

