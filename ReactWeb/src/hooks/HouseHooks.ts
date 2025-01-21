import { useState } from "react";
import { House } from "../types/house";
import config from "../config";

const useFetchHouses = (): House[] => {
    const [houses, setHouses] = useState<House[]>([]);
    
    const fetchHouses = async () => {
        const response = await fetch(`${config.baseApiUrl}/houses`);
        const houses = await response.json();
        setHouses(houses);
    };

    fetchHouses();

    return houses;
}

export default useFetchHouses;