import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"

class UserController
{
    async store(request: Request, response: Response)
    {
        const userRepository = getCustomRepository(UserRepository)
        const { name, email } = request.body as IUsers
        const newUser = {
            name,
            email,
            isEnabled: false
        } as IUsers

        await userRepository.store(newUser)
    }
}

export { UserController }