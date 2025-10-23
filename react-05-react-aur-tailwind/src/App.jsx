import "./App.css";
import Card from './Card'

function App() {
  return (
    <>
      <h1 className="bg-black text-green-700 p-4 rounded-2xl m-4">
        Hello Tailwind!!!
      </h1>
      {/* <Card frontEnd = "React", backEnd = "java" /> //this not allows it take only 1 argument*/}
      <Card dev={{
      fullname: "Han Johnson",
      position: "Frontend Developer",
      description: "Building responsive web applications with React and Vue",
      url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&w=256&h=256&fit=crop&crop=face",
    }} />
      <Card dev={{
      fullname: "Michael Chen",
      position: "Full Stack Engineer",
      description: "Passionate about Node.js and cloud architecture",
      url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&w=256&h=256&fit=crop&crop=face",
    }} />
    </>
  );
}

export default App;
