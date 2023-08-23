import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/DeleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

function ListingItem(listing, id) {
  return (
    <div>
      <li className="categoryListing">
        <Link
          to={`/category/${listing.type}/${id}`}
          className="categoryListingLink"
        >
          <img
            src={listing.imgUrls[0]}
            alt={listing.name}
            className="categoryListingImg"
          />
        </Link>
      </li>
    </div>
  );
}

export default ListingItem;
