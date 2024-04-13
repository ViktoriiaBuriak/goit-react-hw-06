import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";

function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filters.name);

  const searchFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchWrap}>
      <p className={css.searchTitle}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={filter}
        onChange={searchFilter}
      />
    </div>
  );
}

export default SearchBox;
