import { useQuery } from "@tanstack/react-query";
import { getCharacter } from "../../Queries/getAllCharactors";
import { request } from "graphql-request";
import { Link } from "react-router-dom";

export const Characters = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ["getStarwarsPerson"],
        queryFn: async () =>
          request(
            "https://swapi-graphql.netlify.app/.netlify/functions/index",
            getCharacter
          ),
      });

      if (isLoading) {
        return <span>Loading...</span>;
      }
    
      if (error) {
        return <span>Error: {error.message}</span>;
      }



      return (
        <>
          <section>
            <ul>
              {data.allPeople.people.map((item, index) => (
                <Link to={`/character/${item.id}`} key={index}>
                  {item.name}
                </Link>
              ))}
            </ul>
          </section>
        </>
      );

}