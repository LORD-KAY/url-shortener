import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { default as shortUrlController } from "./src/controllers/shorturl.controller";
import mongoose from "mongoose";
import ShortUrl from "./src/models/shorturl.schema";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.endpoints();
    this.mongo();
  }

  protected config(): void {
    this.app.set("PORT", process.env.PORT || 8090);
    dotenv.config({
      path: ".env",
    });
    this.app.use(
      bodyParser.json({
        limit: "1mb",
      })
    );
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    this.app.use(helmet());
    this.app.use(cors());

    this.app.use("/api/v1", shortUrlController());
  }

  protected endpoints(): void {
    this.app.get("/server/status", (req, res) => {
      res.status(200).json({
        message: "Server is up and running !!!",
      });
    });

    this.app.get("/:url", async (req, res) => {
      // const exists = await ShortUrl.findOne({ short: req.params["url"] });
      res.redirect("https://pbid.io/qut6cg4h");
    });
  }

  protected mongo(): void {
    mongoose.connect(process.env.DATABASE_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  public serve(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log(
        `Server started at url : http://localhost:${this.app.get("PORT")}`
      );
    });
  }
}
export default App;
