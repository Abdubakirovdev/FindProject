import {AppDispatch} from "../store/Store";
import {useDispatch} from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>()