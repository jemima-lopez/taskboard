import { Button } from "@mui/material";



function Task() {
  return (
    <>
      <Button variant="contained"  sx={{
            bg: "blue-400",
            tx: "white",
            hover: "bg-blue-600",
            py: 2,
            px: 4, 
            }}>Task in Progress</Button>
      <Button variant="contained">Task Completed</Button>
      <Button variant="contained">Task Won't Do</Button>
      <Button variant="contained">Task To Do</Button>
      <Button variant="contained">Add New Task</Button>
    </>
  );
}
export default Task;
