import mongoose from "mongoose";

const savingSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Emergency Fund",
        "Retirement",
        "Medical",
        "Education",
        "Home Purchase",
        "Car Purchase",
        "Long Term",
        "Vacation",
        "Wedding",
      ],
      default: "Long Term",
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Saving = mongoose.model("Saving", savingSchema);

export { Saving };
