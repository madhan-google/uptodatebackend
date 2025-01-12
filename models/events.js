import mongoose from "mongoose";
const eventSchema = mongoose.Schema({
  image: String,
  title: String,
  description: String,
  start_date: Date,
  end_date: Date,
  clg_name: String,
  location: String,
  venue: String,
  time: String,
  duration: String,
  google_form_link: String,
  coordinator_name: String,
  details: String,
  category: String,
});
export default mongoose.model("events", eventSchema);
