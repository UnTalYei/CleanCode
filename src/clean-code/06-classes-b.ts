(() => {
    //NO Aplicando el principio de responsabilidad única
    type Gender = 'M'|'F'

    interface PersonProps {
        name      : string, 
        gender    : Gender, 
        birthdate : Date
    }
    class Person {
        public birthdate : Date;
        public gender    : Gender; 
        public name      : string;

        constructor({name, gender, birthdate}: PersonProps) { 
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        birthdate : Date
        email     : string, 
        gender    : Gender,
        name      : string,
        role      : string,
    }
    class User extends Person {
        public lastAccess : Date;
        public email      : string;
        public role       : string;

        constructor( {birthdate, email, gender, name, role}:UserProps) {
            super( { name, gender, birthdate } );
            this.email = email;
            this.role  = role;
            
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true; 
        }
    }
    
    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender; 
        lastOpenFolder   : string; 
        name             : string; 
        role             : string;
        workingDirectory : string;
    }
    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string; 
        constructor( {
                workingDirectory, 
                lastOpenFolder, 
                email, 
                role, 
                name, 
                gender, 
                birthdate}:UserSettingsProps ) 
        {
            super( {email, role, name, gender, birthdate} );
            this.workingDirectory = workingDirectory; 
            this.lastOpenFolder = lastOpenFolder;
        }
    }
    
    const userSettings = new UserSettings({
        birthdate: new Date('1998-02-23'),
        email: 'yeison@google.com',
        gender: 'M',
        lastOpenFolder:'/home',
        name: 'Yeison',
        role:'Admin',
        workingDirectory: './usr/home'
    });
    console.log('userSettings :>> ', userSettings);
    // const newPerson = new Person('Yeison', 'M',new Date('1998-02-23') )
    // console.log({ newPerson });



})();