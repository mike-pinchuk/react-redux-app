import { bindActionCreators } from "redux";
import { increment, decrement, loading } from "./actions";
import COMPONENT from "../WithReduxPage";
import COMPONENT1 from "../Counter";

function mapDispatchToProps(component) {
  switch (component) {
    case COMPONENT:
      return function (dispatch) {
        return {
          loading: bindActionCreators(loading, dispatch),
        };
      };
    case COMPONENT1:
      return function (dispatch) {
        return {
          change_plus: bindActionCreators(increment, dispatch),
          change_minus: bindActionCreators(decrement, dispatch),
        };
      };
    default:
      return undefined;
  }
}

export default mapDispatchToProps;
