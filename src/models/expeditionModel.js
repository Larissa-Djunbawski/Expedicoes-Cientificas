import { Schema, model } from "mongoose";

const expeditionSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  participants: [{
    type: Schema.ObjectId,
    ref: "Explorer",
    required: true,
  }],
  speciesFound: [{
    type: Schema.ObjectId,
    ref: "Species",
    required: false,
  }]
});

const Expedition = model("Expedition", expeditionSchema);

export default Expedition;