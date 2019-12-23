import React, {Component} from 'react';
import Joi from "joi-browser";
import _ from "lodash";
import FormInput from "./formInput";
import Select from "./select";

class Form extends Component {
    state = {
        formData: {},
        errors:{}
    };

    handleChange = ({currentTarget: input })=>{

        const data = {...this.state.formData};
        const errors = {...this.state.errors};
        data[input.name] = input.value;

        const errorMsg = this.validateProp(input);
        if (errorMsg) errors[input.name] = errorMsg;
       else delete errors[input.name];

        this.setState({formData:data, errors});
    };

    handleSubmit = (e)=>{
        e.preventDefault();
        const errors = this.validateForm();
        this.setState({errors: errors || {}});
        if(!_.isEmpty(errors)) return;

        this.implSubmit();
    };


    validateForm (){
        const result = Joi.validate(this.state.formData,this.schema,{abortEarly:false});
        if(!result.error) return;
        const errors = {};
        //detail.path gives field name
        result.error.details.map(detail=>
            errors[detail.path[0]] = detail.message
        );
        return errors;
    };

    validateProp({name, value}){
        //[name] gives userName or password ; a computed property.
        const obj = { [name]: value };
        const newSchema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, newSchema);
        return error ? error.details[0].message : null;
    };



    renderInput = (name, label, component=null, type="text")=>{
        const {formData, errors} = this.state;
        return (
        <FormInput
            type={type}
            name={name}
            value={formData[name]}
            label={label}
            component={component}
            onChange={this.handleChange}
            error={errors[name]}
        />
        )
    };

    renderSelect = (name, label, items) =>{
        const {formData, errors} = this.state;
        return (
        <Select
            name={name}
            value={formData[name]}
            label={label}
            items={items}
            onChange={this.handleChange}
            error={errors[name]}
        />
        )
    }

    renderSubmitBun = (label)=>{
        return (
            <button disabled={this.validateForm()}
                    className="btn btn-primary"

            >
                {label}
            </button>
        );
    };
}

export default Form;