import { Router } from "express";

const brokers = [
  { id: 1, name: "Cam" },
  { id: 2, name: "Jam" },
  { id: 3, name: "Sam" },
  { id: 4, name: "Ham" }
];

const router = Router();

router.get("/", (req, res) => {
  res.send(brokers);
});

export default router;
