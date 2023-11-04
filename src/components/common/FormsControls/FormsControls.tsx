import styles from './FormsControls.module.css'
import {Field} from "redux-form";
import  {ComponentType} from "react";

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
export const createField = (type: string, placeholder: string, name: string, validators: any, component: FieldComponentType, text: string = '') => {
    return (
        <div>
            <Field validate={validators}
                   name={name}
                   type={type}
                   placeholder={placeholder}
                   component={component}
                   text={text}/>{text}
        </div>

    )
}