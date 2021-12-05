import mongoose from 'mongoose';


class ConnectDatabase {
  constructor(private readonly mongoURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`){}

  connect(){
    mongoose.connect(this.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true 
    }).then(()=>{
      console.log('connection with database: OK!')
    }).catch((error)=>{
      console.log('database error: ')
      console.log(error)
    });
  }
}

export  = new ConnectDatabase()