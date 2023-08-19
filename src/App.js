import React from "react";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import Header from "./components/Header/Header";
import CardItem from "./components/cardItem/CardItem";
const App = () => {
  const concepts = [
    {
      title: "Components",
      imageSrc: componentsImage,
      description:
        "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
    },
    {
      title: "State",
      imageSrc: stateImage,
      description:
        "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
    },
    {
      title: "Events",
      imageSrc: eventsImage,
      description:
        "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
    },
  ];

  return (
    <div className="app">
      <div className="app_container">
        <Header />
        <div className="cards">
          {concepts.map((card) => {
            return <CardItem key={card.title} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
