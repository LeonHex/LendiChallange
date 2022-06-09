import { Router } from "express";

const appointments = [
  { id: 1, brokerId: 1, date: "15/10/2021" },
  { id: 2, brokerId: 3, date: "22/11/2021" },
  { id: 3, brokerId: 3, date: "23/11/2021" },
  { id: 4, brokerId: 4, date: "10/5/2021" },
  { id: 5, brokerId: 3, date: "10/5/2022" }
];

const router = Router();

export default router;

router.get("/", (req, res) => {
  const {
    query: { sort, desc }
  } = req;
  switch (sort) {
    case "brokerId":
      appointments.sort((a, b) =>
        desc === "true" ? a.brokerId - b.brokerId : b.brokerId - a.brokerId
      );
      break;
    case "date":
      appointments.sort((a, b) => {
        const aDate = new Date(a.date.split("/").reverse().join("-"));
        const bDate = new Date(b.date.split("/").reverse().join("-"));
        return desc === "true" ? +aDate - +bDate : +bDate - +aDate;
      });
      break;
    default:
  }
  console.log(appointments);
  res.send(appointments);
});
