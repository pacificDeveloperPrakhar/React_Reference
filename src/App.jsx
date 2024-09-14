import { useState } from 'react'
import "./assets/fonts/playwright-variable.ttf";
import "./assets/fonts/Inter-variable.ttf";
import { SparklesCore } from "./components/ui/sparkles.jsx";
import './styles/App.css';
import Framer_component from './components/framer_component.jsx';
import LayoutAnimation from './components/layout_components.jsx';
import Unmounting from './components/unmounting.jsx';
import LayoutIdExample from './components/layoutId_component.jsx';
import LayoutDependency from "./components/LayoutDependency.jsx";
import OnUpdateCreativeExample from './components/onUpdate.jsx';
import { MyComponent } from './components/MotionConfig.jsx';
// import List from './components/Reorder_component.jsx';
import List from './components/ComponentsReRender.jsx';
import ExampleComponent from './components/subscribing_events.jsx';
import MotionValue from './components/useMotionValueAndUseTransform.jsx';
import UseScroll from './components/useScroll.jsx';
import TimeBox from './components/useTime.jsx';
import AnimateBox from './components/useAnimate.jsx';
import AnimateFrameBox from "./components/useAnimateFrame.jsx";
import Animate from "./components/Animate.jsx";
import Square from "./components/useSpringExample.jsx"
import ChatPanel from './components/Contact_Panel.jsx';
import Reorder from "./components/Reorder_component.jsx"
import Rerender from "./components/ComponentsReRender.jsx"
import ChatPanelItem from "./components/ChatPanelItem.jsx"
import Form from './components/From.jsx';
import TabsLayout from"./components/TabsLayoutId.jsx"
import LottieExample from './components/LottieExample.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='absolute h-screen w-full inset-0 '>
  <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.4}
          maxSize={4.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#8b49a7"
          />
          </div>
   <div id='AppLayout' className='absolute h-full,w-full'> <LottieExample
 /></div>
    </>
  )
}

export default App
