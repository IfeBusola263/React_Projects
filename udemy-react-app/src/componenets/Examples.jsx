import { EXAMPLES } from "../data"
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(){
    
    const [selectedTab, setSelectedTab] = useState("");

    function handleClick(selectedTab){
        setSelectedTab(selectedTab);
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs buttons={
                <>
                <TabButton onClick={() => handleClick('components')} isSelected={selectedTab === 'components'}>Components</TabButton>
                <TabButton  onClick={() => handleClick('jsx')} isSelected={selectedTab === 'jsx'}>JSX</TabButton>
                <TabButton  onClick={() => handleClick('props')} isSelected={selectedTab === 'props'}>Props</TabButton>
                <TabButton  onClick={() => handleClick('state')} isSelected={selectedTab === 'state'}>State</TabButton>
              </>
            }
            >
                {!selectedTab && <p>Please select a Topic</p>}
          {selectedTab && 
                            <div id="tab-content">
                                <h3>{EXAMPLES[selectedTab].title}</h3>
                                <p>{EXAMPLES[selectedTab].description}</p>
                                <pre>
                                    <code>
                                    {EXAMPLES[selectedTab].code}
                                    </code>
                                </pre>
                            </div>
        }
            </Tabs>
      </Section>
    )
}