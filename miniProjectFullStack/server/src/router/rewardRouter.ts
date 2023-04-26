import express, { Router, Request, Response, NextFunction } from "express";
import RewardController from "../controller/rewardControl";

const routerReward = Router();
routerReward.get("/", RewardController.renderReward);
routerReward.post("/creatReward", RewardController.creatReward);
routerReward.post("/deleteById", RewardController.deleteById);
routerReward.delete("/deleteAll", RewardController.deleteAll);
routerReward.patch("/editReward", RewardController.editReward);
export default routerReward;
