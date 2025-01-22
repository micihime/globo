import { useParams } from "react-router-dom";
import { useFetchHouse } from "../hooks/HouseHooks";
import ApiStatus from "../apiStatus";

const HouseDetail = () => {
    const { id } = useParams();
    if (!id) throw Error("House id is missing in the route params");
    const houseId = parseInt(id);
    if (isNaN(houseId)) throw Error("House id is not a number");

    const {data, status, isSuccess} = useFetchHouse(houseId);
    if (!isSuccess) return <ApiStatus status={status} />
    if (!data) return <div>House not found</div>

    return (
        <div className="row">
            House Detail - {data.description}
        </div>
    )
}

export default HouseDetail