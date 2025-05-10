export class Etudiant {
    
    constructor(id: number,
            nom: string,
            prenom: string,
            obtentiondiplome: string
            ){
            this.id = crypto.randomUUID().substring(0,8);
            console.log(this);
            }
    //email: string;
    //dateNaissance: Date;
    //telephone?: string; // Option
    //adresse?: string; // Option
}