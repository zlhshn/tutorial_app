import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {


const [tutorials ,setTutorials] = useState()

const getTutorial = async ()=>{

// const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials"

try {
 const res = await axios(process.env.REACT_APP_URL) 

 setTutorials(res.data)
} catch (error) {
  console.log(error);
}
 
}


useEffect(()=>{

getTutorial()

},[])


  return (
    <>
      <AddTutorial  getTutorial={getTutorial} />
      <TutorialList  tutorials={tutorials} getTutorial={getTutorial}/>
    </>
  );
};

export default Home;
