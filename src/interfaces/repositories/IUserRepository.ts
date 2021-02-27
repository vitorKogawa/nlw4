import { Users } from "../../database/entity/Users";

interface IUserRepository 
{
    store(user: Users): Promise<boolean>;
    index():Promise<Users[] | number>;
    show(user: Users): Promise<Users | boolean>;
    change(user: Users): Promise<boolean>;
    disable(user: Users): Promise<boolean>;
}

export { IUserRepository }