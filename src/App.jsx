import ConditionalRendering from "./components/basics/conditionalRendering";
import RenderingLists from "./components/basics/renderingLists";
import WritingEventHandlers from "./components/interactions/eventhandlers";
import EventHandlersAsProps from "./components/interactions/eventHandlersAsProps";
import State from "./components/componentMemory/state";
import IsolatedState from "./components/componentMemory/isolatedState";
import StateSnapShot from "./components/componentMemory/stateAsSnapshot";
export default function App() {
  return (
    <>
      <StateSnapShot />
    </>
  );
}
