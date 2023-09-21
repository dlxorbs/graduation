import styles from "./MainLayout.module.css";
import Header from "../component/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../component/Ui/footer";

const MainLayout = () => {
    return(
        <div className={styles.mainlayout}>
            <Header />
            <Outlet/>
            {window.location.pathname !== "/" && <Footer/>}
        </div>
    )
}

export default MainLayout;