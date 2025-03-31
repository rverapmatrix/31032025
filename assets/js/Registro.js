class Registro{

    constructor(nombre,apPaterno,apMaterno,carnet,fechaNac,sexo,celular,lugar, polera,consulta,souvenir){
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.carnet = carnet;
        this.fechaNac = fechaNac;
        this.sexo = sexo;
        this.celular = celular;
        this.lugar = lugar;
        this.polera = polera;
        this.consulta = consulta;
        this.souvenir = souvenir;
    }

    getYear(){
        let year = Date(this.fechaNac).getYear;
        let yearNow = Date().getYear;
        return yearNow - year;
    }
    pagoTotal(){
        let monto = 0;
        if(this.lugar=="1"){
            monto+=350;
        }if(this.lugar=="2"){
            monto+=200;
        }if(this.lugar=="3"){
            monto+=100;
        }if(this.polera!="undefined"){
            monto+=100;
        }
        if(this.consulta!="undefined"){
            monto+=80;
        }
        if(this.souvenir!="undefined"){
            monto+=50;
        }

        return monto;
    }
}