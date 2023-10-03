import { useQuery } from "@tanstack/react-query"
import { getFilms } from "../../Queries/getFilms";
import { request } from "graphql-request";
import Modal from 'react-modal';
import { useState } from "react";

export const MainPage = () => {

  const [selectedFilm, setSelectedFilm] = useState(null);

  const openModal = (film) => {
    setSelectedFilm(film);
  };

  const closeModal = () => {
    setSelectedFilm(null);
  };

  const modalStyle = {
    content: {
      maxWidth: "400px", // Ændr efter dine præferencer
      margin: "auto",
      padding: "20px",
      background: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      borderRadius: "4px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

    const { data, isLoading, error } = useQuery({
        queryKey: ["getStarwarsFilm"],
        queryFn: async () =>
          request(
            "https://swapi-graphql.netlify.app/.netlify/functions/index",
            getFilms
          ),
    })

    console.log("Data", data);

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error: {error.message}</p>;



    return (
      <>
        <h1>Hello</h1>
        {data.allFilms.films.map((film) => (
        <div
          key={film.id}
          onClick={() => openModal(film)}
          style={{ cursor: "pointer" }}
        >
          <h2>{film.title}</h2>
        </div>
      ))}
      {/* Modal */}
      {selectedFilm && (
        <Modal
          isOpen={!!selectedFilm}
          onRequestClose={closeModal}
          contentLabel="Film Data Modal"
          style={modalStyle} // Anvend konstanten til styling
        >
          <h2>{selectedFilm.title}</h2>
          <p>Episode: {selectedFilm.episodeID}</p>
          <p>Director: {selectedFilm.director}</p>
          <p>Producer: {selectedFilm.producer}</p>
          {/* Tilføj flere oplysninger efter behov */}
          <button onClick={closeModal}>Luk Modal</button>
        </Modal>
      )}
      </>
    );
}