import { CORE_CONCEPTS } from "../../js/data.js";
import { selectTab } from "../../js/tabFunction.js";

import TabButton from "../TabButton/TabButton.jsx";
import TabContent from "../TabContent/TabContent.jsx";
import Section from "../Section/Section.jsx";

import { useState } from "react";

const ExampleConcept = () => {
  const [selectedTab, setSelectedTab] = useState(CORE_CONCEPTS[0]);

  return (
    <Section title="Example" id="examples">
      <menu>
        {CORE_CONCEPTS.map((data) => (
          <TabButton
            key={data.id}
            makeActive={selectedTab.id === data.id}
            onClick={() => {
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
    </Section>
  );
};

export default ExampleConcept;
