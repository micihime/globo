import { House } from "../types/house";
import config from "../config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import Problem from "../types/problem";

const useFetchHouses = () => {
    return useQuery<House[], AxiosError>({
        queryKey: ["houses"],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/houses`).then((resp) => resp.data),
    })
}

const useFetchHouse = (id: number) => {
    return useQuery<House, AxiosError>({
        queryKey: ["houses", id],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/houses/${id}`).then((resp) => resp.data),
    })
}

const useAddHouse = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError<Problem>, House>({
        mutationFn: (house) => axios.post(`${config.baseApiUrl}/houses`, house),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["houses"]
            });
            nav("/");
        }
    });
}

const useUpdateHouse = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError<Problem>, House>({
        mutationFn: (house) => axios.put(`${config.baseApiUrl}/houses`, house),
        onSuccess: (_, house) => {
            queryClient.invalidateQueries({
                queryKey: ["houses"]
            });
            nav(`/house/${house.id}`);
        }
    });
}

const useDeleteHouse = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, House>({
        mutationFn: (house) => axios.delete(`${config.baseApiUrl}/houses/${house.id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["houses"]
            });
            nav("/");
        }
    });
}

export default useFetchHouses;
export { useFetchHouse, useAddHouse, useUpdateHouse, useDeleteHouse };