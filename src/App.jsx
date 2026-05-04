import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MoodTracker from "./components/MoodTracker";
import TodoList from "./components/TodoList";
import LightSwitch from "./components/LightSwitch";
import MessageBox from "./components/MessageBox";
import CastleRooms from "./components/CastleRooms";

const pageComponents = {
  Home,
  "Mood Tracker": MoodTracker,
  "Todo List": TodoList,
  "Light Switch": LightSwitch,
  "Message Box": MessageBox,
  "Castle Rooms": CastleRooms,
};

export default function App() {
  // currentPage ควบคุมว่าจะให้หน้าไหนแสดงบนจอ
  const [currentPage, setCurrentPage] = useState("Home");

  const CurrentPageComponent = pageComponents[currentPage];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl justify-center pt-10 px-6 py-12">
        {/* แสดงหน้าเว็บที่เลือกจาก navbar */}
        <CurrentPageComponent />
      </main>
    </div>
  );
}
