import { connect } from "react-redux";
import COMPONENT1 from "../Counter";
import mapDispatchToProps from "./mapDispatchToProps";
import mapStateToProps from "./mapStateToProps";

const Counter = connect(
  mapStateToProps(COMPONENT1),
  mapDispatchToProps(COMPONENT1)
)(COMPONENT1);

export default Counter;
