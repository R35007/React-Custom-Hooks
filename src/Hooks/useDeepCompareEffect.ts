import _ from 'lodash';
import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export const useDeepCompareEffect = (callback: EffectCallback, deps: DependencyList = []) => {
  const currentDependenciesRef = useRef<DependencyList>([]);

  if (!_.isEqual(currentDependenciesRef.current, deps)) {
    currentDependenciesRef.current = deps
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, currentDependenciesRef.current)
}
