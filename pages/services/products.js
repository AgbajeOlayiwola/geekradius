import React from 'react'
import styles from '../../styles/pages/services/products.module.css'
import {prod} from '../../components/data/Contentdata'
import Uxuiimage from '../../components/commons/Uxuiimage'
import Flexwrapper from '../../components/layout/Flexwrapper'

const Products = () => {
  return (
    <div className={styles.Products}>
        <div className={styles.Productsinner}>
      {
        prod.map((products, index)=>{
          console.log(prod)
          return(
            <>
            <div className={styles.top}>
              <h1>{products.title}</h1>

            <div className={styles.topRight}>
              <div className={styles.outerCircle}>
                  <div className={styles.innerCircle}>
                    <Uxuiimage width='250' height='250'/>
                  </div>
              </div>
            </div>
              </div>
              <Flexwrapper>
                  <div className={styles.chall}>
                      <div className={styles.challenge}><p>{products.challenge}</p></div>
                      <div><p>{products.challengecont}</p></div>
                  </div>
                  <Uxuiimage width='350' height='350'/>
              </Flexwrapper>
              <Flexwrapper orientation={'reverse'}>
                  <div className={styles.approach}>
                      <div className={styles.challenge}><p>{products.Approach}</p></div>
                      <div><p>{products.ApproachCont}</p></div>
                      <span className={styles.list}>
                          {products.approachList.map((list, index)=>{
                              return(
                                  <>
                                  <li>{list}</li>
                                  </>
                              )
                          })}
                      </span>
                  </div>
                  <Uxuiimage width='350' height='350'/>
              </Flexwrapper>
              <Flexwrapper>
                      <div className={styles.outcme}>
                          <div className={styles.challenge}><p>{products.outcome}</p></div>
                          <div><p>{products.ooutcomeCont}</p></div>
                      </div>
                      <Uxuiimage width='350' height='350'/>
              </Flexwrapper>
            </>
          )
        })
      }
      </div>
    </div>
  )
}

export default Products