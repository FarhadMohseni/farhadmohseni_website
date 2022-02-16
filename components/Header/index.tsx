import styles from "./Header.module.css";
import Link from "next/Link";
import { FaLongArrowAltLeft } from "react-icons/fa";
interface Props {
  text: string;
  back?: string;
}
function Header({ text, back }: Props) {
  return (
    <div className={styles.header}>
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
