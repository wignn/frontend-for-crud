"use server"

import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import {API} from './Api'

export const sessionServer = async ()=>{
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    try {
        const response = await axios.get(`${API}/users/${userId}`); 
        const data = response.data; 
        return parseInt(data.id, 10)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }

}