import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";


const App = () => {
  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);


useEffect(() => {
  const fetchFoodData = async() => {

    setLoading(true);

    try {
      const response = await fetch(BASE_URL);

      const json = await response.json();
      

      setData(json);
      setLoading(false);
      
    } catch (error) {
      setError("Unable to Ftech Data");
    }


  };
  fetchFoodData();

}, []);

console.log(data);

/*
const temp = [
  
      {
        "name": "Boilded Egg",
        "price": 10,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "image": "/images/egg.png",
        "type": "breakfast"
    },
    {
        "name": "RAMEN",
        "price": 25,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "image": "/images/ramen.png",
        "type": "lunch"
    },
    {
        "name": "GRILLED CHICKEN",
        "price": 45,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "image": "/images/chicken.png",
        "type": "dinner"
    },
    {
        "name": "CAKE",
        "price": 18,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "image": "/images/cake.png",
        "type": "breakfast"
    },
    {
        "name": "BURGER",
        "price": 23,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "image": "/images/burger.png",
        "type": "lunch"
    },
    {
        "name": "PANCAKE",
        "price": 25,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "image": "/images/pancake.png",
        "type": "dinner"
    }
];
*/
  

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;



  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo-container">
            <img src="/logo.svg" alt="logo" />
          </div>

          <div className="Search">
            <input placeholder="Search Food" />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button>All</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>

        <SearchResult data={data} />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
 
`;



export const Button = styled.button`

color:rgb(221, 216, 216);
border-radius: 5px;
padding: 6px 12px;
border: 1px solid #ff4343;
background-color: transparent;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  background-color: #ff4343;
  color: white;
  transform: scale(1.05);
}

&:active {
  transform: scale(0.95);
}

font-weight: 600;
box-shadow: 0 2px 4px rgba(255, 67, 67, 0.2);

&:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 67, 67, 0.3);
}
gap: 12px;





`;
const FilterContainer = styled.section`
display: flex;
justify-content: center;
padding: 16px;
align-items: center;
gap: 12px;
padding-bottom: 40px;





`;





const TopContainer = styled.section`
min-height: 140px;
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;

.search{



  background-color: transparent;
  border: 1px solid #ff0000;
  color: #ffffff;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: #ff4343;
    box-shadow: 0 0 0 2px rgba(255, 67, 67, 0.3);
  }

  transition: all 0.3s ease;

  &:hover {
    border-color: #ff4343;
    box-shadow: 0 2px 8px rgba(255, 67, 67, 0.2);
  }

  width: 240px;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.05);

  &:not(:placeholder-shown) {
    background: rgba(255, 255, 255, 0.1);
  }
  width: 320px;
  height: 40px;   
  border: 2px solid #ff0000;


  
}


 
`;
