import { AxiosResponse } from "axios";

import network from "../utils/network";
import { GetUserListResponse } from "../models/interfaces";

export const contactServices = {
  getUserList(): Promise<AxiosResponse<GetUserListResponse>> {
    return network.get("/?results=200");
  },
};
