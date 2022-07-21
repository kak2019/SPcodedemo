import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
     
      <><><><div className={styles.wrapper}>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.light}></div>
        <div className={styles.panel}>
          <div className={styles.sector} />
          <div className={styles['sector-inner']} />
          <span>贡献五元</span>
        </div>
      </div>
        <div className={styles.sector}>
          <div className={styles['sector-inner']}>
            <span> 贡献十元</span>
          </div>
        </div>
        <div className={styles.sector}>
          <div className={styles['sector-inner']}>
            <span>贡献五元</span>
          </div>
        </div>
        <div className={styles.sector}>
          <div className={styles['sector-inner']}>
            <span>贡献50</span>
          </div>
        </div>
        <div className={styles.sector}>
          <div className={styles['sector-inner']}>
            <span> 贡献十元</span>
          </div>
        </div>
        <div className={styles.sector}>
          <div className={styles['sector-inner']}>
            <span>贡献五元</span>
          </div>
        </div>
        <div className={styles.sector}>
          <div className={styles['sector-inner']}>
            <span>贡献50</span>
          </div>
        </div>
        <div className={styles.sector}>
          <div className={styles['sector-inner']}>
            <span>贡献五元</span>
          </div>
        </div>
        <div className={styles.sector}>
          <div className={styles['sector-inner']}>
            <span> 贡献十元</span>
          </div>
        </div>
        <div className={styles.sector}>
          <div className={styles['sector-inner']}>
            <span>再来一次</span>
          </div>
        </div>
        <div className="pointer">开始抽奖</div>
    
      <div id="demo"></div><div className="result"></div><button type="button">我是按钮</button></></></>
    
    
    );
  }
}
