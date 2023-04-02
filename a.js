class B {
    constructor() {
        this.pass = 123
    }

    set changePass(newPass) {
        this.pass = newPass
    }

    static getWidth() {
        return 11
    }
}



class A extends B {
    constructor() {
        super()
        this.name = 'Haider'
        this.age = 20
        this.email = 'hayderali3612@gmail.com'
    }

    getAge (){
        return ++this.age
    }

    get getEmail (){
        return this.email
    }

    set setEmail (setEmail){
        this.email = setEmail
    }
}


export {A}