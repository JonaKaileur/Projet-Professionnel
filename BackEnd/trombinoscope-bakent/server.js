const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
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


  app.post('/Membres/test',async(req,res) =>{
 
       const nouveauMembre = new Membres(req.body)
    await nouveauMembre.save();
    //res.json(nouveauMembre);
    res.send('nouveau membre ajouté')
  
   
  });

app.listen(3000,() => console.log("Serveur API: http://localhost:3000/Membres"));
