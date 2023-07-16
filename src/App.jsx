import { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef();
  const [task, setTask] = useState("");       //track muna natin si input gamit si task
  const [taskList, setTaskList] = useState([]); //dito iistore yung task na ipapasa mamaya from our form 
  const [error, setError] = useState("");
  const [clear, setClear] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSumbit = (event) => {
    event.preventDefault();
   

    if (task) {
      setTaskList([...taskList, task]);
      setTask("");
      setError("")
    } else {
      setClear("");
      setError("Task must not be empty.");
      inputRef.current.focus();
    }
  };
  const clearTask = (e) => {
    e.preventDefault();
    setTaskList([]);

    if (task) {
      setTask("");
      setClear("");

    } else {
      setError("");
      setClear("Your task is empty");
      inputRef.current.focus();
    }
  };
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="border p-4">
        <h1 className="text-center mb-4">Task App</h1>
        {/* once na clinick mo si button matic tatawagin nya si handlesumbit */}
        <form className="form" onSubmit={handleSumbit}> 
          <div className="form-group">
            <input
              ref={inputRef}
              type="text"
              className="form-control"  //yung laki ng border ng input
              placeholder="Enter a task..."
              value={task}              //tracked by setTask
              onChange={(event) => setTask(event.target.value)} // dito na maguupdate ng state //everytime na magcchange yung value ni input matic iuupdate nya si task
            />
            {error ? <p className="text-danger mt-1">{error}</p> : null}
            {clear ? <p className="text-danger mt-1">{clear}</p> : null}
          </div>
          
          <div className="d-flex justify-content-center mt-3"> 
          {/* since nasa loob sya ni form kaya maglalagay tayo ng submit */}
            <button type="submit" className="btn btn-primary">    
              Add Task
            </button>                              
            {setTaskList.length > 0 ? (
              <button
                className="btn btn-danger mx-2"
                onClick={clearTask}
              >
                Clear {" "}
              </button>
            ) : null}
          </div>
          
        </form>
        
        <ul className="list-group mt-3">
          {taskList.map((task, index) => (
            <li key={index} className="list-group-item">
              {task}
            </li>
          ))}
        </ul>
        
      </div>
    </div>
    
  );
}

export default App;
