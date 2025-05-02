import { EXAMPLES } from "../../data"
import TabButton from "./TabButton";
import { useState } from "react";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(undefined);

    function handelSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu> 
                <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handelSelect("components")}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handelSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handelSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handelSelect('state')}>State</TabButton>
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
        </section>
    )
}