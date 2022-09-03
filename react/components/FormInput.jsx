// import './form-input.styles.scss'

const FormInput = ({ label, error, touched, labelText, ...otherProps }) => {
  return (
    <div className="form-input__container">
      <div>
        {labelText && <p>{labelText}</p>}
        {error && touched && <span className="error-msg">{error}</span>}
      </div>
      <input
        className={`form-input ${error && touched ? 'contain-error' : ''}`}
        {...otherProps}
        placeholder={label}
        autoComplete="on"
      />
      {/* {error && touched && <span className="error-msg">{error}</span>} */}
    </div>
  )
}

export default FormInput
