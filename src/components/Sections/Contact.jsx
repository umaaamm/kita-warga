import React, { useState } from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/DSC06458.JPG";
import ContactImg2 from "../../assets/DSC06463.JPG";
import ContactImg3 from "../../assets/DSC06462.JPG";

export default function Contact() {

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

let noHp = "6281808462252"
  const sendWA = () => {
    let url = `https://api.whatsapp.com/send?phone=${noHp}`;
    let message = nama + " - " +email +" - " +subject;
      url += `&text=${encodeURI(message)}&app_absent=0`;
      window.open(url);
  }

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Hubungi Kami?</h1>
            <p className="font13">
            Jadi pengguna pertama kami dengan melengkapi form dibawah, kami akan menghubungi anda.
              {/* <br />
              labore et dolore magna aliquyam erat, sed diam voluptua. */}
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">Nama Lengkap:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" onChange={(evt) => { setNama(evt.target.value) }} />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold"  onChange={(evt) => { setEmail(evt.target.value) }} />
                <label className="font13">Subject:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold"  onChange={(evt) => { setSubject(evt.target.value) }}/>
                {/* <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" /> */}
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput onClick={(e)=> {sendWA(e)}} type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" width={'100%'}  />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" width={'100%'} />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" width={'100%'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #F2B300;
  background-color: #F2B300;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #580cd2;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









