import NavBar from "./components/NavBar"
import Sidebar from "./components/Sidebar"

function App() {


  return (
    <>
      <div className="flex">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="w-5/6">
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default App
