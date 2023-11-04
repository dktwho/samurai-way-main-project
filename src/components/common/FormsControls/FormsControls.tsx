import styles from './FormsControls.module.css'
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";
import React, {ComponentType} from "react";

const FormControl = ({input, meta, child, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError ? <span className={styles.error}>{meta.error}</span> : ''}
            </div>
        </div>

    )
}
export const TextArea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}> <textarea {...props.input} {...restProps} /></FormControl>
    )
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}> <input {...props.input} {...restProps} /></FormControl>
    )
}


type FieldComponentType = ComponentType<Field & unknown> | "input" | "select" | "textarea" | undefined
export const createField = (placeholder: string, name: string, validators: string, component: FieldComponentType) => {
    return (
        <Field validate={validators}
               name={name} type="text"
               placeholder={placeholder}
               component={component}/>
    )
}