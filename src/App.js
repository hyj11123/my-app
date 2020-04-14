import React from "react";
import "./App.css";
import BasicInput from "./components/BasicInput";
import BasicButton from "./components/BasicButton";
import BasicButton2 from "./components/BasicButton2";

/*
  /             =>프로젝트의 시작 지점
  ./            =>나와 같은 폴더
  ../           =>나보다 한칸 위 폴더
  ../../        => 나보다 한칸 위 보다 한칸 위 폴더
*/
class App extends React.Component {
  render() {
    return (
      <div className="appBox">
        <div className="appBox__main">
          <div>
            <BasicInput guideTxt="ID..." />
            <BasicInput guideTxt="PASSWORD..." />
            <BasicInput guideTxt="EMAIL..." />
            <BasicInput guideTxt="MOBILE..." />
          </div>
          <div>
            <BasicButton view="Alert" action={this._alertBtnHandler} />
            <BasicButton view="Console" action={this._consoleBtnHandler} />
          </div>
          <div>
            <BasicButton2 view="NAVER" action={this._NAVER} />
            <BasicButton2 view="google" action={this._google} />
          </div>
        </div>
      </div>
    );
  }

  _alertBtnHandler = () => {
    alert("ALERT!!");
  };

  _consoleBtnHandler = () => {
    console.log("CONSOLE!!");
  };

  _NAVER = () => {
    window.open("https://www.naver.com/");
  };

  _google = () => {
    window.open("https://www.google.com/");
  };
}

export default App;
