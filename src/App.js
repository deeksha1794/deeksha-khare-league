import { useEffect, useState } from 'react';
import './App.css';
import '././asset/common.css';

import { Grid2 } from '@mui/material';
import SearchComponent from './component/SearchComponent';
import ListComponent from './component/ListComponent';

function App() {

  const [listContent, setListContent] = useState({isSearched: false, list:[]});
  const [statusOfSearch, setStatusOfSearch] = useState(false);

  useEffect(() => {
    if(!listContent.list?.length && !statusOfSearch) {
      fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then((res) => {
        if (res.status === 200) {
          res.json().then((response) => {
            setListContent({...listContent, list: response})
          })
        }
      })
    }
  }, [listContent, statusOfSearch]);

  const searchItem = (ele, value) => {
    if (ele.title.toLowerCase().includes(value?.toLowerCase())) {
      setStatusOfSearch(false)
      return true
    } else {
      setStatusOfSearch(true)
    return false
    }
  }

  const onChangeHandler = (event) => {
    let newList = [];
    let isSearched = true;
    newList = listContent.list?.filter((ele) => !!searchItem(ele, event.target.value))
    if (event.target.value === "") {
      setStatusOfSearch(false)
      isSearched = false
      newList = []
    };
    setListContent({isSearched, list: newList})
  }

  return (
    <div className="App">
    <Grid2>
      <SearchComponent onChangeHandler={onChangeHandler}/>
      <ListComponent listContent={listContent} statusOfSearch={setStatusOfSearch}/>
    </Grid2>
    </div>
  );
}

export default App;
