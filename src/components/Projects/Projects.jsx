import Project from "../Project/Project.jsx";
import Header from "../Header/Header.js";
import { readyWorkEn, readyWorkRU } from "../../mock/readyWork.js";
import LazyLoading from "../LazyLoading/LazyLoading.jsx"
import styles from "./styles.module.css";
import { v4 } from "uuid";
import { useContext, useState, Suspense } from "react";
import classnames from "classnames";
import search from "../../img/search-icon.svg"
import { LanguageContext } from "../LanguageWrapper/LanguageWrapper";
import { membersEn, membersRU } from "../../mock/mapMembers";
import { FormattedMessage } from "react-intl";


function addWorks(works, count) {
  let visibleWorks = [];
  for (let i in works) {
    if (Number(i) === count) break;
    visibleWorks.push(works[i]);
  }
  return visibleWorks;
}
function sortWorsk(works, v) {
  
}

function Projects(props) {
  const readyWork = (useContext(LanguageContext).locale === 'en') ? readyWorkEn : readyWorkRU

  const [count, setCount] = useState(2);
  const [searchKey, setSearchKey] = useState('')
  const worksCount = readyWork.length;
  const visibleWorks = addWorks(readyWork, count).filter(w=>{
    return w.name.toLowerCase().includes(searchKey.toLowerCase())
  });
  return (
    <>
      <Header path="projects" />
      <Suspense fallback={<LazyLoading/>}>
      <div className={styles.block}>
      <div className={styles.projectsHeader}>
        <h2 className={styles.title}>Наши проекты</h2>
        <div className={styles.searchForm}>
          <input className={styles.search} id="search" type="text" onChange={(e) => {setSearchKey(e.target.value.toLowerCase())}}/>
          <label htmlFor="search">
            <div className={styles.imgBlock}>
              <img src={search} alt=""/>
            </div>
          </label>
        </div>
      </div>
        <div className={styles.prjectsBlock}>
          {visibleWorks.map((val) => {
            return (
              <Project
                key={v4()}
                previewPath={val["previewPath"]}
                name={val["name"]}
                developers={val["author"]}
                kind={val["purpose"]}
                description={val["description"]}
                developmentStack={val["technology"]}
              />
            );
          })}
        </div>
      </div>
        <button
          className={classnames(styles.showMoreBtn, {[styles.hideBtn]:count >= worksCount})}
          onClick={() => {
            setCount(count <= worksCount ? count + 2 : count);
          }}
        >
          <FormattedMessage id="projects.btn"/>
        </button>
      </Suspense>
    </>
  );
}

export default Projects;
