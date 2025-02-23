import Task from "./Task";

function Board() {
  return (
    <>
      <div className="contained grid content-center justify-center max-w-sm rounded-2xl overflow-hidden shadow-lg py-2 px-4">
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
      </div>
    </>
  );
}
export default Board;
