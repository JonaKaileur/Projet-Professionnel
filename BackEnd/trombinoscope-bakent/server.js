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


  const etudientShema = new mongoose.Schema({
    nom: String,
    prenom: String,
    promotion: String,
    telephone: String,
    mail: String,
    dateNaissance: String,

  });

  const Etudient = mongoose.model('etudient',etudientShemaShema);

  app.get('/Etudient',async(req,res) =>{
    try{
      const etudient = await Etudient.find();
      res.json(etudient);
    } catch (error){
      res.status(500).json({message: 'Erreur serveur'})
    }
    
   
  });


  app.post('/Etudient/post',async(req,res) =>{
 
       const nouveauEtudient = new Etudient(req.body)
    await nouveauEtudient.save();
    //res.json(nouveauEtudient);
    res.send('nouvelle étudient ajouté')
  
   
  });

app.listen(3000,() => console.log("Serveur API: http://localhost:3000/Etudient"));
