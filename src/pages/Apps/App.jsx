import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "../../components/Card/Card";
import { CiSearch } from "react-icons/ci";

const App = () => {
  const [query, setQuery] = useState([]);

  const data = useLoaderData();
  const filterData = data.filter((card) =>
    card.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="my-12">
      <div className=" text-center space-y-3">
        <h1 className=" text-5xl font-bold">Our All Applications</h1>
        <p className=" text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className=" flex justify-between border-b p-5">
          <h1 className=" text-3xl">({data.length}) App Found</h1>
          <form action="">
            <div className="flex items-center text-lg border-gray-300 bg-gray-100 px-3 py-2 border  rounded-md ">
              <CiSearch />
              <input
                className="outline-none ml-3"
                type="text"
                placeholder="search your app"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {data.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
