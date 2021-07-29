# Eunseo's Youtube site
 
- React를 이용해서 유튜브 재생 사이트 만들기<br>
- 배포 사이트 : https://es-youtube-site.netlify.app

# Tool Stack
<p>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=PostCSS&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/>
 </p>

# How
- 함수형 컴포넌트 사용
- Hooks를 통해 렌더링 최적화, 동적인 페이지 구현
- 유튜브의 search, videos, channels API 사용
- Postman을 통해 API 통신 테스트 및 fetch 코드 활용
- API를 불러오는 통신(service)과 View 컴포넌트 분리
- API Key를 숨기기 위해 .env 파일 사용
- PostCSS로 CSS 스타일링 모듈화
- Netlify로 배포하기 (깃허브 페이지보다 훨씬 사용범위가 넓었고 yarn을 통해 쉽게 배포할 수 있다)

# Functions

- 첫 페이지에 mostPopular 동영상을 25개 리스트로 보여준다<br>
- 상단의 검색바를 통해 유튜브 동영상을 검색할 수 있다<br>
- 원하는 동영상을 선택하면 왼쪽에는 동영상 오른쪽에는 검색된 나머지 동영상을 리스트업 한다<br>
- 동영상 재생과 동영상의 제목 및 설명을 가져와 화면에 제시한다<br>
- 새로운 동영상을 검색할 시 이전 화면으로 돌아간다<br>
- 반응형 페이지로 만든다<br>

# images
![youtube](https://user-images.githubusercontent.com/34049770/126078296-8e1f33a0-00eb-464d-97ca-5944c014d813.png)
