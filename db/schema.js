const { gql } = require('apollo-server');

//schema
const typeDefs = gql`
    type Usuario {
        id: ID
        nombre: String
        apellido: String
        email: String
        creado: String
    }
    type Query {
        obtenerCurso: String
    }

    type Mutation {
        nuevoUsuario(input: UsuarioInput) : Usuario
    }

    input UsuarioInput {
        nombre: String!
        apellido: String!
        email: String!
        password: String!
    }
`;

module.exports = typeDefs;