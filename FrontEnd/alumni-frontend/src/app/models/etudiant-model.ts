import{Schema,model} from 'mongoose'


export class Etudiant{


     etudientShema = new Schema({
        id: String,
        nom: String,
        prenom: String,
        promotion: String,
        telephone: String,
        mail: String,
        dateNaissance: String,

  });           
  
  }

