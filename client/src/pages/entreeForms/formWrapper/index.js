import { printIntrospectionSchema } from 'graphql'
import './index.css'
const FormWrapper = (props) => {
    return(
        <div className = "formWrapper">
            {props.children}
        </div>
    )
}

export default FormWrapper