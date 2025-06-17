export class Poste{

    constructor(public id : string,
                public name_user: string, 
                public titre: string,
                public description: string,
                public imageurl: string,
                public date: Date,
                public link: string = '',
                public nblike: number = 0               
                ){
                  
                }

  }

