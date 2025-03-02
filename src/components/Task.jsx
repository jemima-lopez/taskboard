import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CoffeeIcon from "@mui/icons-material/Coffee";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddIcon from "@mui/icons-material/Add";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';


function Task() {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          bgcolor: "oklch(0.924 0.12 95.746)",
          color: "black",
          py: 2,
          px: 8,
          margin: 1,
        }}
        startIcon={<AccessAlarmsIcon />}
        endIcon={<QueryBuilderIcon />}
      >
        Task in Progress
      </Button>
      <Button
        variant="contained"
        sx={{ bgcolor: "oklch(0.871 0.15 154.449)", color: "black", py: 2,
          px: 8,
          margin: 1, }}
        startIcon={<FitnessCenterIcon />}
        endIcon={<DoneIcon />}
      >
        Task Completed
      </Button>
      <Button
        variant="contained"
        sx={{ bgcolor: "oklch(0.808 0.114 19.571)", color: "black",  py: 2,
          px: 8,
          margin: 1}}
        startIcon={<CoffeeIcon />}
        endIcon={<ClearIcon />}
      >
        Task Won't Do
      </Button>
      <Button
        variant="contained"
        sx={{ bgcolor: "oklch(0.707 0.022 261.325)", color: "black", py: 2,
          px: 8,
          margin: 1}}
        startIcon={<LibraryBooksIcon />}
      >
        Task To Do
      </Button>
      <Button
        variant="contained"
        sx={{ bgcolor: "oklch(0.837 0.128 66.29)", color: "black",  py: 2,
          px: 8,
          margin: 1 }}
        startIcon={<AddIcon />}
      >
        Add New Task
      </Button>
    </>
  );
}
export default Task;
