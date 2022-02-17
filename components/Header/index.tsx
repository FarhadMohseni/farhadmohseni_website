import styles from "./Header.module.css";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
interface Props {
  text: string;
  back?: string;
  dark?: boolean;
}
function Header({ text, back, dark }: Props) {
  return (
    <div className={dark ? styles.header_dark : styles.header}>
      <Link href={back ? back : "/"}>
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
