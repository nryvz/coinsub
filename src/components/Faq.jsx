import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <>
      <section>
        <div className="faq_container">
          <h5 className="faq_title">Frequently Asked Questions</h5>
          <div className="accordion">
            <Accordion defaultExpanded style={{border: "1px solid #254DA5",background: "linear-gradient(0deg, #031325 0%, #030817 100%)",boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.30)"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#9ae8ff " />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" style={{color:" #FFF",textAlign: "center",fontFamily: "Maison Neue Book",fontSize: "18px"}}>Why Coinsub?</Typography>
              </AccordionSummary>
              <AccordionDetails style={{color:" #FFF",fontFamily: "Maison Neue Book",lineHeight: "28px",}}>
                It’s our mission to make it efficient and enjoyable to pay and
                be paid. Coinsub was created in response to the lack of user
                friendly alternatives in the crypto payments space. We get it.
                Tech is cool, a smoother user experience is cooler.
              </AccordionDetails>
            </Accordion>
            <Accordion style={{border: "1px solid #254DA5",background: "linear-gradient(0deg, #031325 0%, #030817 100%)",boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.30)"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#9ae8ff " />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span" style={{color:" #FFF",textAlign: "center",fontFamily: "Maison Neue Book",fontSize: "18px"}}>How and when do I get paid as a merchant?</Typography>
              </AccordionSummary>
              <AccordionDetails style={{color:" #FFF",fontFamily: "Maison Neue Book",lineHeight: "28px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion style={{border: "1px solid #254DA5",background: "linear-gradient(0deg, #031325 0%, #030817 100%)",boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.30)"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#9ae8ff " />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span" style={{color:" #FFF",textAlign: "center",fontFamily: "Maison Neue Book",fontSize: "18px"}}>What is the checkout experience for the customer?</Typography>
              </AccordionSummary>
              <AccordionDetails  style={{color:" #FFF",fontFamily: "Maison Neue Book",lineHeight: "28px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion style={{border: "1px solid #254DA5",background: "linear-gradient(0deg, #031325 0%, #030817 100%)",boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.30)"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#9ae8ff " />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span" style={{color:" #FFF",textAlign: "center",fontFamily: "Maison Neue Book",fontSize: "18px"}}>What happens on billing cycles after the first?</Typography>
              </AccordionSummary>
              <AccordionDetails  style={{color:" #FFF",fontFamily: "Maison Neue Book",lineHeight: "28px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion style={{border: "1px solid #254DA5",background: "linear-gradient(0deg, #031325 0%, #030817 100%)",boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.30)"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#9ae8ff " />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span" style={{color:" #FFF",textAlign: "center",fontFamily: "Maison Neue Book",fontSize: "18px"}}>How can customers manage their recurring payment?</Typography>
              </AccordionSummary>
              <AccordionDetails  style={{color:" #FFF",fontFamily: "Maison Neue Book",lineHeight: "28px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion style={{border: "1px solid #254DA5",background: "linear-gradient(0deg, #031325 0%, #030817 100%)",boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.30)"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#9ae8ff " />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span" style={{color:" #FFF",textAlign: "center",fontFamily: "Maison Neue Book",fontSize: "18px"}}>How does Coinsub tech work?</Typography>
              </AccordionSummary>
              <AccordionDetails  style={{color:" #FFF",fontFamily: "Maison Neue Book",lineHeight: "28px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion style={{border: "1px solid #254DA5",background: "linear-gradient(0deg, #031325 0%, #030817 100%)",boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.30)"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#9ae8ff " />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span" style={{color:" #FFF",textAlign: "center",fontFamily: "Maison Neue Book",fontSize: "18px"}}>What tokens and chains do you support?</Typography>
              </AccordionSummary>
              <AccordionDetails  style={{color:" #FFF",fontFamily: "Maison Neue Book",lineHeight: "28px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion style={{border: "1px solid #254DA5",background: "linear-gradient(0deg, #031325 0%, #030817 100%)",boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.30)"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor="#9ae8ff " />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span" style={{color:" #FFF",textAlign: "center",fontFamily: "Maison Neue Book",fontSize: "18px"}}>How does security work?</Typography>
              </AccordionSummary>
              <AccordionDetails  style={{color:" #FFF",fontFamily: "Maison Neue Book",lineHeight: "28px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq;
