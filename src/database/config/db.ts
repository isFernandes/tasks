import mongoose from "mongoose";

class ConnectDatabase {
  private readonly mongoURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

  conn() {
    mongoose
      .connect(this.mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log("connection with database: OK!");
      })
      .catch((error) => {
        console.log("database error: ", error);
      });
  }
}

export { ConnectDatabase };
