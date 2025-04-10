import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fetched Data</h1>
      <ul className="list-disc pl-6">
        {data.slice(0, 10).map((item) => (
          <li key={item.id} className="mb-2">
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
