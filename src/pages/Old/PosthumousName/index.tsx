import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { classNames } from '@chbphone55/classnames';
import posthumousNames from './posthumous-name.json';
import styles from './index.module.scss';

const Search = Input.Search;

enum Grade {
  Top = 1, // 上谥
  Middle = 2, // 中谥
  Bottom = 3, // 下谥
}

function PosthumousName() {
  const [key, setKey] = useState('');
  const [categoryList, setCategoryList] = useState([Grade.Top, Grade.Middle, Grade.Bottom]);

  const keys = [];
  for (let k of key) {
    const keyObj: any = {
      label: k,
    };
    const nameObj = posthumousNames.find((v: any) => v.name === k);
    if (nameObj) {
      keyObj.grade = nameObj.grade;
    }
    keys.push(keyObj);
  }

  let filterPosthumousNames = key
    ? posthumousNames.filter((item) => key.includes(item.name))
    : posthumousNames;
  filterPosthumousNames = filterPosthumousNames.filter(item => categoryList.includes(item.grade));

  return (
    <div className={styles.posthumousName}>
      {/* <header>
        <h1>谥号</h1>
        <div className={styles['title-comment']}>数据来源：《逸周书·谥法解》</div>
      </header> */}

      <div className={styles.content}>
        <div className={styles.keys}>
          {keys.map((item, i) => (
            <span key={i} className={styles['grade-' + item.grade]}>
              {item.label}
            </span>
          ))}
        </div>

        <Search
          placeholder="请输入您想查询的谥号，如：光武……"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          size="large"
          allowClear
        />

        <div className={styles['color-example-container']}>
          <Button
            className={classNames(styles.noStyleBtn, !categoryList.includes(Grade.Top) && styles.notSelectedBtn)}
            type="link"
            onClick={() => {
              if (categoryList.includes(Grade.Top)) {
                setCategoryList(categoryList.filter(value => value !== Grade.Top));
              } else {
                setCategoryList([...categoryList, Grade.Top]);
              }
            }}
          >
            <span
              className={styles['color-example'] + ' ' + styles['grade-1']}
            ></span>
            上谥
          </Button>
          <Button
            className={classNames(styles.noStyleBtn, !categoryList.includes(Grade.Middle) && styles.notSelectedBtn)}
            type="link"
            onClick={() => {
              if (categoryList.includes(Grade.Middle)) {
                setCategoryList(categoryList.filter(value => value !== Grade.Middle));
              } else {
                setCategoryList([...categoryList, Grade.Middle]);
              }
            }}
          >
            <span
              className={styles['color-example'] + ' ' + styles['grade-2']}
            ></span>
            中谥
          </Button>
          <Button
            className={classNames(styles.noStyleBtn, !categoryList.includes(Grade.Bottom) && styles.notSelectedBtn)}
            type="link"
            onClick={() => {
              if (categoryList.includes(Grade.Bottom)) {
                setCategoryList(categoryList.filter(value => value !== Grade.Bottom));
              } else {
                setCategoryList([...categoryList, Grade.Bottom]);
              }
            }}
          >
            <span
              className={styles['color-example'] + ' ' + styles['grade-3']}
            ></span>
            下谥
          </Button>
        </div>

        <ul className={styles['posthumous-name-container']}>
          {filterPosthumousNames.map((item) => (
            <li key={item.name} className={styles['posthumous-name']}>
              <div
                className={
                  styles['posthumous-name--name'] +
                  ' ' +
                  styles['grade-' + item.grade]
                }
              >
                {item.name}
              </div>
              <div className={styles['posthumous-name--description']}>
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PosthumousName;
