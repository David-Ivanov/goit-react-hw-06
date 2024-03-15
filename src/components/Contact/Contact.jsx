import { FaPhoneAlt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ name, number, id, deleteContact }) {
    return (
        <li className={css.item}>
            <div>

                <div className={css.line}>
                    <BsPersonFill className={css.icon} />
                    <p>{name}</p>
                </div>

                <div className={css.line}>
                    <FaPhoneAlt className={css.icon} />
                    <p>{number}</p>
                </div>

            </div>

            <button data-id={id} type="button" onClick={deleteContact}>Delete</button>
        </li>
    )
}