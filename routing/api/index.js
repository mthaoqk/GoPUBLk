const router=require("express").Router();
const userRoutes= require("./users");
const projectsRoutes= require("./projects");

//projects routes
router.use("/projects",projectsRoutes);

//User routes
router.use("/users",userRoutes);

module.exports= router;