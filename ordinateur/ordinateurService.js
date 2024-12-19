var ordinateur = require('./ordinateurModel')
async function list(req,res,next){
    await ordinateur.find()
              .then((data,err)=>{
                if(err){
                    res.status(500).json(err)
                }
                    res.status(200).json(data)
              })
    //res.end('ordinateur List')
}

const create =async (req,res,next)=>{
    const { modele,categorie,dateFabrication,prix } = req.body 
    console.log(req.body.modele);
    console.log(req.params);
    await new ordinateur({
        modele: modele,
        categorie: categorie,
        dateFabrication: dateFabrication,
        prix: prix
    }).save()
      .then((data, err)=>{
          if(err){
              res.status(500).json(err)
            }
            console.log(data);
      })
    
res.json('ordinateur added ! modele : '+ modele + ' categorie : '+ categorie+ ' dateFabrication : '+ dateFabrication+ 'prix:'+prix)
}

const update = async (req, res, next)=>{
    await ordinateur.findByIdAndUpdate(req.params.id, req.body)
              .then((data, err)=>{
                res.json(data)
              })
}

async function deleteO(req, res, next) {
    await ordinateur.findByIdAndDelete(req.params.id)
              .then((data, err)=>{
                if(err){
                    res.status(500).json(err)
                }
                    res.status(200).json(data)
              })
}

const searchByPrice = async (req, res, next) => {
    const { prixMin, prixMax } = req.query;

    if (!prixMin || !prixMax) {
        return res.status(400).json({ message: 'Les paramètres prixMin et prixMax sont requis.' });
    }

    try {
        const resultats = await ordinateur.find({
            prix: { $gte: Number(prixMin), $lte: Number(prixMax) },
        });

        res.status(200).json(resultats);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur.', error: err });
    }
};


module.exports = { create, list, update, deleteO,searchByPrice }