import {useState} from 'react'

function useForm(callback,defaults){
    const [inputs,setInput] = useState(defaults)

    const handleSubmit = (event)=>{
        event.preventDefault();
        callback(inputs)
    }

    const handleChange = (event)=>{
        const {name, value} = event.target
        setInput({...inputs,[name]:value})
    }

    return{
        inputs,
        handleSubmit,
        handleChange
    }
}

export default useForm;