import mongoose from "mongoose";

const projectsSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: String,
    desc: String,
    tech:String,
    req:String,
  },
  {
    timestamps: true,
  }
);

var projectsModel = mongoose.model("Projects", projectsSchema);
export default projectsModel;