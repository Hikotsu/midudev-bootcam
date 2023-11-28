const Mensaje = (props) => {
    return (
        <div>
            <h1 style={{color: props.color, fontFamily: props.fuente}}>
                {props.message}
            </h1>
        </div>
    );
}
export default Mensaje;