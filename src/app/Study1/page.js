import Image from "next/image"
 import styles from "../Styles/Pages.module.css"

   export default function Study(){
      return(
          <>
          <div className="Study_section container">
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.col_md_7}>
                  <div className={styles.text_material}>
                 
                  <h3 className={styles.text_start}>
                  YAP-1 Inhibition Study
                  </h3>
                  <p className={styles.fw_bold}>
                  Principle Investigator: <span className={styles.fw_lighter}> Dr.Taleb Barghouthi, Dr. Blake Bloxham</span>
                  </p>
                  <p className={styles.fw_bold}>
                  Partners: <span className={styles.fw_lighter}>Vertex Hair Clinic</span>
                  </p>
                  <div className={styles.img_responsive}>
                  <a className={styles.text_field } href="/">
                    <Image className={styles.img_fluid} width="500" height="500" src="/Image.png" alt="Logo1" />
                  </a>
                  </div>
                  <p className={styles.fw_bold}>
                About: <span className={styles.fw_lighter}>YAP-1 downregulation offers a path to reduced scarring in hair transplants, allowing for potential neogenesis of hair follicles in the donor region from which follicles are extracted in transplants. Reduced scarring, even if only mildly obtained, has profound benefits for hair transplant patients. Significantly reduced scarring, if allowing for hair regrowth at the scar site, would not only significantly reduce the risks of hair transplants, but also offer a path to follow-on hair transplants utilizing the same follicle sites extracted in past transplants <br/> <br/>
                
                HairDAO, in collaboration Dr. Taleb Barghouthi and Dr. Blake Bloxham, has purchased the most innovative tricholab equipment on market today, allowing for best-in-class measurements of hair and skin performance without the need for tatooing the patient's scalp. The equipment HairDAO has purchased will allow Dr. Barghouthi and Bloxham to better analyze the patients on which they administer FDA-approved, off-label Verteporfin, the most prominent YAP-1 inhibitor on the market today. Alongise, Dr. Barghouthi and Dr. Bloxham, HairDAO will continue develop better YAP-1 inhibition strategies, though combination therapies and improved dosage and protocol testing. Paths to monetization include developing, patenting and protocolizing novel YAP-1 inhibition strategies.</span>
                  </p>
                  
                  <h3 className={styles.fw_bold}>
                Timeline:  <span className={styles.fw_lighter}>12 Months</span></h3>
                <h3 className={styles.fw_bold}>
                  3 Months: <span className={styles.fw_lighter}> Ongoing</span>
                  </h3>
                  <div className={styles.fw_lighter}>
                <ul className="">
                  <li>
                    <p>FDA-approved, YAP-1 inhibition strategies will be tested on three patients, with measurements taken using HairDAO's tricholabs at respective hair transplant clinics. </p>
                    </li>
                    <li><p>Combination therapies, dosage, and protocol improvements will be generated by HairDAO in collaboration with Dr. Barghouthi and Dr. Bloxham.</p>
                    </li>
                    <li><p>Education and reach-out by HairDAO to additional doctors, to further gauge demand for YAP-1 inhibitors.</p>

                    </li>
                  </ul> 
                    </div>
                <p className={styles.fw_bold} >
                  6 Months: <span className={styles.fw_lighter}> Ongoing</span>
                  </p>
                  <div className={styles.fw_lighter}>
                <ul>
                  <li><p>Further in vivo testing of optimized YAP-1 inhibition strategies with Dr. Barghouthi, Dr. Bloxham, and additional doctors.</p>
                    </li>
                    <li><p>Selection of path to market, with optimized dosage and protocol selected within range.</p>
                    </li>
                    </ul>
                    
                <h3 className="text-start mt-4 text-black fw-bold" >
                  12 Months: <span className={styles.fw_lighter}> Ongoing</span>
                  </h3>
                  <div className="mt-4">
                <ul>
                  <li>
                <p>Additional in vivo testing of optimized dosage and protocol.</p>
                </li>
                  
                  </ul>
                    </div>
                    </div>
                  
                    </div>
                </div>
                <div className={`${styles.col_md_4} ${styles.imgcol}`}>
              
                  <a className={styles.desktop_img } href="/">
                    <Image className={styles.img_fluid} width="500" height="500" src="/Image.png" alt="Logo1" />
                  </a>
                  <div className={styles.img_text}>
                <h3 className={styles.text_center} >
                    YAP-1 IP
                  </h3>
                  <div className={styles.text_left}>
                  <p className={styles.fw_bold}>Funding:
                 <span className={styles.fw_lighter}> $30,504.00</span>
                  </p>
                  <p className={styles.fw_bold}>Initiated:
                 <span className={styles.fw_lighter}>Ongoing</span>
                  </p>
                  <p className={styles.fw_bold}>Ownership:
                 <span className={styles.fw_lighter}> Ongoing</span>
                  </p>
                  <p className={styles.fw_bold}>Patent Status
                 <span className={styles.fw_lighter}> Not Filed</span>
                 
                  </p>
                    </div>
                  </div>
                </div>
            </div>
            </div>
            </div>
         </>
      )
  }





