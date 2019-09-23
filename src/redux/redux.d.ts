import { rootReducer } from "./rootReducer";

type ReduxState = Parameters<typeof rootReducer>[0];

declare module "react-redux" {
  function useSelector<TSelected>(
    selector: (state: ReduxState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected;
}
