import { useNavigate, useParams } from "react-router-dom"
import { retrieveTodoApi, updateTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"

export default function TodoComponent() {
    const {id} = useParams()
    const authContext = useAuth()
    const navigate = useNavigate()
    const username = authContext.username
    const [description, setDescription] = useState('')
    const [targetDate, settargetDate] = useState('')

    useEffect(() => retrieveTodo(), [id])

    function retrieveTodo(){
        retrieveTodoApi(username ,id)
        .then(response => {
            console.log(response.data)
            setDescription(response.data.description)
            settargetDate(response.data.targetDate)
        })
        .catch(error => console.log(error))
    }

    function onSubmit(values) {
        console.log(values)
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
        console.log(todo)
        updateTodoApi(username, id, todo)
        .then(response => {
            console.log(response)
            navigate('/todos')
        })
        .catch(error => console.log(error))
    }

    function validate(values) {
        let errors = {
            // description: 'enter a valid desception'
        }
        if(values.description.length < 5){
            errors.description = 'Eneter atleast 5 characters'
        }
        if(values.targetDate == null) {
            errors.targetDate = 'Enter target date'
        }
        console.log(values)
        return errors
    }

    return(
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{description, targetDate}}
                    enableReinitialize = {true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage
                                name="description"
                                component="div"
                                className="alert alert-warning"
                            />
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-control" name="targetDate"></Field>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </div>
        </div>
    )
}