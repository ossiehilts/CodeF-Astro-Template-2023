import React, { useEffect, useState } from "react";
import Board from "react-trello";

const BOARD_DATA = "BOARD_DATA";

// Initial data in case there's nothing in local storage
const initialData = {
  lanes: [
    {
      id: "lane1",
      title: "Planned Tasks",
      cards: [
        {
          id: "Card1",
          title: "Write Blog Post",
          description: "Can AI make memes",
          label: "30 mins",
        },
        {
          id: "Card2",
          title: "Pay Rent",
          description: "Transfer via NEFT",
          label: "5 mins",
        },
      ],
    },
    {
      id: "lane2",
      title: "Completed",
      cards: [
        {
          id: "Card3",
          title: "Call John",
          description: "Regarding the PPT",
          label: "10 mins",
        },
      ],
    },
  ],
};

const TrelloBoard = () => {
  const [boardData, setBoardData] = useState(initialData);
  const [loaded, setLoaded] = useState<boolean>(false);

  // Load data from local storage when component mounts
  useEffect(() => {
    const data = localStorage.getItem(BOARD_DATA);
    console.log("DATA", { data: JSON.parse(data) });
    if (data) {
      setBoardData(JSON.parse(data));
    }
    setLoaded(true);
  }, []);

  // Save data to local storage whenever it changes
  useEffect(() => {
    console.log("BOARD update");
    localStorage.setItem(BOARD_DATA, JSON.stringify(boardData));
  }, [boardData]);

  const handleDataChange = (newData) => {
    if (!loaded) return;
    setBoardData(newData);
  };

  return (
    <div className="p-4">
      {loaded ? (
        <Board data={boardData} onDataChange={handleDataChange} />
      ) : (
        <>Loading.....</>
      )}
    </div>
  );
};

export default TrelloBoard;
