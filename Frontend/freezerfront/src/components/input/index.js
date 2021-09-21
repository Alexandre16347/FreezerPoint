import React, {useEffect, useRef} from "react";
import { Container } from "./styles";
import { useField} from "@unform/core";



const Input = ({name,...rest}) =>{

    const referenciaInput = useRef(null)
    const {fieldName, defaultValue, error, registerField} = useField(name)
    useEffect(() =>{
        registerField({
            name: fieldName,
            ref: referenciaInput.current,
            path: "value",
        }
        )
    }, [])
    
    return (
        
        <Container>
            <input{...rest} 
            ref={referenciaInput}>
            </input>
        </Container>
        
    
    ) 
}

export default Input;