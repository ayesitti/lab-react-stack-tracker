import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CompanyPage({ companyList }) {
  const params = useParams();
  const companyToDisplay = companyList.find(
    (company) => company.slug === params.companySlug
  );
  console.log(params);
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem"}}>
      <h1>{companyToDisplay.name}</h1>
      <p>{companyToDisplay.website}</p>
      <p>About {companyToDisplay.description}</p>
      <img
        src={companyToDisplay.logo}
        alt={companyToDisplay.name}
        style={{ height: 200, width: 200 }}
      />

      {companyToDisplay.techStack.map((technology) => (
        <p key={technology.slug}>
          {/* //Bonus 7 */}
          <Link to={`/tech/${technology.slug}?company=${companyToDisplay.slug}`}>
            <img
              src={technology.image}
              alt={technology.name}
              style={{ height: 100, width: 100 }}
            />
            {technology.name}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default CompanyPage;
