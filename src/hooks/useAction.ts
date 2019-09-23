import { useDispatch } from "react-redux";
import { useCallback } from "react";

export const useAction = (action: (...params: any[]) => any) => {
  const dispatch = useDispatch();
  return useCallback((...params: any[]) => dispatch(action(...params)), [
    dispatch,
    action
  ]);
};
