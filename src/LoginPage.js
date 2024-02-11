import React, { useState } from "react";
import logo from "./assets/metauniv_logo.png"; // 로고 파일을 assets 폴더에서 불러옵니다.
import "./LoginPage.css"; // CSS 파일을 import 합니다.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에서 로그인 처리 로직을 구현하세요.
    console.log("로그인 시도:", id, password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-section">
          <img src={logo} alt="Seowon University Logo" />
        </div>
        <div className="form-container">
          <div className="input-with-icon">
            <div className="icon">
              <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} />
            </div>
            <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디" />
          </div>
          <div className="input-with-icon">
            <div className="icon">
              <FontAwesomeIcon icon={faLock} style={{ color: "#ffffff" }} />
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
          </div>
          <button onClick={handleSubmit}>LOGIN</button>
          <p className="find">아이디찾기&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;비밀번호찾기</p>
        </div>
        <div className="footer">
          <p>개인정보처리방침</p>
          <p className="copyright">Copyright © MetanetUniv. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
