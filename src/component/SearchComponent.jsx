import { FormControl, Grid2, TextField } from '@mui/material';

const SearchComponent = ({onChangeHandler}) => {
  const gridStyle = {
    marginLeft: 2
  }
  return (
    <div className="App">
    <Grid2 container >
    <Grid2 container sx={gridStyle} size={2} justify={'flex-start'}>
    <h4><i>Photo Album App</i></h4>
    </Grid2>
      <Grid2 size={8}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField id="outlined-basic" label="Search Title" variant="outlined" onChange={onChangeHandler} />
        </FormControl>
      </Grid2>
    </Grid2>
    </div>
  );
}

export default SearchComponent;
