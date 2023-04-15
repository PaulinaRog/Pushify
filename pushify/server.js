import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "https://localhost:4000",
    optionsSuccessStatus: 200,
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
