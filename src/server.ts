import express from 'express';
import mongoose from 'mongoose';
const router = require("./routes");
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

//connection db
mongoose.connect('mongodb+srv://user:a5b4cd@simplecrud.4a9c9.mongodb.net/teste?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
});

app.listen(process.env.PORT || 3333);
