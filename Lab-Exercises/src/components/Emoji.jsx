import { useState } from "react";
export default function Emoji() {
  const [mood, changeMood] = useState("😊");

  const moodHandler = () => {
    let newMood = "😊"
    if (mood === "😊") newMood = "😕"
    else if (mood === "😕") newMood = "😊"
    changeMood(newMood)
  }
  return (
    <div className="MoodChanger">
      Current Mood: {mood}
      <button onClick={moodHandler}></button>

    </div>
  );
}
