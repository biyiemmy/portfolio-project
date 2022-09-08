import NavBar from "../Components/NavBar";
import AboutMe from "./AboutMe";
import Skills from "../Components/Skills";
import Services from "./Services";
import Testimony from "../Components/Testimony";
import ContactMe from "./ContactMe";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
// import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  // useEffect(() => {
  //   alert("reload asap");
  // }, []);

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${counter} times`;
  //   alert(document.title);
  // });

  // const [counter, setCounter] = useState(0);
  // const [fruit, setFruit] = useState("banana");

  // const IncrementCounter = () => {
  //   setCounter((count) => count + 1);
  // };

  // const DecrementCounter = () => {
  //   setCounter((count) => count - 1);
  // };

  // const reset = () => {
  //   setCounter(0);
  // };

  // console.log(counter);
  // console.log(IncrementCounter);

  // function handleOrangeClick() {
  //   // Similar to this.setState({ fruit: 'orange' })
  //   setFruit("orange");
  //   setFruit("apple");
  // }

  // const firstNameRef = useRef(null);
  // const lastNameRef = useRef(null);

  // const [joke, setJoke] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  

  // useEffect(() => {
  //   const fetchJoke = async () =>
  //     await fetch(
  //       `http://api.icndb.com/jokes/random?firstName=Emmanuel&lastName=Adebiyi`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setJoke(data.value.joke);
  //         console.log(data);
  //       });
  //   fetchJoke();
  // }, []);

  // const handlGenerateClick = (e) => {
  //   e.preventDefault();
  //   setFirstName(firstNameRef.current.value);
  //   setLastName(lastNameRef.current.value);
  // };

  return (
    <>
      {/* <h2>{counter}</h2>
      <button onClick={IncrementCounter}>ADD</button>
      <button onClick={DecrementCounter}>Subtract</button>
      <button onClick={reset}>Reset</button>

      <h2>{fruit}</h2>
      <button onClick={handleOrangeClick}>Next Fruit</button> */}
      {/* <h1>{joke}</h1>
      <form>
        <input
          placeholder="first name"
          // value={firstName}
          // onChange={(e) => setFirstName(e.target.value)}
          ref={firstNameRef}
          type="text"
        />
        <input
          placeholder="last name"
          // value={lastName}
          // onChange={(e) => setLastName(e.target.value)}
          ref={lastNameRef}
          type="text"
        />
        <button onClick={handlGenerateClick}>Gen Joke</button>
      </form> */}

      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Services />
      {/* <Testimony /> */}
      <ContactMe />
      <Footer />
    </>
  );
};

export default HomePage;
