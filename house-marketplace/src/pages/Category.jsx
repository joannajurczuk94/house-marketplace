import { useEffect, useState } from "react"
import {useParams} from "react-router-dom";
import {collection, getDocs, query, where, orderBy, limit, startAfter} from "firebase/firestore";
import {db} from "../firebase.config";
import {toast} from "react-toastify"
import Spinner from "../components/Spinner"

function Category() {
    return (
        <div>
category
        </div>
    )
}

export default Category