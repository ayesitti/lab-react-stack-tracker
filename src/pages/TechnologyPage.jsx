import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";



function TechnologyPage({techList}) {
// const [searchParams, setSearchParams] = useSearchParams()
// const previousCompanyPage = searchParams.get("company")


  const params = useParams();
  const techToDisplay = techList.find((technology) => technology.slug === params.techSlug);
  console.log(params);
  if (!techToDisplay) {
    return <div>Tech not found :( </div>
  }
  return (
    <div>
      <h1>{techToDisplay.name}</h1>
      <p>{techToDisplay.description}</p>
      <img src={techToDisplay.image} alt={techToDisplay.name} style={{height:60}}/>

    </div>
  );
}

export default TechnologyPage;
