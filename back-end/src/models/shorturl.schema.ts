import { Document, model, Model, Schema } from "mongoose";

const shortUrlSchema = new Schema<any>(
  {
    long: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Define the schema interface here
 */
export interface IShortUrl extends Document {
  long: string;
  short: string;
}

/**
 * Export schema to model here
 */
const ShortUrl: Model<IShortUrl> = model<IShortUrl>("ShortUrl", shortUrlSchema);

export default ShortUrl;
