import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./api/data.json";
import JobBoardComponent from "./components/JobBoardComponent";
import NavBar from "./components/NavBar";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  const filterFunc = ({role, level, languages, tools}) => {

      if(filters.length === 0) {
          return true
      }

      const tags = [role, level]

      if (languages) {
          tags.push(...languages)
      }

      if (tools) {
          tags.push(...tools)
      }

      return tags.some(tag => filters.includes(tag))
  };

  const filteredJobs = jobs.filter(filterFunc);

  const handleTagClick = (tag) => {
      //avoid re-adding tags
      if(filters.includes(tag)) return;
      // if (filters.includes(tag)) {
      //     setFilters(filters.filter(filter => filter !== tag))
      // } else {
          setFilters([...filters, tag])
      // }
  };

  const handleFilterClick = (passedFilter) => {
      setFilters(filters.filter(filter => filter !== passedFilter))
  };

  const clearFilters = () => setFilters([]);

  useEffect(() => {
    setJobs(data)
  }, []);

  return (
    <div className="App bg-green-100">
      <NavBar />
      <div className="bg-white py-4 px-8 shadow-lg">
          {filters.length > 0 && filters.map(filter =>
            <span
                onClick={() => handleFilterClick(filter)}
            >{filter}</span>
          )}
          <button onClick={clearFilters}>clear</button>
        </div>
      <div className="wrapper py-8 px-16">
        {jobs.length === 0 ? (
          <p>jobs are fetching...</p>
        ) : (
          filteredJobs.map((job) => <JobBoardComponent
              job={job} key={job.id}
              onTagClick={handleTagClick}
          />)
        )}
      </div>
    </div>
  );
}

export default App;

//todos
//1. study the design & json ✔
//2. create the job board component ✔
//3. get the data from the json ✔
//4. pass down the data to the jbc ✔
//5. style it
//6. filter component
//7. filter the data
