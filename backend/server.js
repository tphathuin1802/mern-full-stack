import express from "express";

const app = express();

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});

app.get("/api/tasks", (request, response) => {
  response.send("you have a mission to get");
}); // api getting

application.post("/api/tasks", (req, res) => {
  res.status(201).json({ message: "Adding mission completed" });
});

app.delete("/api/tasks/:id", (req, res) => {
  res.status(200).json({ message: "deleting message completed" });
});
