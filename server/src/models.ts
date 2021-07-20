import { User } from "./users/user.entity";

export interface RequestStatus {  
    success: boolean;  
    message: string;
}

export interface LoginStatus {  
    success: boolean;  
    message: string;
    access_token: string;
}
