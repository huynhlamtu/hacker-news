import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currtentPage }) => {
  //neu so items it hon so items toi da trong 1 trang thi ko can paginate
  if (itemsCount < pageSize) return null;

  //dem so trang duoc pagination
  const pagesCount = itemsCount / pageSize;

  //array hien thi so trang duoc paginate, tu 1, 2, 3,... => pageCount + 1
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="d-flex justify-content-center mt-3">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            style={{ cursor: "pointer" }}
            key={page}
            className={page === currtentPage ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currtentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};

export default Pagination;
