import eventdb from "../models/events.js";
export const createEvent = (req, res) => {
  const eventData = req.body;
  eventdb.create(eventData, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send({ status: "created", data: data });
  });
};
