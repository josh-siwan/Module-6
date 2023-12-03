import { useState } from "react";



export default function AddMovieForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  // ++ add support for the synopsis field as well, here and below
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ name, latinName });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Latin Name:
          <input
            name="Latin Name"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
// add this in MoviesList component
const handleAddMovie = (newMovie) => {
  newMovie.id = currentMovies.length + 1; // unreliable but succinct
  setCurrentMovies([...currentMovies, newMovie]);
};
<AddMovieForm onAddMovie={handleAddMovie} />;
