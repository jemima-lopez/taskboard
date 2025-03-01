import Task from "./Task";
import { Card } from "@mui/material";

function Board() {
  return (
    <>
      <Card
        className="contained grid justify-center  rounded-2xl overflow-hidden shadow-lg py-4 px-4 "
        sx={{ maxWidth: 500, margin: "auto", mt: 30 }}
      >
        <h1 className="text-2xl font-bold text-center">My Task Board</h1>
        <h4 className="text-ms  text-center">Task to keep organised</h4>
        <Task
          className="contained"
          xs={{
            bg: "blue-400",
            tx: "white",
            hover: "bg-blue-600",
            py: 2,
            px: 4,
          }}
        />
      </Card>
    </>
  );
}
export default Board;
