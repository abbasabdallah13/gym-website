import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { Circles } from "react-loader-spinner";
import Magnifier from "../assets/images/magnifier.png";
import { allExercisesArr, dataObject } from "../utils/exercisesData";

const Exercises = ({
  searchedExercises,
  setSearchedExercises,
  bodyPart,
  setShowHeaderTitle,
  showHeaderTitle,
  isLoading,
  setIsLoading,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage, setExercisesPerPage] = useState(0);
  useEffect(() => {
    if (window.screen.width <= 600) {
      setExercisesPerPage(10);
    } else {
      setExercisesPerPage(9);
    }
    window.addEventListener("resize", () => {
      if (window.screen.width <= 600) {
        setExercisesPerPage(10);
      } else {
        setExercisesPerPage(9);
      }
    });
  }, []);

  const indexOfLastExercise = currentPage * exercisesPerPage - 1;
  const indexofFirstExercise = indexOfLastExercise + 1 - exercisesPerPage;

  let currentExercises = searchedExercises.slice(
    indexofFirstExercise,
    indexOfLastExercise + 1
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    if (window.screen.width <= 600) {
      let navbarHeight = document
        .getElementsByClassName("navbar")[0]
        .getBoundingClientRect().height;
      window.scrollTo({
        top:
          document.querySelector("#exercises").getBoundingClientRect().y +
          document.documentElement.scrollTop -
          navbarHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top:
          document.querySelector("#exercises").getBoundingClientRect().y +
          document.documentElement.scrollTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchExercises = async () => {
      if (bodyPart === "all") {
        setIsLoading(true);

        // const allExercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        // setSearchedExercises(allExercises);

        setSearchedExercises(allExercisesArr);

        setShowHeaderTitle("Showing All:");
        setIsLoading(false);
      } else if (!bodyPart) {
        // empty. In order to forbid a fetchData call with a URL like the following: https://exercisedb.p.rapidapi.com/exercises/bodyPart/null
      } else {
        setIsLoading(true);
        // const exercisesByBodyPart = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        // setSearchedExercises(exercisesByBodyPart);

        for (const [key, value] of Object.entries(dataObject)) {
          if (bodyPart === key) {
            setSearchedExercises(value);
          }
        }
        setIsLoading(false);
        setShowHeaderTitle(`Showing Results: ${bodyPart}`);
      }
    };
    fetchExercises();
  }, [bodyPart]);

  if (isLoading) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  return (
    <div style={{ position: "relative" }}>
      {isLoading ? (
        <div className="exercisesLoad">
          <Circles color="#ff0000" height={80} width={80} />
          <p>LOADING</p>
        </div>
      ) : null}
      {currentExercises.length ? (
        <div style={{ padding: "1rem" }}>
          <p
            id="exercises"
            style={{
              fontSize: "2rem",
              marginBottom: "0.5rem",
              textTransform: "capitalize",
            }}
          >
            {showHeaderTitle}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="exercises-grid">
              {currentExercises.map((el, index) => {
                return <ExerciseCard el={el} index={index} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="notfound">
          <p
            id="exercises"
            style={{ fontSize: "2rem", marginBottom: "0.5rem" }}
          >
            {" "}
          </p>
          <img src={Magnifier} alt="not found" />
          <h1>NO RESULTS FOUND</h1>
          <p>Try something else or check one of our categories</p>
        </div>
      )}

      <div className="pagination">
        {searchedExercises.length > 9 && window.screen.width > 600 ? (
          <Pagination
            variant="outlined"
            count={Math.ceil(searchedExercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            boundaryCount={1}
            siblingCount={2}
          />
        ) : window.screen.width <= 600 ? (
          <Pagination
            variant="outlined"
            count={Math.ceil(searchedExercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            boundaryCount={1}
            siblingCount={0}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Exercises;
