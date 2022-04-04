import style from './App.module.css';
import {
  UseHover, UseUpdateEffect, UseStorage, UseFetch, UseInput, UseUpdateLogger,
  UseEventListener, UseMediaQuery, UseEffectOnce, UseIsFirstRender, UseIsMounted,
  UseBoolean, UseCopyToClipboard, UseTimeout, UseCounter, UseInterval, UseCountdown,
  UseOnClickOutside, UseDebounce, UseThrottle, UsePrevious, UseStateWithHistory, UseDeepCompareEffect
} from './Examples';
import UseWindowSize from './Examples/UseWindowSize';

function App() {
  return (
    <div className={style.container}>
      {/* <UseStorage /> */}
      {/* <UseUpdateLogger /> */}
      {/* <UseInput /> */}
      {/* <UseFetch /> */}
      {/* <UseEventListener /> */}
      <UseMediaQuery />
      {/* <UseEffectOnce /> */}
      {/* <UseUpdateEffect /> */}
      {/* <UseIsFirstRender /> */}
      {/* <UseHover /> */}
      {/* <UseIsMounted /> */}
      {/* <UseBoolean /> */}
      {/* <UseCopyToClipboard /> */}
      {/* <UseTimeout /> */}
      {/* <UseInterval /> */}
      {/* <UseCounter /> */}
      {/* <UseCountdown /> */}
      {/* <UseOnClickOutside /> */}
      {/* <UseDebounce /> */}
      {/* <UseThrottle /> */}
      {/* <UsePrevious /> */}
      {/* <UseStateWithHistory /> */}
      {/* <UseDeepCompareEffect /> */}
      {/* <UseWindowSize /> */}
    </div>
  );
}

export default App;
