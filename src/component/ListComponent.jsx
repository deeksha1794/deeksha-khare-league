import { Card, CardContent, CardMedia, Grid2 } from '@mui/material';

const ListComponent = ({listContent, statusOfSearch}) => {

  return (
    <div className="App">
         { statusOfSearch && !listContent.list.length ?
        <h3>No result found</h3> :
      <Grid2 container spacing={2} sx={{m: 1}}>
        {listContent.list?.map((ele, index) => (
          <Grid2 size={{sm: 4, sx: 6}} spacing={2} key={ele.id} justifyContent={'center'}>
            <Card variant="outlined" >
              <CardMedia
                component="img"
                image={`https://picsum.photos/id/${ele.id}/300/200`} alt={ele.title} />
              <CardContent>
                <h4 className='content-card-text'>{ele.title}</h4>
                <a href={`https://picsum.photos/id/${ele.id}/4000`} target='_blank' rel="noreferrer">{`https://picsum.photos/id/${ele.id}/4000`}</a>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    }
    </div>
  );
}

export default ListComponent;
