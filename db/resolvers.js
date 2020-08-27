const Usuario = require('../models/Usuario');

//resolver
const resolvers = {
    Query:{
        obtenerCurso: () => "Algo"
    },
    Mutation: {
            nuevoUsuario: async(_, {input} ) => {
                
                const {email, password} = input;

                const existeUsuario = await Usuario.findOne({email});
                if (existeUsuario){
                    throw new Error('El usuario ya esta registrado');
                }

                try{
                    const usuario = new Usuario(input);
                    usuario.save();
                    return usuario;
                } catch(error){
                    console.log(error);
                }
            }
            //
            
            
        }
}

module.exports = resolvers;