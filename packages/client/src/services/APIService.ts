import axios, { AxiosInstance } from "axios";


class Service {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:8080/api/v1/"
        });
    }

    async getServerUsage (id: number) {
        const response = await this.axiosInstance.get(`status?serverId=${id}`);
        return response.data;
    }
}

export const APIService = new Service();