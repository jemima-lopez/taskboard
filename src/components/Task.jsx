import { Button } from "@mui/material";

function Task() {
  return (
    <>
      <button className="contained" sx={{ backgroundColor: 'blue', color: 'white', ':hover': { backgroundColor: 'darkblue' } }}>Task in progress</button>
      <Button className="contained  bg-blue-400 test-white hover:bg-blue-600">Task completed</Button>
      <Button className="contained bg-blue-400 test-white hover:bg-blue-600">Task Won't Do</Button>
      <Button className="contained bg-blue-400 test-white hover:bg-blue-600">Task To Do</Button>
      <Button className="contained bg-blue-400 test-white hover:bg-blue-600">New Task</Button>
    </>
  );
}
export default Task;
