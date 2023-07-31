import React from "react";
import { Link} from "react-router-dom";

function HomePage({ companyList }) {
  // const {id, slug, name, website, description, logo, techStack } = companyList

  return (
    <div>
      {companyList.map((companyList) => {
        return (
          <Link key={companyList.id} to={`/company/${companyList.slug}`}>
            <p>{companyList.name}</p>
            <img src={companyList.logo} alt={`${companyList.name}'s logo`} style={{height: 200, width: 200}}/>
          </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
