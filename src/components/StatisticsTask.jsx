import { Grid, Typography } from "@mui/material";

export const StatisticsTask = ({ task }) => {
  return (
    <Grid
      container
      className="border"
      sx={{
        display: "block",
        width: "600px",
        height: "120px",
        minHeight: "120px",
        backgroundColor: "rgb(35, 28, 61)",
        borderRadius: 3,
        mt: 2,
        mb: 1,
      }}
    >
      <Grid item>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mt: 2,
            color: "bisque",
            textAlign: "center",
            textShadow: "6px 3px 4px black",
          }}
        >
         Task: {task.length} Pending: {task.filter((t) => !t.done).length}
        </Typography>
      </Grid>
    </Grid>
  );
};
