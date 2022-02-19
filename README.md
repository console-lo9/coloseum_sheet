<h1 align="center"> 다량 데이터 설계 및 구현 과제 </h1>

<h3 align="center"> 서비스 링크 : https://vigilant-rosalind-e05fcd.netlify.app/</h3>

## 👏 프로젝트 소개

> 최대한 많은 양의 데이터 중 자신이 원하는 데이터를 선택하여, 효율적으로 이용할 수 있는 기능을 가진 물류 정보 처리 웹 구현하였습니다.

## 🙋‍♀️🙋‍♂️ 팀원

|                                           프로필                                           |                    이름                     | 담당 기능                                         |
| :----------------------------------------------------------------------------------------: | :-----------------------------------------: | :------------------------------------------------ |
| <img src="https://avatars.githubusercontent.com/Ubermensch0608" width="100" height="100"/> | [우종원](https://github.com/Ubermensch0608) | table_sheet, 데이터라인 하이라이트, 우선순위 리셋 |
|  <img src="https://avatars.githubusercontent.com/crucial-sub" width="100" height="100"/>   |  [박중섭](https://github.com/crucial-sub)   | 데이터 정렬, 스크롤 포탈 버튼                          |
|    <img src="https://avatars.githubusercontent.com/ttaerrim" width="100" height="100"/>    |   ⭐[이태림](https://github.com/ttaerrim)    | 카드 뷰 구현, 테이블 우선순위                     |
|   <img src="https://avatars.githubusercontent.com/penguin311" width="100" height="100"/>   |   [임수영](https://github.com/penguin311)   | 배포                                              |

## 🚀 스택

`React` `javascript` `styled-components` `redux toolkit`

## 🗒 프로젝트 진행 과정 및 구현 사항

[위키 링크](https://github.com/console-lo9/coloseum_sheet/wiki/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A7%84%ED%96%89-%EA%B3%BC%EC%A0%95-%EB%B0%8F-%EA%B5%AC%ED%98%84-%EC%82%AC%ED%95%AD)

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/console-lo9/coloseum_sheet.git

# install modules
$ cd coloseum_sheet
$ npm install || yarn

# start
$ npm start || yarn start

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

## 🔗 의존성

```
  "dependencies": {
    "@reduxjs/toolkit": "^1.7.2",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.26.0",
    "nanoid": "^3.3.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-redux": "^7.2.6",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.0"
  },
```

## 📂 프로젝트 구조

    ├── public
    └── src
        ├── assets
        ├── components
        │   ├── Cards
        │   ├── ItemSheet
        │   └── SelectView
        ├── constants
        ├── layout
        ├── store
        └── style

## 💡 과제 후기

### **우종원** 🍀

기획이 중요한 과제였다고 생각합니다. 팀원들과 직접 기획을 하면서 사용자 입장에서 생각해볼 수 있는 계기가 되었고, 앞으로 어떤 것이 사용자가 정말로 원하는 기능일까 생각하면서 개발을 할 수 있을 거 같습니다.

### **박중섭** ✨

기획 단계에서 팀원들과 사용자 시점의 사이트 편의성에 대해 깊은 논의를 나누었고 이를 해결하기 위한 많은 아이디어를 공유한 후 해당 기능들을 실제로 구현하는데 성공하였습니다. 개발에 앞서 사용자의 입장에서 팀원들과 함께 고민할 수 있었던 의미있는 프로젝트였습니다.

### **이태림** 🐯

기존 과제와 달리 설계부터 시작해야 해 어렵기도 했지만 직접 유저의 입장에서 생각해 보며 어떻게 하면 더 좋은 UI/UX를 선사할 수 있을까 고민할 수 있었던 과제였습니다. Figma를 사용해 디자인부터 구현하는 게 낯설었으나, 확실히 틀을 우선 잡아 놓고 개발을 하는 게 시간 절약 면에서 더 도움이 된다는 생각을 직접 경험해 본 프로젝트가 됐습니다.

### **임수영** 🐧

비즈니스에 더 적합한 UI를 고민해볼 수있던 과제였던 것 같았고, 적합한 UI를 설계하고 구현하는 과정에서 Figma사용 등, 개발적인 과정에만 몰두하기 보다는 기획이나 UX/UI를 고민해 볼 수 있었던 것 같습니다.
