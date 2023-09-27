import React from "react";
import logo from "../photo/Logo_Vetor_Aiyl_Bank_2.png";

const UnsuccessPage = () => {
  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "12px" }}>
        <img className="logo" src={logo} style={{ width: "200px" }} />
      </div>
      <div class="notifications-container">
        <div class="success">
          <div class="flex">
            <div class="flex-shrink-0"></div>
            <div class="success-prompt-wrap">
              <h2
                class="success-prompt-heading"
                style={{
                  fontStyle: "normal",
                  fontWeight: "200",
                  fontSize: "24px",
                  margin: "0px 0px 13px -3px",
                  fontFamily: "HelveticaNeue",
                  lineHeight: "33px",
                  letterSpacing: "-1px",
                }}
              >
                Транзакция неуспешна
              </h2>
              <div
                class="success-prompt-prompt"
                style={{ backgroundColor: "#ed1c24" }}
              >
                <p className="text">
                  К сожалению, возникла техническая ошибка. Попробуйте
                  воспользоваться сервисом позднее.
                </p>
              </div>
              <div class="success-button-container">
                <p>Справочная служба 5511</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ color: "#707880", margin: "10px", fontSize: "13px" }}>
        © ОАО «Айыл Банк», 1996–2023
      </div>
    </div>
  );
};

export default UnsuccessPage;
