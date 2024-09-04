import mongoose from "mongoose"

const DATABASE_URL = preocess.env.DATABASE_URL;

const connectMongo = async() => {
    mongoose.connect(DATABASE_URL)
       .then(() => console.log('Conectado ao MongoDB'))
       .catch(err => console.error('Erro ao conectar ao MongoDB', err));
}

export default connectMongo;