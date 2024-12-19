var Batiment = require('./batimentModel')
async function list(req,res,next){
    await Batiment.find()
              .then((data,err)=>{
                if(err){
                    res.status(500).json(err)
                }
                    res.status(200).json(data)
              })
    //res.end('Batiment List')
}

const create =async (req,res,next)=>{
    const { nomB, emailB ,ageB} = req.body 
    console.log(req.body.nomB);
    console.log(req.params);
    await new Batiment({
        nomB: nomB,
        emailB: emailB,
        ageB: ageB
    }).save()
      .then((data, err)=>{
          if(err){
              res.status(500).json(err)
            }
            console.log(data);
      })
    
res.json('Batiment added ! nomB : '+ nomB + ' emailB : '+ emailB+ ' ageB : '+ ageB)
}

const update = async (req, res, next)=>{
    await Batiment.findByIdAndUpdate(req.params.id, req.body)
              .then((data, err)=>{
                res.json(data)
              })
}

async function deleteB(req, res, next) {
    await Batiment.findByIdAndDelete(req.params.id)
              .then((data, err)=>{
                if(err){
                    res.status(500).json(err)
                }
                    res.status(200).json(data)
              })
}

module.exports = { create, list, update, deleteB }