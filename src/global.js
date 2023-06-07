/* eslint-disable prettier/prettier */
export class Global {

    constructor(user){
        user = user;
    }
    setUser = function (valor) {
        this.user = valor;
    };
    getUser = function(){
        return this.user;
    };
}
