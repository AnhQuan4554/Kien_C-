import mongoose from "mongoose";
const rewardSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  voucher: {
    type: String,
  },
  exprired: {
    type: String,
  },
  activeDate: {
    type: String,
  },
  status: {
    type: String,
  },
});
export default mongoose.model("reward", rewardSchema);
