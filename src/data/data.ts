import { menuType, productType, EProductType, subMenuType } from "./dataType"

export const product:productType[] = [
  {
    type:EProductType.gold,
    text:"개별 자유여행 금까기",
    link:"www.~.com" 
  },
  {
    type:EProductType.package,
    text:"개별 패키지 우리만",
    link:"www.~.com"
  }, 
  {
    type:EProductType.package,
    text:"단체 패키지 특별한",
    link:"www.~.com"
  },
  {
    type:EProductType.package,
    text:"단체 배낭 out of korea",
    link:"www.~.com"
  },
  {
    type:EProductType.package,
    text:"허니문 자기야",
    link:"www.~.com"
  },
  {
    type:EProductType.package,
    text:"골프 GMT",
    link:"www.~.com"
  },
  {
    type:EProductType.airline,
    text:"실시간 할인항공",
    link:"www.~.com"
  },
  {
    type:EProductType.etc,
    text:"전세계 호텔",
    link:"www.~.com"
  },
  {
    type:EProductType.etc,
    text:"교통권&입장권 현지투어",
    link:"www.~.com"
  },
]


//  Menu

export const menu:menuType[] = [
  {
    title:"금까기 메인",
    link:"www.~.com",
    menuCategory:[
      {
        text: "유럽｜지중해",
        link:"www.~.com"
      },
      {  
        text:"일본",
        link:"www.~.com"
      },
      {
        text:"동남아",
        link:"www.~.com"
      },
      {
        text:"괌｜사이판｜몰디브",
        link:"www.~.com"
      },     
      {
        text:"미국｜캐나다｜중남미",
        link:"www.~.com"
      },      
      {
        text:"호주｜뉴질랜드",
        link:"www.~.com"
      },
      {
        text:"대만｜홍콩｜마카오",
        link:"www.~.com"
      },
      {
        text:"중국",
        link:"www.~.com"
      }
    ]
  },
  {
    title:"우리만 메인",
    link:"www.~.com",  
    menuCategory:[
      {
        text:"유럽",
        link:"www.~.com"
      },
      {
        text:"일본",
        link:"www.~.com"
      },
      {
        text:"괌｜사이판｜팔라우",
        link:"www.~.com"
      },
      {
        text:"미주｜캐나다｜중남미",
        link:"www.~.com"
      },
      {
        text:"호주｜뉴질랜드",
        link:"www.~.com"
      },
      {
        text:"동남아",
        link:"www.~.com"
      },      
      {
        text:"홍콩｜마카오｜대만",
        link:"www.~.com"
      },
      {
        text:"부산/대구출발",
        link:"www.~.com"
      }
    ]
  },
  {
    title:"특별한 메인",
    link:"www.~.com",
    menuCategory:[
      {
        text:"유럽 패키지",
        link:"www.~.com"
      },
      {
        text:"일본 패키지",
        link:"www.~.com"
      }
    ]
  },
  {
    title:"배낭 여행 메인",
    link:"www.~.com",
    menuCategory:[
      {
        text:"유럽",
        link:"www.~.com"
      },
      {
        text:"미주｜캐나다｜중남미",
        link:"www.~.com"
      },
      {
        text:"호주｜뉴질랜드",
        link:"www.~.com"
      },
      {
        text:"배낭여행 준비 가이드",
        link:"www.~.com"
      }
    ]
  },
  {
    title:"자기야 메인",
    link:"www.~.com",
    menuCategory:[
      {
        text:"유럽 | 지중해",
        link:"www.~.com"
      },
      {
        text:"남태평양",
        link:"www.~.com"
      },
      {
        text:"미주 | 하와이 | 칸쿤",
        link:"www.~.com"
      },
      {
        text:"동남아",
        link:"www.~.com"
      },
      {
        text:"스페셜 휴양지",
        link:"www.~.com"
      },
      {
        text:"BRAND STORY",
        link:"www.~.com"
      }
    ]
  },
  {
    title:"골프 메인",
    link:"www.~.com",
    menuCategory:[
      {
        text:"괌/사이판/하와이",
        link:"www.~.com"
      },
      {
        text:"동남아",
        link:"www.~.com"
      },
      {
        text:"일본",
        link:"www.~.com"
      },
      {
        text:"테마골프",
        link:"www.~.com"
      }
    ]
  },
  {
    title:"실시간 항공 메인",
    link:"www.~.com",
    menuCategory:[
      {
        text:"실시간 할인항공권",
        link:"www.~.com"
      },
      {
        text:"항공 예약조회/확인",
        link:"www.~.com"
      },
      {
        text:"온라인 예약 FAQ",
        link:"www.~.com"
      },
      {
        text:"항공 뉴스",
        link:"www.~.com"
      }
    ]
  }
]


//  subMenu
export const submenu = [

  // 금까기
  [    
    [
      {
        subCategory:{
          text:"서유럽"
        },
        subMenu:[
          {
            text:"프랑스",
            link:"www.~.com"
          },
          {
            text:"이탈리아",
            link:"www.~.com"
          },
          {
            text:"스위스",
            link:"www.~.com"
          },
          {
            text:"스페인｜포르투갈｜모로코",
            link:"www.~.com"
          },
          {
            text:"영국｜아릴랜드｜아이슬란드",
            link:"www.~.com"
          },
          {
            text:"독일",
            link:"www.~.com"
          },
          {
            text:"베네룩스",
            link:"www.~.com"
          },
          {
            text:"몰타",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"동유럽"
        },
        subMenu:[
          {
            text:"체코",
            link:"www.~.com"
          },
          {
            text:"오스트리아",
            link:"www.~.com"
          },
          {
            text:"폴란드｜헝가리｜슬로바키아",
            link:"www.~.com"
          },
          {
            text:"크로아티아｜슬로베니아",
            link:"www.~.com"
          },
          {
            text:"조지아｜보스니아｜불가리아루마니아｜마케도니아",
            link:"www.~.com"
          },
        ]
      },
      {
        subCategory:{
          text:"북유럽"
        },
        subMenu:[{
            text:"에스토니아 | 라트비아 리투아니아(발트3국)노르웨이｜스웨덴｜핀란드 덴마크｜페로제도",
            link:"www.~.com"
          }
        ],
        advertisement:{
          text:"나.비.가 나는 비즈니스타고 가출한다",
          link:"www.~.com"
        }
      },
      {
        subCategory:{
          text:"지중해"
        },
        subMenu:[
          {
            text:"아테네｜산토리니｜그리스섬",
            link:"www.~.com"
          },
          {
            text:"튀르키예(터키)｜튀르키예와 유럽",
            link:"www.~.com"
          },          
          {
            text:"신비의 나라 이집트",
            link:"www.~.com"
          },
          {
            text:"두바이｜아부다비｜도하",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"유럽 소도시 여행"
        },
        advertisement:{
          text:"아기자기한 유럽 소도시! 렌터카를 이용한 편안한 가출!"
        }
      }
    ],
    [
      {
        subCategory:{
          text:"도쿄",
          link:"www.~.com"
        },
        subMenu:[
          {
            text:"(하코네｜닛코｜이바라키｜가루이자와)",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"큐슈",
          link:"www.~.com"
        },
        subMenu:[
          {
            text:"(후쿠오카｜벳부｜유후인｜미야자키｜가고시마)",
            link:"www.~.com"
          }
        ]
      },      
      {
        subCategory:{
          text:"홋카이도",
          link:"www.~.com"
        },
        subMenu:[
          {
            text:"(삿포로｜오타루｜노보리베츠)",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"오사카",
          link:"www.~.com"
        },
        subMenu:[
          {
            text:"(교토｜고베｜오카야마｜히로시마)",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"나고야/시코쿠",
          link:"www.~.com"
        },
        subMenu:[
          {
            text:"(게로｜가나자와｜알펜루트｜시즈오카｜다카마쓰｜마쓰야마)",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"오키나와",
          link:"www.~.com"
        }
      }
    ],
    [
      { 
        subCategory:{
          text:"베트남"
        },
        subMenu:[
          {
            text:"다낭ㅣ호이안",
            link:"www.~.com"
          },
          {
            text:"나트랑",
            link:"www.~.com"
          },
          {
            text:"푸꾸옥",
            link:"www.~.com"
          },
          {
            text:"하노이ㅣ호치민",
            link:"www.~.com"
          }
        ]
      },
      { 
        subCategory:{
          text:"필리핀"
        },
        subMenu:[
          {
            text:"세부｜보홀",
            link:"www.~.com"
          },
          {
            text:"보라카이",
            link:"www.~.com"
          },
          {
            text:"마닐라ㅣ루손(클락/비간시티)",
            link:"www.~.com"
          },
        ]
      },
      {
        subCategory:{
          text:"태국"
        },
        subMenu:[
          {
            text:"방콕 | 치앙마이 | 파타야",
            link:"www.~.com"
          },
          {
            text:"푸켓 | 카오락",
            link:"www.~.com"
          },
          {
            text:"크라비 | 코사무이 | 코팡안",
            link:"www.~.com"
          },
          {
            text:"코사멧 | 코창 | 코쿳 | 후아인",
            link:"www.~.com"
          },
        ]
      },
      {
        subCategory:{
          text:"라오스/캄보디아"
        },
        subMenu:[
          {
            text:"비엔티안｜방비엥｜루앙프라방",
            link:"www.~.com"
          },
          {
            text:"앙코르와트｜프놈펜",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"싱가폴"
        },
        subMenu:[
          {
            text:"싱가폴(마리나베이｜클라키)",
            link:"www.~.com"
          },
          {
            text:"싱가폴&센토사",
            link:"www.~.com"
          },
          {
            text:"레고랜드｜빈탄",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"인도네시아/말레이시아"
        },
        subMenu:[
          {
            text:"발리｜롬복",
            link:"www.~.com"
          },
          {
            text:"코타키나발루｜가야섬｜랑카위｜페낭",
            link:"www.~.com"
          },
          {
            text:"자카르타｜쿠알라룸프르",
            link:"www.~.com"
          }
        ]
      }
    ],
    [
      { 
        subCategory:{
          text:"괌"
        },
        subMenu:[
          {
            text:"안심여행 괌",
            link:"www.~.com"
          },
          {
            text:"나.비.가 나는 비지니스타고 가출한다",
            link:"www.~.com"
          }
        ]
      },
      { 
        subCategory:{
          text:"사이판"
        },
        subMenu:[
          {
            text:"안전한 힐링여행 사이판",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"인도양"
        },
        subMenu:[
          {
            text:"몰디브",
            link:"www.~.com"
          },
          {
            text:"모리셔스",
            link:"www.~.com"
          },
          {
            text:"세이셸",
            link:"www.~.com"
          }
        ]
      }
    ],
    [
      { 
        subCategory:{
          text:"하와이"
        },
        subMenu:[
          {
            theme:"천국의 휴양지 하와이",
            text:"오아후 | 호놀룰루 | 와이키키",
            link:"www.~.com"
          },
          {
            theme:"로맨틱 아일랜드 이웃섬",
            text:"마우이 | 빅아일랜드 | 카우아이 | 라나이 | 하와이 + 미동서부",
            link:"www.~.com"
          }
        ],
        advertisement:{
          text:"나.비.가 나는 비즈니스타고 가출한다",
          link:"www.~.com"
        }
      },
      { 
        subCategory:{
          text:"미국"
        },
        subMenu:[
          {
            theme:"미국 자유의 상징 미서부",
            text:"로스앤젤레스 | 라스베가스 샌프란시스코 | 샌디에이고 디즈니랜드 | 그랜드캐년 시애틀 | 요세미티 | 알래스카",
            link:"www.~.com"
          },
          {
            theme:"로맨틱 아일랜드 이웃섬",
            text:"마우이 | 빅아일랜드 | 카우아이 | 라나이 | 하와이 + 미동서부",
            link:"www.~.com"
          },
          {
            theme:"여심을 사로잡은 미동부",
            text:"시카고 | 보스턴 | 워싱턴 올랜도 | 마이애미 |키웨스트",
            link:"www.~.com"
          }
        ],
      },
      { 
        subCategory:{
          text:"캐나다"
        },
        subMenu:[
          {
            theme:"내 인생의 쉼표, 서부 캐나다",
            text:"밴쿠버 | 빅토리아섬 | 휘슬러 | 레이크루이스 | 밴프 | 재스퍼 | 캘거리",
            link:"www.~.com"
          },
          {
            theme:"붉게 물든 단풍의 도시",
            text:"토론토 | 나이아가라 | 퀘백 | 몬트리올 | 오타와 | 킹스턴 천섬 | 샬롯타운 빨강머리 앤",
            link:"www.~.com"
          },
          {
            theme:"캐나다 테마여행",
            text:"오로라 옐로나이프 | 화이트 | 호스스키여행 | 단풍여행 | 기차여행 | 가이드 투어",
            link:"www.~.com"
          }
        ],
      },
    ],
    [
      { 
        subCategory:{
          text:"호주"
        },

        subMenu:[
          {
            theme:"한 도시를 여유있고 꼼꼼하게",
            text:"시드니｜멜번｜퍼스｜브리즈번｜골드코스트｜케언즈｜애들레이드",
            link:"www.~.com"
          },
          {
            theme:"두 도시를 효율적으로",
            text:"시드니｜멜번｜퍼스｜브리즈번｜골드코스트｜케언즈｜애들레이드｜호바트｜해밀턴",
            link:"www.~.com"
          },
          {
            theme:"여심을 사로잡은 미동부",
            text:"시카고 | 보스턴 | 워싱턴 올랜도 | 마이애미 |키웨스트",
            link:"www.~.com"
          },
          {
            theme:"세 도시를 완벽하게",
            text:"시드니｜멜번｜퍼스｜브리즈번｜골드코스트｜케언즈｜애들레이드｜호바트｜해밀턴｜에어즈락｜퀸즈타운｜오클랜드",
            link:"www.~.com"
          },
          {
            theme:"여심을 사로잡은 미동부",
            text:"시카고 | 보스턴 | 워싱턴 올랜도 | 마이애미 |키웨스트",
            link:"www.~.com"
          }
          ],
          advertisement:{
            text:"나.비.가 나는 비즈니스타고 가출한다",
            link:"www.~.com"
          }
        },
        {
          subCategory:{
            text:"뉴질랜드"
          },
          subMenu:[
            {
              text:"퀸스타운｜크라이스트처치｜오클랜드｜로토루아｜더니든｜마운트 쿡",
              link:"www.~.com"
            },
            {
              text:"뉴질랜드 테마여행｜영화 '반지의 제왕' 촬영지｜프란츠요셉｜폭스빙하트레킹｜루트번｜통가리로 트레킹",
              link:"www.~.com"
            },
          ]
        },
    ],
    [
      { 
        subCategory:{
          text:"대만"
        },
        subMenu:[
          {
            text:"타이페이 (가오슝｜예류｜지우펀｜화련)",
            link:"www.~.com"
          }
        ]
      },
      { 
        subCategory:{
          text:"홍콩｜마카오｜심천"
        },
        subMenu:[
          {
            text:"기간별 (3일｜4일｜5일)",
            link:"www.~.com"
          },
          {
            text:"인기호텔별 (가족｜커플｜우정｜수영장)",
            link:"www.~.com"
          }
        ]
      },
    ],
    [
      { 
        subCategory:{
          text:"니하오~! 중국"
        },
        subMenu:[
          {
            text:"상해｜북경",
            link:"www.~.com"
          },
          {
            text:"서안｜청도｜대련｜연태｜위해｜운남(곤명｜여강｜대리｜샹그릴라)｜계림｜양삭｜광주｜심천",
            link:"www.~.com"
          }
        ]
      },
      { 
        subCategory:{
          text:"걸을수록 행복한 명산걷기"
        },
        subMenu:[
          {
            text:"장가계 | 황산 | 백두산 | 태산 | 노산 | 화산",
            link:"www.~.com"
          }
        ]
      },
    ],
  ],


  // 우리만
  [
    [
      {
        subCategory:{
          text:"유럽"
        },
        subMenu:[
          {
            text:"프리미엄 우리만",
            link:"www.~.com"
          },
          {
            text:"컴포트 우리만",
            link:"www.~.com"
          },
          {
            text:"테마 우리만",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"일본"
        },
        subMenu:[
          {
            text:"도쿄 | 오사카 | 나고야",
            link:"www.~.com"
          },
          {
            text:"큐슈 | 홋카이도 | 오키나와 | 시코쿠",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"괌｜사이판｜팔라우"
        }
      },
      {
        subCategory:{
          text:"미주｜캐나다｜중남미"
        }
      },
      {
        subCategory:{
          text:"호주｜뉴질랜드",
        }
      },
      {
        subCategory:{
          text:"동남아"
        },
        subMenu:[
          {
            text:"베트남 | 태국 | 미얀마 | 캄보디아",
            link:"www.~.com"
          },
          {
            text:"필리핀 | 싱가폴 | 말레이시아",
            link:"www.~.com"
          },          
          {
            text:"인도네시아",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"홍콩｜마카오｜대만"
        },
        subMenu:[
          {
            theme:"대만(타이완)",
            text:"가족테마 | 온천 | 트레킹 | 택시투어 | 모임여행",
            link:"www.~.com"
          },
          {
            theme:"홍콩 | 마카오 | 심천",
            text:"가족테마 | 트레킹 | 모임여행 | 호캉스 | 역사문화유산",
            link:"www.~.com"
          },
        ]
      },
    ] 
  ],

  // 특별한
  [
    [
      {
        subCategory:{
          text:"서유럽"
        },
        subMenu:[
          {
            text:"이탈리아｜프랑스｜영국｜스위스｜독일｜네덜란드｜아이슬란드",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"동유럽/발칸"
        },
        subMenu:[
          {
            text:"체코｜오스트리아｜헝가리｜폴란드｜크로아티아｜슬로베니아",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"유럽 한나라 핵심일주"
        }
      },
      {
        subCategory:{
          text:"유럽 자유여행 패키지"
        }
      },
      {
        subCategory:{
          text:"스페인/포르투갈"
        },
        subMenu:[
          {
            text:"스페인｜포르투갈｜모로코",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"지중해/중동"
        },
        subMenu:[
          {
            text:"튀르키예(터키)｜그리스｜이집트｜두바이｜이스라엘",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"북유럽"
        },
        subMenu:[
          {
            text:"노르웨이｜핀란드｜스웨덴｜덴마크",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"일본 패키지"
        },
        subMenu:[
          {
            text:"도쿄 오사카 큐슈 북해도 오키나와",
            link:"www.~.com"
          }
        ],
        addEventListener:{
          text:"내일이 설레이는 특별한 단체패키지 여행",
          link:"www.~.com"
        }
      },
    ]
  ],

  // 단체배낭
  [
    [
      {
        subCategory:{
          text:"유럽"
        },
        subMenu:[
          {
            theme:"단체배낭(전문인솔자 동행)",
            text:"전체 코스 보기(1 ~ 14코스)",
            link:"www.~.com"
          },
          {
            text:"지도로 보기",
            link:"www.~.com"
          },
          {
            text:"서유럽 | 동유럽 | 스페인",
            link:"www.~.com"
          },
          {
            text:"지중해 | 북유럽",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"미주｜캐나다｜중남미"
        },
        subMenu:[
          {
            text:"단체배낭(전문인솔자 동행)",
            link:"www.~.com"
          },
          {
            text:"호텔팩(자유롭게 마음대로)",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"호주｜뉴질랜드"
        },
        subMenu:[
          {
            text:"단체배낭(전문인솔자 동행)",
            link:"www.~.com"
          },
          {
            text:"호텔팩(자유롭게 마음대로)",
            link:"www.~.com"
          }
        ]
      },
    ]
  ],

  // 허니문
  [
    [
      {
        subCategory:{
          text:"유럽 | 지중해"
        },
        subMenu:[
          {
            text:"유럽",
            link:"www.~.com"
          },
          {
            text:"지중해",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"남태평양"
        },
        subMenu:[
          {
            text:"호주",
            link:"www.~.com"
          },
          {
            text:"괌 | 사이판",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"미주 | 하와이 | 칸쿤"
        },
        subMenu:[
          {
            text:"하와이",
            link:"www.~.com"
          },
          {
            text:"미주 | 칸쿤",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"동남아"
        },
        subMenu:[
          {
            text:"발리 | 베트남",
            link:"www.~.com"
          },
          {
            text:"푸켓",
            link:"www.~.com"
          },
          {
            text:"크라비 | 코사무이",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"스페셜 휴양지"
        },
        subMenu:[
          {
            text:"몰디브",
            link:"www.~.com"
          },
          {
            text:"모리셔스 | 세이셸",
            link:"www.~.com"
          },
          {
            text:"타히티",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"BRAND STORY"
        },
        subMenu:[
          {
            text:"자기야 탄생",
            link:"www.~.com"
          },
          {
            text:"자기야 BI",
            link:"www.~.com"
          },
          {
            text:"자기야 포인트",
            link:"www.~.com"
          },
          {
            text:"자기야 광고",
            link:"www.~.com"
          },
          {
            text:"자기야 캠페인",
            link:"www.~.com"
          },
          {
            text:"내일씨의 허니문",
            link:"www.~.com"
          }
        ]
      },
    ]
  ],

  // 골프
  [
    [
      {
        subCategory:{
          text:"괌/사이판/하와이"
        },
        subMenu:[
          {
            text:"괌 | 사이판 | 하와이",
            link:"www.~.com"
          },
          {
            text:"미주 | 칸쿤",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"동남아"
        },
        subMenu:[
          {
            text:"태국(방콕/파타야/치앙마이/푸켓)",
            link:"www.~.com"
          },
          {
            text:"베트남",
            link:"www.~.com"
          },
          {
            text:"필리핀/말레이시아",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"일본"
        },
        subMenu:[
          {
            text:"일본",
            link:"www.~.com"
          }
        ]
      },
      {
        subCategory:{
          text:"테마골프"
        },
        subMenu:[
          {
            text:"해외골프 부킹",
            link:"www.~.com"
          },
          {
            text:"커플즈",
            link:"www.~.com"
          },
          {
            text:"나.비.가 골프",
            link:"www.~.com"
          }
        ]
      },
    ]
  ]

]


