import RouteName from "../../Components/RouteName/RouteName";
import SideNav from "../../Components/SideNav/SideNav";
import styles from "./Proj_area.module.css";
import Field from "../../Components/SearchProject/Field";
import SearchProjectNav from "../../Components/SearchProject/SearchProjectNav.jsx"
import { AreaProvider } from "../../Hooks/useArea.jsx";
import SearchField from "../../Components/SearchProject/SearchField.jsx";
import { FilterProvider } from "../../Components/SearchProject/FilterContext.jsx";

const sidenavCont = [
  "전체 프로젝트",
  "지역별 프로젝트",
  "분야별 프로젝트",
  "내 맞춤 프로젝트",
];
const route = ["프로젝트 찾기", "분야별 프로젝트"];

const links = [
  "/projects/home",
  "/projects/area",
  "/projects/field",
  "/projects/fit",
];

const Proj_field = () => {
  return (
    <div>
      <div className={styles.searchp}>
        <RouteName route={route} />
        <div className={styles.searchp__content}>
          <div className={styles.sidenav}>
            <SideNav content={sidenavCont} link={links} />
          </div>
          <FilterProvider><AreaProvider><div className={styles.mainContent}>
            <Field />
            <SearchProjectNav/>
          </div></AreaProvider></FilterProvider>
        </div>
      </div>
    </div>
  );
};

export default Proj_field;
