import mongoose from "mongoose";

const announceSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    AnnouneName: { type: String, required: true },
    AnnounceDesc: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

var AnnounceModel = mongoose.model("Announcements", announceSchema);

export default AnnounceModel;