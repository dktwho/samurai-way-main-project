import styles from './FormsControls.module.css'

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