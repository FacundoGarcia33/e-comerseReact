import "./Checkaut.css"
const FormChekaut = ({ Valores, eventChange, eventSubmit }) => {  
    return (
        <div className="MiFormulario">
            <form onSubmit={eventSubmit}> 
                <label>Nombre</label>
                <input type="text" placeholder="Ingrese su nombre aqui" name="name" value={Valores.name} onChange={eventChange}/>
                
                <label>Apellido</label>
                <input type="text" placeholder="Ingrese su apellido aqui" name="apellido" value={Valores.apellido} onChange={eventChange}/>

                <label>Email</label>
                <input type="email" placeholder="Ingrese su correo electronico aqui" name="email" value={Valores.email} onChange={eventChange}/>

                <label>Confirmar Email</label>
                <input type="email" placeholder="Confirme su email Aqui" name="confirmEmail" value={Valores.confirmEmail}  onChange={eventChange}/>

                <label>Numero de telefono</label>
                <input type="number" placeholder="Ingrese su telefono aqui" name="phone" value={Valores.phone} onChange={eventChange}/>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};
export default FormChekaut;
