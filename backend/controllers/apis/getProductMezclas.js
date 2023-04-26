const modeloMezcla = require('../../model/modelMezclas')

const mostrarMezcla = async ()=>{

    const mezcla = await modeloMezcla.find();    
    return mezcla;
}

const getProductoMezcla = async (req,res)=>{
    res.end(JSON.stringify(await mostrarMezcla()));

}

module.exports = getProductoMezcla