const FormNewsletter = () => {
  return (
    <div className="widget__form-newsletter ">
      <p>
        Sucríbete para recibir el resumen semanal con nuestras últimas
        publicaciones
      </p>
      <div className="mt-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Escribe tu email"
        />

        <button className="btn btn-primary btn-block" type="button">
          Suscribirme
        </button>
      </div>
    </div>
  );
};

export default FormNewsletter;
