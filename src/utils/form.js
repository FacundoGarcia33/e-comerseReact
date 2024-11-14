import { mixed, number, object, string } from 'yup';

let user = object({
    name:string().required(),
    apellido:string().required(),
    email:string().email(),
    phone:mixed().required()
})

let ValidarForm = async(data) => {
    try {
        await user.validate(data)
        return{status:"secces"}
    } catch (error) {
        return{status:"error", message:error.message}
    }
}

export default ValidarForm