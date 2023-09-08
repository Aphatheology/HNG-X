const express = require("express");

const app = express();
const port = 3000;

const generateDate = function () {
  const currentDayTime = new Date().getUTCDay();
  const days_of_week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date_values = days_of_week[currentDayTime];
  const utcTime = new Date();
  utcTime.setMinutes(utcTime.getUTCMinutes());
  const time = utcTime.toISOString().slice(0, 19) + "Z";
  return [date_values, time];
};

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name ? req.query.slack_name : "Aphatheology";
  const track = req.query.track ? req.query.track : "Backend";
  const statusCode = res.statusCode;
  const dateValue = generateDate();

  const responseJson = {
    slack_name: slack_name,
    current_day: dateValue[0].toString(),
    utc_time: dateValue[1].toString(),
    track: track,
    github_file_url:
      "https://github.com/Aphatheology/HNG-X/blob/main/stage-1/server.js",
    github_repo_url: "https://github.com/Aphatheology/HNG-X/tree/main/stage-1",
    status_code: statusCode,
  };

  res.json(responseJson);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});