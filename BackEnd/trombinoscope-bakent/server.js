const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Trombinoscope',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
    console.log("bdd connecté");
  })
  .catch((err) => {
    console.log("erreur de co a bdd !!!");
  })


  const membreShema = new mongoose.Schema({
    nom: String,
    prenom: String,
    mail: String,
    poste: String,

  });

  const Membres = mongoose.model('Membres',membreShema);

  app.get('/Membres',async(req,res) =>{
    try{
      const membres = await Membres.find();
      res.json(membres);
    } catch (error){
      res.status(500).json({message: 'Erreur serveur'})
    }
    
   
  });


  app.post('/Membres',async(req,res) =>{
 
       const nouveauMembre = await Membres({
        nom : 'test',
        prenom:'user',
        mail: 'mail',
        poste:'poste'
       });
    await nouveauMembre.save();
    res.json(nouveauMembre);
  
   
  });

app.listen(3000,() => console.log("Serveur API sur http://localhost:3000/Membres"));
