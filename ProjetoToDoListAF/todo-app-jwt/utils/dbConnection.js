import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL;

//Verificação

if(!DATABASE_URL) {
    throw new Error('Variável de ambiente DATABASE_URL .env.local');
}

const connectMongo = async() => {
    mongoose.connect(DATABASE_URL)
    .then('Conectado ao MongoDB')
    .catch(err => console.error(err));
}
    
export default connectMongo;

