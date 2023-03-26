import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { useSearchParams } from "react-router-dom";
import { selectDishesFilteredByName, selectIsDishLoading } from "../../store/entities/dish/selectors";
import { loadAllDishesIfNotExist } from "../../store/entities/dish/thunks/loadAllDishesIfNotExist";
import { Link } from "react-router-dom";

export const DishPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoading = useSelector(selectIsDishLoading);

  const menu = useSelector((state) =>
  selectDishesFilteredByName(state, {
    searchValue: searchParams.get("search") || "",
  })
);


  useEffect(() => {
    dispatch(loadAllDishesIfNotExist());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    
    <div className={styles.root}>
      <input
        value={searchParams.get("search") || ""}
        onChange={(event) => setSearchParams({ search: event.target.value })}
      />
      <div>
      {menu.map(({name, id}) => (
          <p><Link to={id}>{name}</Link></p>
        ))}
      </div>
    </div>
  );
};