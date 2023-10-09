import styled from "styled-components";

export const Container = styled.div`
   
    header {
    background-color: #FFDBF2; 
    padding: 20px;
  }
  
  header h2 {
    color: #ff1493; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  header .form-control {
    background-color: #FF1493;
    border-color: #ff69b4;
  }
  
  .btn2{
    background-color: #ff69b4; 
    border-color: #ff69b4; 
  }
  
  .btn2:hover {
    color: #ffdbf2; 
  }
  .btn1{
    background-color: #fff; 
    border-color: #ff69b4;
    color:#ff69b4;
  }
  
    
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

    .card{
        background-color: #ffdbf2; 
        border: 1px solid #ff69b4;
        padding:20px;
        border-radius: 25px;
        transition: transform 0.2s, box-shadow 0.2s; 
    }
    .card:hover {
        transform: scale(1.05);  
        box-shadow: 0 4px 8px rgba(255, 105, 180, 0.2); 
        cursor: pointer; 
      }
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
        width: 160px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    img:hover{
        transform: scale(1.05);
    }
    span {
        font-weight: bold;
        font-size: 100%;
        text-align: center;
        height:5vh;
        
    }
    a {
        transition: all 0.3s;
    }
    a:hover {
        transform: scale(1.1);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 15px;
    color: #212121;
    background-color: #ffffff;
    font-weight: 1000;
    font-size: 12 px;
    cursor: pointer;
    transition: all 250ms;
`;
