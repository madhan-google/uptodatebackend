import eventdb from "../models/events.js";
export const getEvent = (req, res) => {
  eventdb.find({}, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      if (data.length > 0) res.status(201).send(data);
      else res.status(500).send("User not found");
    }
  });
};
