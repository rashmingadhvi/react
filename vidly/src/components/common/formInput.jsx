import React from 'react';
import _ from 'lodash';
const FormInput = ({name, label, component, error, ...rest}) =>
    {
        return (
          <div className="form-group">
            <label htmlFor={name}>{label}</label>
              {
                  null!=component?
                      component:
                  <input
                  name={name}
                  className="form-control"
                  id={name}
                  {...rest}
                  />

              }

            {!_.isEmpty(error) && (
              <div className="alert alert-warning">{error}</div>
            )}
          </div>
        );

}

export default FormInput;