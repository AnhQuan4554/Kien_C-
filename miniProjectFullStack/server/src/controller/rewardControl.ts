import { Request, Response } from "express";
import Reward from "../model/RewardModel";
import dotenv from "dotenv";
dotenv.config();
class RewardController {
  async renderReward(req: any, res: Response) {
    try {
      const data = await Reward.find();
      res.json({ data: data });
    } catch (error) {
      console.log(error, "loi roi");
    }
  }
  async creatReward(req: any, res: Response) {
    const day = new Date();
    const stringDay =
      `${day.getDate()} ${day.getMonth()} ${day.getFullYear()}` as string;
    try {
      const data = req.body;
      const newReward = new Reward({
        ...data,
        status: "Active",
        activeDate: stringDay,
      });
      await newReward.save();
    } catch (error) {
      console.log(error, "loi roi");
    }
  }
  async deleteById(req: any, res: Response) {
    try {
      const data = req.body;
      const { idDelete } = data;
      await Reward.findByIdAndDelete(idDelete);
      console.log("delete success");
    } catch (error) {
      console.log(error, "loi roi");
    }
  }
  async deleteAll(req: any, res: Response) {
    console.log("object");
    try {
      await Reward.deleteMany({});
      console.log("delete success All");
    } catch (error) {
      console.log(error, "loi roi");
    }
  }
  async editReward(req: any, res: Response) {
    try {
      const data = await req.body;
      // console.log(data);
      const { idItemEdit, voucher, exprired } = data;
      console.log(idItemEdit);
      const item = Reward.findById(idItemEdit);
      console.log("Item bi xoa", item);
      // await Reward.findOneAndUpdate(idItemEdit, {
      //   $set: { voucher, exprired },
      // });
      console.log("Edit success");
    } catch (error) {
      console.log(error, "loi roi");
    }
  }
}
export default new RewardController();
