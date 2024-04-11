import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";

function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => {
    return state.contactBox.filter;
  });

  const searchFilter = (event) => {
    const action = {
      type: "contactBox/FILTER_CONTACTS",
      payload: event.target.value,
    };
    dispatch(action);
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
