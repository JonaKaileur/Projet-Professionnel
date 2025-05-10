const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/',{
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

  const Membres = mongoose.model('Membre',membreShema);

  app.get('/membres',function(req,res){
    Membres.find({},function(err,membres){
      if (err) throw err;
      res.json(membres);
    })
  })


  app.post('/membres',function(req,res){
    const nouveauMembre = new Membres(req.body);
    nouveauMembre.save();
    res.json(nouveauMembre);
  })

app.listen(3000,() => console.log("Serveur API sur http://localhost:3000"));
