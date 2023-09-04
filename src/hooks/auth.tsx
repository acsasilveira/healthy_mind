import { useContext } from "react";
import { AuthContext, IAuthContextData} from "../contexts/auth"

export function useAuth(): IAuthContextData {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error("useAuth deve ser usado com um AuthProvider");
    }

    return context
}