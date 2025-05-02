import { EXAMPLES } from "../../data"
import Section from "../Section";
import TabButton from "./TabButton";
import { useState } from "react";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(undefined);

    function handelSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
    }

    return (
        <Section id="examples" title={"Examples"}>
            <menu> 
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handelSelect("components")}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handelSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handelSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handelSelect('state')}>State</TabButton>
            </menu>

            {!selectedTopic && <p>Please select a tab.</p>}
            {selectedTopic && (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>)
            }
        </Section>
    )
}