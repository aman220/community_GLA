import AnnounceModel from "../Models/announceModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";


// create announcement
export const createAnnouncement = async (req, res) => {
  const newAnnouncement = new AnnounceModel(req.body)

  try {
    await newAnnouncement.save()
    res.status(200).json(newAnnouncement)
  }
  catch (error) {
    res.status(500).json(error)
  }
}

export const getAnnouncement = async (req, res) => {
  const id = req.params.id

  try {
    const announcement = await AnnounceModel.findById(id)
    res.status(200).json(announcement)
  }
  catch (error) {
    res.status(500).json(error)
  }
}

// delete announcement
export const deleteAnnouncement = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const announcement = await AnnounceModel.findById(id)
    if (announcement.userId === userId) {
      await announcement.deleteOne();
      res.status(200).json("Announcement deleted successfully");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


// get timeline announcement
export const getTimelineAnnounc = async (req, res) => {
  const userId = req.params.id

  try {
    const currentUserAnnounc = await AnnounceModel.find({ userId: userId })
    const followingAnnounc = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId)
        }
      },
      {
        $lookup : {
          from : "announcements",
          localField: "following",
          foreignField: "userId",
          as : "followingAnnounc"
        }
      },
      {
        $project: {
          followingAnnounc : 1,
          _id : 0
        }
      }
    ])

    res.status(200).json(currentUserAnnounc.concat(...followingAnnounc[0].followingAnnounc)
    .sort((a,b)=>{
      return b.createdAt - a.createdAt;
    }))

  } catch (error) {
    res.status(500).json(error)

  }
}