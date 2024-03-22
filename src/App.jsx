import ConditionalRendering from "./components/basics/conditionalRendering";
import RenderingLists from "./components/basics/renderingLists";
import WritingEventHandlers from "./components/interactions/eventhandlers";
import EventHandlersAsProps from "./components/interactions/eventHandlersAsProps";
import State from "./components/componentMemory/state";
import IsolatedState from "./components/componentMemory/isolatedState";
import StateSnapShot from "./components/componentMemory/stateAsSnapshot";
import QueueState from "./components/componentMemory/queueStates";
import LiftingUpTheState from "./components/componentMemory/liftingState";
import PreserveAndResetState from "./components/componentMemory/preserveAndResetState";
export default function App() {
  return (
    <>
      <PreserveAndResetState />
    </>
  );
}
