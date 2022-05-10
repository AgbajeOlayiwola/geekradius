import React,{useState, useEffect} from 'react'
import styles from '../../styles/pages/services/products.module.css'
import {prod} from '../../components/data/Contentdata'
import Uxuiimage from '../../components/commons/Uxuiimage'
import Flexwrapper from '../../components/layout/Flexwrapper'
import { useRouter } from 'next/router'
const Products = () => {

  const [indx, setIndx] = useState()

  const indexNum = ['0','1','2','3','4']

  
  const router = useRouter();
  const productsid= router.query.products





  return (
    <div className={styles.Products}>
        <div className={styles.Productsinner}>
      {
        prod.map((products, index)=>{
          indexNum.map((indexNumber, index)=>{
            if(indexNumber === productsid){ 
          return(
            <React.Fragment key={index}>

              {console.log(indexNumber, index)}
            {indexNumber === index ?

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
                      <div><p>{products.approachsub}</p></div>
                      <div><p>{products.approachsubCont}</p></div>
                      {index === 0 ?
                      <span className={styles.list}>
                           {products.approachList.map((list, index)=>{
                              return(
                                  <React.Fragment key={index}>
                                  <li>{list}</li>
                                  </React.Fragment>
                              )
                          })}
                      </span>
                      :
                      null
                      }
                  </div>
                  <Uxuiimage width='350' height='350'/> 
                  
              </Flexwrapper>


              <Flexwrapper>
                <div className={styles.approach}>
                    <div><p>{products.approachsubI}</p></div>
                    <div><p>{products.approachsubContI}</p></div>
                </div>
                <Uxuiimage width='350' height='350'/> 
              </Flexwrapper>

              <Flexwrapper  orientation={'reverse'}>
                <div className={styles.approach}>
                  <div><p>{products.approachsubII}</p></div>
                  <div><p>{products.approachsubContII}</p></div>
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
              :
              null
              }
            </React.Fragment>
          )
        }
      })
        })
      }
      </div>
    </div>
  )
}

export default Products