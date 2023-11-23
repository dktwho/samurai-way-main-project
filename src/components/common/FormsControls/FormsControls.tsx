import styles from './FormsControls.module.css'
import {Field} from "redux-form";
import {ComponentType} from "react";
import {FieldValidatorType} from "../../../utils/validators/validators";

const FormControl = ({touched, error, children}: any) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            <div>
                {hasError ? <span className={styles.error}>{error}</span> : ''}
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

export function createField<T extends string>(type: string, placeholder: string, name: T, validators: FieldValidatorType[], component: FieldComponentType, text: string = '') {
    return <div>
        <Field validate={validators}
               name={name}
               type={type}
               placeholder={placeholder}
               component={component}
               text={text}/>{text}
    </div>
}