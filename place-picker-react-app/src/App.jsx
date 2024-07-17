import { useRef, useState, useEffect } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";
import { useCallback } from "react";

// This doesn't need use effect since it is a syncronous side effect and only needs to run when the app starts
const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    // navigator is an object available in the browser by default
    navigator.geolocation.getCurrentPosition((positon) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        positon.coords.latitude,
        positon.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setModalIsOpen(true)
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false)
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // localStorage is the browser storage, where you can store things,
    // so that of you leave the website and come again, you still find the
    // information there.

    // get the array of stored ids from browser storage
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];

    // make sure not to store already stored Ids
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds])
      );
    }
  }

  const handleRemovePlace = useCallback(
    function handleRemovePlace() {

      setPickedPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
      );
      setModalIsOpen(false)
  
      const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
      );
    }, []); 

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting Places by Distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
