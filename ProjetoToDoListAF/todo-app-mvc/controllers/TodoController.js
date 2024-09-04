import Todo from "@/models/Todo";
import connectionMongo from "@/utils/dbConnect";

//Criar o CRUD

// Read

export const getTodos = async ()=> {
    await connectionMongo();
    try {
        return await Todo.find();
    } catch (error) {
        console.error(error);
    }
};

// Create

export const creatTodo = async (data)=> {
    await connectionMongo();
    try {
        return await Todo.create(data);
    } catch (error) {
        console.error(error);
    }
};

// Update

export const updateTodo = async (id, data)=> {
    await connectionMongo();
    try {
        return await Todo.findByIdAndUpdate(id, data, { new: true,
            runValidators: true,
         });
    } catch (error) {
        console.error(error);
    }
};

// Delete

export const deleteTodo = async (id)=> {
    await connectionMongo();
   
        return await Todo.deleteOne({_id:id});
 
};