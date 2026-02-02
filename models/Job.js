const { required } = require("joi");
const mongooose = require("mongoose");

const JobSchema = new mongooose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company length"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 200,
    },
    status: {
      type: String,
      enum: ["interview", "declinde", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongooose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true },
);

module.exports = mongooose.model("Job", JobSchema);
