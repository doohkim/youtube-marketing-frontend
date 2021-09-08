const filterFactories = [
  {
    name: '국가',
    factories: ['전체', '태국', '인도네시아', '일본', '미국', '영국'],
  },
  {
    name: '카테고리',
    factories: [
      '전체',
      '패션',
      '푸드/먹방',
      '엔터테인먼트',
      'Vlog/일상',
      '여행',
      'ASMR',
      '게임',
      '펫/동물',
      'IT/과학기술',
      '영화/애니',
      '자동차',
      '음악',
      '스포츠',
      'FUN',
      '시사/정치',
      '교육',
      '사회/종교',
      '키즈',
      '경제',
      '지식/정보',
      '뉴스',
      '기타',
    ],
  },
  {
    name: '구독자',
    factories: [
      '전체',
      '구독자 비공개',
      '~1만',
      '1만-10만',
      '10만-100만',
      '100만~',
    ],
  },

  {
    name: '구독자 성별',
    factories: ['전체', '남자', '여자'],
  },
  {
    name: '구독자 연령',
    factories: [
      '전체',
      '~17',
      '18~24',
      '25~34',
      '35~44',
      '45~54',
      '55~64',
      '65~',
    ],
  },
  {
    name: '평균 광고 단가',
    factories: ['전체', '~100만', '100만~1000만', '1000만~5000만', '5000만~'],
  },
  {
    name: '전체 영상별 평균 조회수',
    factories: ['전체', '~10만', '10만~100만', '100만~'],
  },
  {
    name: '채널',
    factories: [
      '전체',
      '인스타그램',
      '페이스북',
      '트위터',
      '아프리카TV',
      '트위치',
      // '네이버블로그',
    ],
  },
];

export default filterFactories;