import { useParams } from "react-router-dom";

const HouseDetail = () => {
    const { id } = useParams();
    if (!id) throw Error("House id is missing in the route params");
    const houseId = parseInt(id);

    return (
        <div>House Detail {houseId}</div>
    )
}

export default HouseDetail