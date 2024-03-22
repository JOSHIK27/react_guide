import ConditionalRendering from "./components/01_basics/conditionalRendering";
import RenderingLists from "./components/01_basics/renderingLists";
import WritingEventHandlers from "./components/02_interactions/eventhandlers";
import EventHandlersAsProps from "./components/02_interactions/eventHandlersAsProps";
import State from "./components/03_componentMemory/state";
import IsolatedState from "./components/03_componentMemory/isolatedState";
import StateSnapShot from "./components/03_componentMemory/stateAsSnapshot";
import QueueState from "./components/03_componentMemory/queueStates";
import LiftingUpTheState from "./components/03_componentMemory/liftingState";
import PreserveAndResetState from "./components/03_componentMemory/preserveAndResetState";
export default function App() {
  return (
    <>
      <PreserveAndResetState />
    </>
  );
}
