export class Poste{

    constructor(public _id ?: string ,
                public name_user: string = '', 
                public titre: string = '',
                public description: string='',
                public imageurl: string='',
                public date: Date= new Date,
                public link: string = '',
                public valide: boolean = false,
                public nblike: number = 0               
                ){
                  
                }

  }

