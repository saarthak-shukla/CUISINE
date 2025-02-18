import styled from "styled-components";
import { BASE_URL , Button } from "../../App";
 // Importing the BASE_URL constant from App component
const SearchResult = ({data}) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {
            
            data?.map(({name, image ,text ,price})=> (
                 <FoodCard key={name}>
                    <div className = "food.image">
                        <img src={BASE_URL + image} />
                    </div>
                    <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>Rs.{price.toFixed(2)}</Button>
                </div>
                 
                 </FoodCard>
        ))}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult;
const FoodCardContainer = styled.section`
background-image: url("/bg1.JPG");
background-size: cover;
background-repeat: no-repeat;
background-position: center;
min-height: 200%;
padding: 0;




height: calc(100vh - 210px);


`;

const FoodCards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 80px;

`;

const FoodCard = styled.div`
 width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    button {
      font-size: 12px;
      background-color: #ff4343;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 12px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
      box-shadow: 0 2px 4px rgba(255, 67, 67, 0.2);

      &:hover {
        background-color: #ff6161;
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 67, 67, 0.5);
      }
    }
    button {
      font-size: 12px;
      background-color: #ff4343;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 12px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 0 2px 4px rgba(255, 67, 67, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #ff6161;
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(255, 67, 67, 0.3);
      }

      &:active {
        transform: scale(0.95);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 67, 67, 0.5);
      }
    }
    .stylish-card {
      background: linear-gradient(135deg, rgba(255, 67, 67, 0.8), rgba(255, 255, 255, 0.1));
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      backdrop-filter: blur(10px);
      color: #fff;
      text-align: center;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
      }

      h3 {
        font-size: 1.5rem;
        margin: 0 0 10px;
        font-weight: bold;
      }

      p {
        font-size: 1rem;
        margin: 0 0 15px;
        line-height: 1.5;
      }

      img {
        border-radius: 8px;
        max-width: 100%;
        height: auto;
      }
    }
    .stylish-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease, width 0.3s ease, height 0.3s ease;

        &:hover {
            transform: translateY(-5px) scale(1.1); // Make it bigger
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
            width: 90%; // Responsive width for smaller screens
            height: auto; // Adjust height automatically
        }
    }
    .price {
        border-radius: 10px; // Make the price edges round
        padding: 5px 10px; // Optional: Add some padding for better appearance
        background-color: rgba(255, 255, 255, 0.2); // Optional: Add a background color for contrast
    }
    }
  }

`;

