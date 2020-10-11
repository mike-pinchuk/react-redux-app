import COMPONENT from "../WithReduxPage";
import COMPONENT1 from "../Counter";

function mapStateToProps(component) {
  if (COMPONENT) {
    return function (state) {
      return {
        value: state,
      };
    };
  } else if (COMPONENT1) {
    return function (state1) {
      return {
        value: state1,
      };
    };
  } else {
    return undefined;
  }
}

export default mapStateToProps;
