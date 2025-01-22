import { useParams } from "react-router-dom";
import { useFetchHouse } from "../hooks/HouseHooks";
import ApiStatus from "../apiStatus";
import { currencyFormatter } from "../config";
import defaultImage from "./defaultPhoto";

const HouseDetail = () => {
    const { id } = useParams();
    if (!id) throw Error("House id is missing in the route params");
    const houseId = parseInt(id);
    if (isNaN(houseId)) throw Error("House id is not a number");

    const { data, status, isSuccess } = useFetchHouse(houseId);
    if (!isSuccess) return <ApiStatus status={status} />
    if (!data) return <div>House not found</div>

    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid" src={data.photo} alt="House pic" />
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h5 className="col-12">{data.country}</h5>
                </div>
                <div className="row">
                    <h3 className="col-12">{data.address}</h3>
                </div>
                <div className="row">
                    <h2 className="themeFontColor col-12">
                        {currencyFormatter.format(data.price)}
                    </h2>
                </div>
                <div className="row mt-2">
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default HouseDetail