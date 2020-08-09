import express from "express";
import { shortener } from "../utils/helpers";
import ShortUrl from "../models/shorturl.schema";

const router = express.Router();
export default () => {
  router
    .route("/short-url")
    .get(async (req, res) => {
      try {
        const response = await ShortUrl.find();
        return res.status(200).json({
          message: "List of shortened urls",
          success: true,
          data: response,
        });
      } catch (e) {
        res.status(500).json({
          message: "An error occurred getting list",
          success: false,
          error: e.message,
        });
      }
    })
    .post(async (req, res) => {
      try {
        const exists = await ShortUrl.findOne({ long: req.body.url }).exec();

        if (exists) {
          return res.status(409).json({
            message: "URL already exists",
            success: false,
          });
        }
        // Here's where the shortening logic happens
        let body = {
          long: req.body.url,
          short: `${process.env.APP_URL}/${shortener()}`,
        };
        const response = await ShortUrl.create(body);
        return res.status(201).json({
          message: "Url shortened successfully",
          success: true,
          data: response,
        });
      } catch (e) {
        res.status(500).json({
          message: "An error occurred",
          success: false,
          error: e.message,
        });
      }
    });
  return router;
};
