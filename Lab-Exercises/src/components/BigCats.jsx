import { useState } from "react";
import Cat from "./Cat";

import AddMovieForm from "./AddCatForm";

function BigCats() {
  // collection of objects representing movies
  const cats = [
    { name: "Cheetah", latinName: "Acinonyx jubatus" },
    { name: "Cougar", latinName: "Puma concolor" },
    { name: "Jaguar", latinName: "Panthera onca" },
    { name: "Leopard", latinName: "Panthera pardus" },
    { name: "Lion", latinName: "Panthera leo" },
    { name: "Snow leopard", latinName: "Panthera uncia" },
    { name: "Tiger", latinName: "Panthera tigris" },
  ];

  const [listOfCats, setList] = useState(cats);

  const catsList = listOfCats.map((cat) => (
    <Cat name={cat.name} latinName={cat.latinName} />
  ));

  const sortAtoZ = () => {
    let copyList = [...listOfCats];
    copyList.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    setList(copyList)
  };

  const sortZtoA = () => {
    
    let copyList = [...listOfCats];
    console.log('before reverse: ' + JSON.stringify(copyList))
    copyList.reverse()
    console.log('after reverse: ' + JSON.stringify(copyList))
    setList(copyList)
    console.log('inside sort z to a')
  };

  const filterPanthera = () => {
    let filteredList = listOfCats.filter((cat) => {
    cat.latinName.toLowerCase().includes("panthera")
    console.log(cat.latinName)
    console.log(cat.latinName.toLowerCase().includes("panthera"))
    })
    setList(filteredList)
  }

  const resetList = () => {
    let copyList = [...listOfCats];
    setList(copyList)
  }

  const handleAddCat = (newCat) => {
    //newMovie.id = currentMovies.length + 1; // unreliable but succinct
    setList([...listOfCats, newCat])
    }

  return (
    <div className="BigCats componentBox">
            <AddMovieForm onAddCat={handleAddCat}/>
      <button onClick={sortAtoZ}>Sort A to Z</button>
      <button onClick={sortZtoA}>Sort Z to A</button>
      <button onClick={filterPanthera}>Filter Pantheras</button>
      <button onClick={resetList}>Reset</button>
      <ul>
        {" "}
        {/* iterate over each movie, print the title in a list */}
        {catsList}
      </ul>


    </div>
  );
}
export default BigCats;
