import { Grid } from "@mui/material"

export const LayoutTask = ({ children }) => {
  return (
    <Grid container className="book" sx={{ width: '100%', height: '100vh', justifyContent: 'center' }}>
      <Grid container sx={{ width: '720px', height: '90vh', justifyContent: 'center', padding: 1 }}>
     { children }
     </Grid>
    </Grid>
  )
}
