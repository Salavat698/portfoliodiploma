import styles from "./styles.module.css"
import classNames from "classnames";
import { footerMembers } from "../../mock/footerMembers"
import { FooterItem } from "../FooterItem/FooterItem"

export const Footer = () => {
    console.log(footerMembers);
    return <footer className={classNames(styles.footer)}>
        {footerMembers.map((person) => <FooterItem key={person.id} info={person}/>)}
    </footer>
}