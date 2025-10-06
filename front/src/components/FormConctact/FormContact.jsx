import styles from "./FormContact.module.scss";

const FormContact = () => {
  return (
    <div className={`${styles.formContact} col-md-8`}>
      <h5>Contáctanos</h5>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="name" className="form-label">
            Tu nombre <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="form-label">
            Tu email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="website" className="form-label">
            Tu Celular <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="website"
            name="website"
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="subject" className="form-label">
            Asunto <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            required
          />
        </div>

        <div className="col-md-12 mb-3">
          <label htmlFor="message" className="form-label">
            Tu mensaje
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="8"
            name="message"
          ></textarea>
        </div>

        <div className="col-md-12 text-end mb-4">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
