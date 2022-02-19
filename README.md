<h1 align="center"> 다량 데이터 설계 및 구현 과제 </h1>

<h3 align="center"> 서비스 링크 : https://fervent-tereshkova-9b041a.netlify.app/</h3>

## 👏 프로젝트 소개

> 최대한 많은 양의 데이터를 확인할 수 있는 화면을 설계하고 구현했습니다.

## 🙋‍♀️🙋‍♂️ 팀원

|                                           프로필                                           |                    이름                     | 담당 기능 |
| :----------------------------------------------------------------------------------------: | :-----------------------------------------: | :-------- |
| <img src="https://avatars.githubusercontent.com/Ubermensch0608" width="100" height="100"/> | [우종원](https://github.com/Ubermensch0608) |           |
|  <img src="https://avatars.githubusercontent.com/crucial-sub" width="100" height="100"/>   |  [박중섭](https://github.com/crucial-sub)   |           |
|    <img src="https://avatars.githubusercontent.com/ttaerrim" width="100" height="100"/>    |    [이태림](https://github.com/ttaerrim)    |           |
|   <img src="https://avatars.githubusercontent.com/penguin311" width="100" height="100"/>   |   [임수영](https://github.com/penguin311)   |           |

## 🚀 스택

`React` `javascript` `styled-components` `redux toolkit`

## 🗒 프로젝트 진행 과정

### 문제 사항

- 많은 양의 정보를 화면에 보여 줘야 함
- 좋지 못한 해상도로 화면을 확인해야 하는 경우가 있음
- 스크롤을 해야 하는 번거로움
- 모바일과 PC 모두에서 대량의 데이터를 한눈에 확인하고자 함

### 아이디어 및 설계

테이블 형식으로 많은 정보를 나열하는 방식은 여러 데이터를 비교하며 확인할 경우 이점을 가집니다.

그렇지만 하나의 열에 해당하는 데이터를 전부 보고 싶을 경우에는 스크롤이 길어진다는 단점이 생깁니다.

저희는 이 경우에 **카드 뷰**로 데이터를 사용자에게 보여 주는 방식이 보다 더 효과적일 것이라 생각했습니다. [참고 자료](https://uxmovement.com/content/a-more-efficient-way-to-display-data-tables/)

허나, **테이블 뷰**의 장점도 포기할 수 없기에

1. 사용자가 행 순서를 선택
2. 테이블 정렬 기능
3. 마우스를 올리거나 클릭할 경우 열과 행에 하이라이트

하는 기능을 추가하기로 했습니다.

> 따라서 저희는 사용자에게 많은 데이터를 대략적으로 볼 때 유리한 **테이블 뷰**와 원하는 데이터를 자세하게 볼 때 유리한 **카드 뷰**를 모두 제공하는 방안을 선택했습니다.

[피그마 링크](https://www.figma.com/file/KUgomPySmmGc8ZoeO5nuhr/%EB%AC%BC%EB%A5%98-%EC%A0%95%EB%B3%B4-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%8B%9C%EC%95%88?node-id=38%3A5251)

### 구현 사항

- 레이아웃은 데스크탑과 태블릿을 기준으로 제작했습니다.

#### **테이블 뷰**

1. 테이블 초기 화면

  <img width="800" src="https://user-images.githubusercontent.com/43867711/154754998-5be3f8f7-997b-404d-870a-f1a8ac698cfb.png"/>

2. 테이블 헤더 고정<br/>
   헤더를 고정하여 스크롤을 내려도 어떤 항목이 어떤 정보인지 파악하기 용이하게 합니다.

    <img width="800" src="https://user-images.githubusercontent.com/43867711/154755903-a98a4219-fe31-43c6-8b5a-00691371cae5.gif"/>

3. 십자 표시 하이라이트<br/>
   마우스가 올라간 부분은 십자 표시로 하이라이트를 주어 같은 열과 같은 행을 구분해 줍니다.

    <img width="800" src="https://user-images.githubusercontent.com/43867711/154755202-33c01ddd-5803-473a-acf3-d7e8b4a211a6.gif"/>

4. 체크박스 기능으로 행 순서 변경<br/>
   행을 선택해 사용자가 모아서 보고 싶은 행끼리 볼 수 있도록 구현했습니다.

    <img width="800" src="https://user-images.githubusercontent.com/43867711/154755326-9f0318ff-c490-4048-bf8e-458a04c23eff.gif"/>

5. 정렬 기능<br/>
   행의 데이터를 오름차순, 내림차순으로 정렬할 수 있는 기능을 구현했습니다.

    <img width="800" src="https://user-images.githubusercontent.com/43867711/154756516-6ccee25c-9f27-4863-9c2e-3c65314095c1.gif"/>

#### **카드 뷰**

1.  카드 뷰로 전환<br/>
    상단 우측의 버튼을 눌러 뷰를 전환할 수 있습니다.

    <img width="800" src="https://user-images.githubusercontent.com/43867711/154757470-89f56b0e-e030-4967-86b6-44cbbc0cac95.gif"/>

2.  카드 뷰 초기 화면<br/>

- 항상 모든 값이 동일한 위치에 있도록 항목이 null인 값도 그대로 표시했습니다.
- 상태를 구분할 수 있다면 텍스트의 색깔을 다르게 표시해 사용자가 데이터를 더 빨리 파악할 수 있도록 합니다.

  <img width="800" src="https://user-images.githubusercontent.com/43867711/154757059-33f7d35b-d13c-4bdc-8ab7-588b07e9b74e.png"/>

3. 카드 정렬 기능<br/>
   기준을 선택해 정렬할 수 있습니다.
   <img width="800" src="https://user-images.githubusercontent.com/43867711/154788342-02f6d743-092c-40f3-abf8-34c252daad22.gif"/>

#### **공통 기능**

1.  스크롤 버튼 <br/>
    빠르게 스크롤 할 수 있도록 버튼을 누르면 스크롤이 내려가거나 올라가게 구현했습니다.

      <img width="800" src="https://user-images.githubusercontent.com/43867711/154757451-eaabbf87-b829-4c6e-bda8-0dcddac2a10c.gif"/>

#### **태블릿 화면**

  <img width="700" src="https://user-images.githubusercontent.com/43867711/154757978-502b3a5c-2816-44a9-ba3a-999f07990c49.jpeg"/>
  <br/>
  <br/>
  <img width="700" src="https://user-images.githubusercontent.com/43867711/154757996-ffd4fb05-7297-4bcf-b0ed-518abbf25b70.jpeg"/>

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

### **박중섭** ✨

### **이태림** 🐯

### **임수영** 🐧
