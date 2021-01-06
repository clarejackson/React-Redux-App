import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFact } from "../actions";

const Fact = ({title, fact, isFetching, error, fetchFact}) => {


  return (
    <>
    <h1>{title}</h1>
    <h2>Here's one for you! {fact}</h2>
    <button onClick={fetchFact}>Get a new cat fact</button>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    fact: state.fact,
    title: state.title,
    isFetching: state.isFetching,
    error: state.error
  }
};

const mapDispatchToProps = { fetchFact };

export default connect(mapStateToProps, mapDispatchToProps)(Fact)