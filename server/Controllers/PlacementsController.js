
import mongoose from "mongoose";
import PlacementModel from "../Models/PlacementModel";

// Creat new Post
export const createPlacement = async (req, res) => {
  const newPlacement = new PlacementModel(req.body);

  try {
    await newPlacement.save();
    res.status(200).json("post created ");
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a post

// export const getProjects = async (req, res) => {
//     const id = req.params.id;
  
//     try {
//       const post = await ProjectsModel.findById(id);
//       res.status(200).json(post);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   };

//   // Update a post
// export const updateProjects = async (req, res) => {
//     const projectsId = req.params.id;
//     const { userId } = req.body;
  
//     try {
//       const post = await ProjectsModel.findById(projectsId);
//       if (post.userId === userId) {
//         await post.updateOne({ $set: req.body });
//         res.status(200).json("Post Updated");
//       } else {
//         res.status(403).json("Action forbidden");
//       }
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   };
  /// dont know bit api error 404 not found 

  // Delete a post
// export const deleteProjects = async (req, res) => {
//     const id = req.params.id;
//     const { userId } = req.body;
  
//     try {
//       const post = await ProjectsModel.findById(id);
//       if (post.userId === userId) {
//         await post.deleteOne();
//         res.status(200).json("Post deleted successfully");
//       } else {
//         res.status(403).json("Action forbidden");
//       }
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   };


//   // Get Timeline POsts
//   export const getTimelineProjects = async (req, res) => {
//     const userId = req.params.id;
  
//     try {
//       const allProjects = await ProjectsModel.find({});
      
//       res.status(200).json(
//         allProjects.sort((a,b)=>{
//           return b.createdAt - a.createdAt;
//         })
//       );
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   };
  