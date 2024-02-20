import { createClient } from "@supabase/supabase-js";
import "./App.css";
import { useEffect, useState } from "react";

const supabase = createClient(
  "https://iobugekkjqtobyqclnro.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvYnVnZWtranF0b2J5cWNsbnJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNDIwOTYsImV4cCI6MjAyMzkxODA5Nn0.kT3vZQjaFoeqlznJRGfEUkpUpbbEPz8xvSMJV4mRyLk"
);

function App() {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    getTestData();
  }, []);

  useEffect(() => {
    console.log("testData => ", testData);
  }, [testData]);

  async function getTestData() {
    const { data } = await supabase.from("Test").select();
    console.log("data => ", data);
    setTestData(data);
  }

  return <div className="App">TEST</div>;
}

export default App;
