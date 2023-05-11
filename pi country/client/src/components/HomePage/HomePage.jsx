import React from "react";
import Cards from "../../views/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getPaises} from "../../redux/Actions"

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaises());
  }, [dispatch]);
  return (
    <div>
      <h1>"SOY home"</h1>
      <Cards></Cards>
    </div>
  );
};
export default HomePage;
