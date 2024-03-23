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
import ViaContext from "./components/04_passingData/VIaContext";
import LazyLoading from "./components/07_optimisations/lazyLoadingFunctions";
import LazyLoadingComponents from "./components/07_optimisations/lazyLoadingComponents";
import UseMemoExample from "./components/05_standardHooks/useMemo";
import UseStateExample from "./components/05_standardHooks/useState";
import UseContextExample from "./components/05_standardHooks/useContext";
import UseCallbackExample from "./components/05_standardHooks/useCallback";
import UseRefExample from "./components/05_standardHooks/useRef";
import { Route, Router, Routes } from "react-router-dom";
import A from "./components/06_routing/a";
import B from "./components/06_routing/b";
import C from "./components/06_routing/c";
import Root from "./components/06_routing/root";
import Dynamic from "./components/06_routing/dynamic";
import Year from "./components/06_routing/2024";
import NotFound from "./components/06_routing/notFound";
import AA from "./components/06_routing/aa";
import AB from "./components/06_routing/ab";
import SharedLayout from "./components/06_routing/sharedLayout";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}></Route>
      {/* nested routes */}
      {/* remember outlet should be placed in sharedLayout to render the child element */}
      {/* wherever you child component is placed in layout, there the child will be placed in dom */}
      {/* you pass context to outlet component and using uselayoutcontext hook u can extract the context */}
      <Route path="/a" element={<SharedLayout />}>
        <Route index element={<A />}></Route>
        <Route path="aa" element={<AA />}></Route>
        <Route path="ab" element={<AB />}></Route>
      </Route>
      <Route path="/b" element={<B />}></Route>
      <Route path="/c" element={<C />}></Route>
      <Route path="/a/:num" element={<Dynamic />}></Route>
      {/* if exact route matches priority is given to exact match */}
      <Route path="/a/2024" element={<Year />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
