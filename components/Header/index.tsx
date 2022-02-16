import styles from "./Header.module.css";
import Link from "next/Link";
import { FaLongArrowAltLeft } from "react-icons/fa";
interface Props {
  text: string;
}
function Header({ text }: Props) {
  return (
    <div className={styles.header}>
      <Link href="/">
        <FaLongArrowAltLeft size={30} className={styles.header_back_icon} />
      </Link>
      <div className={styles.header_text}>
        <p>{text}</p>
      </div>
      <div className={styles.header_logo}>
        <p>Farhad Mohseni</p>
      </div>
    </div>
  );
}

export default Header;
