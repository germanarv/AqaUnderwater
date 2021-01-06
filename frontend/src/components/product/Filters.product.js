import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch, faSort } from '@fortawesome/free-solid-svg-icons';


function FiltersProduct() {
  return (
    <div className="filtersMain">
      <button className="btnFilters" id="searchFilters"><FontAwesomeIcon icon={faSearch} /></button>
      <button className="btnFilters">Filtrar<FontAwesomeIcon icon={faFilter} className="filterIcons" /></button>
      <button className="btnFilters">Ordenar<FontAwesomeIcon icon={faSort} className="filterIcons" /></button>
    </div>
  );
}

export default FiltersProduct;