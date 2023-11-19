import { CORE_CONCEPTS } from "../../js/data.js";
import { selectTab } from "../../js/tabFunction.js";

import TabButton from "../TabButton/TabButton.jsx";
import TabContent from "../TabContent/TabContent.jsx";

import { useState } from "react";

const ExampleConcept = () => {
  const [selectedTab, setSelectedTab] = useState(CORE_CONCEPTS[0]);

  return (
    <section id="examples">
      <h2>Example</h2>
      <menu>
        {CORE_CONCEPTS.map((data) => (
          <TabButton
            key={data.id}
            isSelected={
              selectedTab.title.toUpperCase() === data.title.toUpperCase()
            }
            onSelect={() => {
              selectTab(data.title);
              setSelectedTab(data);
            }}
          >
            {data.title}
          </TabButton>
        ))}
      </menu>
      <div id="tab-content">
        <TabContent {...selectedTab} />
      </div>
    </section>
  );
};

export default ExampleConcept;
