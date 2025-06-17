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


  const etudiantShema = new mongoose.Schema({
    nom: String,
    prenom: String,
    promotion: String,
    telephone: String,
    mail: String,
    dateNaissance: String,

  });

  const postShema = new mongoose.Schema({
    name_user : String,
    titre: String,
    description : String,
    imageurl: String,
    date : Date,
    link : String,
    nblike: Number
  })

  const Etudiant = mongoose.model('etudiant',etudiantShema);
  const Post = mongoose.model('Post',postShema);

  app.get('/Etudiant',async(req,res) =>{
    try{
      const etudiant = await Etudiant.find();
      res.json(etudiant);
    } catch (error){
      res.status(500).json({message: 'Erreur serveur'});
    }
    
   
  });

  app.get('/', (req, res) => {
  res.redirect('/Etudiant'); // ou /Etudiants selon ta config
  });


  app.get('/Etudiant/:id',async(req,res) => {
    try{
      const etudiant = await Etudiant.findById(req.params.id);
      console.log(etudiant)
      if(!etudiant){
        return res.status(404).json({message:'Etudiant non trover !!!'});
      }
      res.json(etudiant);   
    }catch(error){
      res.status(500).json({message: 'Erreur serveur',error});
    }
  });


  app.post('/Etudiant/post',async(req,res) =>{
 
       const nouveauEtudiant = new Etudiant(req.body)
    await nouveauEtudiant.save();
    //res.json(nouveauEtudient);
    res.send('nouvelle étudiant ajouté');
  
   
  });

  app.get('/Post',async(req,res) =>{
    try{
      const post = await Post.find();
      res.json(post);
    } catch (error){
      res.status(500).json({message: 'Erreur serveur'});
    }
  });

  app.get('/Post/:id',async(req,res) => {
    try{
      const post = await Post.findById(req.params.id);
      console.log(post)
      if(!post){
        return res.status(404).json({message:'Post non trover !!!'});
      }
      res.json(post);   
    }catch(error){
      res.status(500).json({message: 'Erreur serveur',error});
    }
  });

  app.post('/Post/post',async(req,res) =>{
 
       const nouveauPost = new Post(req.body)
    await nouveauPost.save();
    //res.json(nouveauPost);
    res.send('Post ajouté');
  
   
  });


app.listen(3000,() => console.log("Serveur API: http://localhost:3000"));