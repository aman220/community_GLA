import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import MessageRoute from './Routes/MessageRoute.js'
import UploadRoute from './Routes/UploadRouter.js'
import ChatRoute from './Routes/ChatRoute.js'
import ProjectsRoute from './Routes/ProjectsRoute.js'
import AnnounceRoute from './Routes/AnnounceRoute.js'
import PlacementRoute from './Routes/PlacementRoute.js'

// Routes

const app = express();




// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

// to serve images inside public folder
app.use(express.static('public')); 
app.use('/images', express.static('images'));

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));


  // usage of routes
  app.use('/auth', AuthRoute);
  app.use('/user', UserRoute);
  app.use('/post', PostRoute);
  app.use('/chat', ChatRoute);
  app.use('/message', MessageRoute);
  app.use('/upload',UploadRoute);
  app.use('/projects', ProjectsRoute);
  app.use('/announce', AnnounceRoute);
  app.use('/placements', PlacementRoute);