(() => {
    // NO Aplicando el principio de responsabilidad única
    type Gender = 'M'|'F'
    // Forma 1
    // class Person {
    //     public name     : string; 
    //     public gender   : Gender; 
    //     public birthdate: Date;

    //     constructor(name: string, gender: Gender, birthdate: Date) {
    //         this.name       = name; 
    //         this.gender     = gender;
    //         this.birthdate  = birthdate; 
    //     }
    // }

    //Forma 2
    class Person {
        constructor(public name: string, 
                    public gender: Gender, 
                    public birthdate: Date) { }
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string, 
            public role: string, 
            name: string, 
            gender: Gender, 
            birthdate: Date
        ) {
            super( name, gender, birthdate );
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true; 
        }
    }
    

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder : string, 
            email: string,
            role: string,
            name: string, 
            gender: Gender, 
            birthdate: Date
        ) {
            super( email, role, name, gender, birthdate );
        }
    }
    
    const userSettings = new UserSettings(
        './usr/home',
        '/home',
        'yeison@google.com',
        'Admin',
        'Yeison',
        'M',
        new Date('1998-02-23')
    );
    console.log('userSettings :>> ', userSettings);
    // const newPerson = new Person('Yeison', 'M',new Date('1998-02-23') )
    // console.log({ newPerson });



})();