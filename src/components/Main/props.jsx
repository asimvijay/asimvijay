import { useEffect } from "react";
import { Network } from "vis-network";

const Workup = () => {
  useEffect(() => {
    const nodes = [
      { id: 0, label: "Motor A", group: 0, shape: "circularImage", image: "/images/1.jpg" },
      { id: 1, label: "Sensor 1A", group: 0, shape: "circularImage", image: "/images/1.jpg" },
      { id: 2, label: "Sensor 2A", group: 0, shape: "circularImage", image: "/images/1.jpg" },
      { id: 3, label: "Motor B", group: 1, shape: "circularImage", image: "/images/1.jpg" },
      { id: 4, label: "Sensor 1B", group: 1, shape: "circularImage", image: "/images/1.jpg" },
      { id: 5, label: "Sensor 2B", group: 1, shape: "circularImage", image: "/images/1.jpg" },
      { id: 6, label: "Motor C", group: 2, shape: "circularImage", image: "/images/1.jpg" },
      { id: 7, label: "Sensor 1C", group: 2, shape: "circularImage", image: "/images/1.jpg" },
      { id: 8, label: "Sensor 2C", group: 2, shape: "circularImage", image: "/images/1.jpg" },
      { id: 9, label: "Sensor 3C", group: 2, shape: "circularImage", image: "/images/1.jpg" },
      { id: 10, label: "Motor D", group: 3, shape: "circularImage", image: "/images/1.jpg" },
      { id: 11, label: "Sensor 1D", group: 3, shape: "circularImage", image: "/images/1.jpg" },
      { id: 12, label: "Sensor 2D", group: 3, shape: "circularImage", image: "/images/1.jpg" },
      { id: 13, label: "Sensor 3D", group: 3, shape: "circularImage", image: "/images/1.jpg" },
      { id: 14, label: "Sensor 4D", group: 3, shape: "circularImage", image: "/images/1.jpg" },
      { id: 15, label: "Ranch 144", group: 0, shape: "circularImage", image: "/images/1.jpg" },
      { id: 16, label: "Ranch 152", group: 1, shape: "circularImage", image: "/images/1.jpg" },
      { id: 17, label: "Ranch 188", group: 2, shape: "circularImage", image: "/images/1.jpg" },
      { id: 18, label: "Ranch 136", group: 3, shape: "circularImage", image: "/images/1.jpg" },
      { id: 19, label: "Cell Tower", group: 4, shape: "circularImage", image: "/images/1.jpg", size: 40 },
      { id: 20, label: "Cloud", group: 5, shape: "circularImage", image: "/images/1.jpg", size: 40 },
    ];

    const edges = [
      { from: 0, to: 15 },
      { from: 1, to: 15 },
      { from: 2, to: 15 },
      { from: 3, to: 16 },
      { from: 4, to: 16 },
      { from: 5, to: 16 },
      { from: 6, to: 17 },
      { from: 7, to: 17 },
      { from: 8, to: 17 },
      { from: 9, to: 17 },
      { from: 10, to: 18 },
      { from: 11, to: 18 },
      { from: 12, to: 18 },
      { from: 13, to: 18 },
      { from: 14, to: 18 },
      { from: 15, to: 19, arrows: "to" },
      { from: 16, to: 19, arrows: "to" },
      { from: 17, to: 19, arrows: "to" },
      { from: 18, to: 19, arrows: "to" },
      { from: 19, to: 20, arrows: "to" },
    ];

    const container = document.getElementById("mynetwork");
    if (container) {
      const data = { nodes, edges };
      const options = {
        nodes: {
          shape: "dot",
          size: 30,
          font: { size: 14 },
          borderWidth: 2,
          shadow: true,
          cursor: "pointer",
        },
        edges: {
          width: 2,
          shadow: true,
        },
      };

      new Network(container, data, options);
    }
  }, []);

  return (
    <div
      id="mynetwork"
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "90vh",
        border: "1px solid #444444",
        backgroundColor: "#dddddd",
        margin: "0 auto",
       
      }}
    />
  );
};

export default Workup;
