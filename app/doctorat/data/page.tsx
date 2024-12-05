"use client";

import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    async function fetchData() {
      const res = fetch(`http://localhost:3000/doctorat/data`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res);
    }

    fetchData();
  }, []);

  return <div>Page</div>;
};

export default Page;
