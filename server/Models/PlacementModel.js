import mongoose from "mongoose";

const PlacementModel = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: String,
    cate: String,
    firstname: String,
  },
  {
    timestamps: true,
  }
);

var PlacementModel = mongoose.model("placements", placementSchema);
export default PlacementModel;