import {
  Button,
  Container,
  ImageOutput,
  OutPutContainer,
  SearchBar,
  SearchConainer,
} from "./App.styled";
import React, { useState, useEffect } from "react";

const Access_Key = process.env.REACT_APP_ACCESS_KEY;

function App() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };
  useEffect(() => {
    fetchRequest();
  }, [img]);

  const submit = () => {
    fetchRequest();
    setImg("");
  };

  return (
    <>
      <Container>
        IMAGE SEARCH 🌐
        <SearchConainer>
          <SearchBar
            type="search"
            placeholder="Search Image.."
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <Button type="submit" onClick={submit}>
            Search 🔍
          </Button>
        </SearchConainer>
        <OutPutContainer>
          {res.map((val) => {
            return (
              <>
                <ImageOutput
                  key={val.id}
                  src={val.urls.small}
                  alt="val.alt_description"
                />
              </>
            );
          })}
        </OutPutContainer>
      </Container>
    </>
  );
}

export default App;
