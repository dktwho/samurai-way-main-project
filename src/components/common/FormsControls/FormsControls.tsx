import styles from './FormsControls.module.css'

export const TextArea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            <div>
                {hasError ? <span className={styles.error}>{meta.error}</span> : ''}
            </div>
        </div>

    )
}

export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            <div>
                {hasError ? <span className={styles.error}>{meta.error}</span> : ''}
            </div>
        </div>

    )
}