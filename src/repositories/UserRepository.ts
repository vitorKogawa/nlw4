import { EntityRepository, Repository } from "typeorm";
import { IUserRepository } from "../interfaces/repositories/IUserRepository";
import { Users } from "../database/entity/Users";

@EntityRepository(Users)
class UserRepository extends Repository<Users> implements IUserRepository
{
    async store(user: Users): Promise<boolean> 
    {
        const userAlreadyExists = await this.findOne({ where: { email: user.email } })
        if (userAlreadyExists) {
            return false
        } else {
            const newUser = this.create(user)
            await this.save(newUser)
            .then(() => true)
            .catch(error => {
                console.error(error)
                return false;
            })            
        }
    }

    async index(): Promise<Users[] | number> {
        const allUsers = await this.find()
        if (allUsers.length <= 0) {
            return 0
        } else {
            return allUsers
        }
    }

    async show(user: Users): Promise<Users | boolean> 
    {
        const userData  = await this.findOne({ where: { id: user.id } })
        if (userData) {
            return userData
        } else {
            return false      
        }
    }

    async change(user: Users): Promise<boolean> 
    {
        //verificar se o usuário existe na base de dados
        //atualizar os dados do usuário na base de dados
        const userExists =  await this.findOne({ where: { id: user.id } })
        if (userExists) {
            this.merge(userExists, user)
            await this.save(userExists)
            return true
        } else {
            return false
        }
    }

    async disable(user: Users): Promise<boolean> 
    {
        const result = await this.createQueryBuilder()
        .update(Users)
        .set({ isEnabled: false })
        .where("id = :id", { id: user.id } )
        .execute()
        .then(() => true)
        .catch(error => {
            console.error(error);
            return false
        })

        return result
    }

}

export { UserRepository }