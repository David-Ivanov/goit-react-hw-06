import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const validation = Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required");
const addContactSchema = Yup.object().shape({
    username: validation,
    number: validation
});

export default function ContactForm({ onSubmit }) {

    const initialValues = {
        username: "",
        number: ""
    }

    const addContact = (values, actions) => {
        onSubmit({
            username: values.username,
            number: values.number,
        });

        actions.resetForm();
    }

    return (
        <Formik validationSchema={addContactSchema} initialValues={initialValues} onSubmit={addContact}>
            <Form className={css.form}>

                <div className={css.box}>
                    <label htmlFor="">Name</label>
                    <Field className={css.input} type="text" name="username" />
                    <p className={css.error}><ErrorMessage name="username" as="span" /></p>
                </div>
                <div className={css.box}>
                    <label htmlFor="">Number</label>
                    <Field className={css.input} type="text" name="number" />
                    <p className={css.error}><ErrorMessage name="number" as="span" /></p>
                </div>
                <button className={css.btn} type="submit">Add contact</button>

            </Form>
        </Formik>);
}