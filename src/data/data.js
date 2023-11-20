// 공지사항
const announcementList = [
    {

        id: 1,
        title: '<요즘 뭐 봄? 지니뮤직 봄> 이벤트 당첨자 발표',
        regdate: '2023-11-09',
        views: '254',
        content: `안녕하세요. genie 입니다.

        <요즘 뭐 봄? 지니뮤직 봄> 이벤트 당첨자 발표합니다.
        이벤트에 관심을 가져주신 모든 분들께 감사드립니다.
        
        
        ● 안내사항
        - 당첨자에게는 [내 정보]에 입력하신 휴대폰 번호로 경품 수령 관련 상세 안내가 전달될 예정입니다.
        - 개인정보를 잘못 입력하였거나, 스팸 거부로 인해 수신되지 않은 경우에는 별도의 연락 및 재발송을 하지 않으니 이용에 차질 없으시기 바랍니다.
        - 개인정보 보호를 위해 아이디 중 앞자리 3개 노출 후 *처리 되었습니다.
        - 본인확인을 위해 휴대폰 번호 뒷자리 4개가 노출됩니다.
        - 기타 문의사항은 지니 고객센터(1577-5337)로 문의 바랍니다.
        
        
        ● 지뮤페 초대권 12/9 (토) - 1인 2매
        dda*****		4328
        rio*****		9012
        coo*******	8310
        jel*******		4648
        bab********	2058
        als********	5170
        g88***		9282
        cch*****		9760
        ltd*******		1361
        joh***		5449
        ktd*****		0966
        jis******		2399
        who******		6031
        khk********	6555
        tmd*******	1084
        gre*****		7039
        sue*********	0511
        sta*****		7577
        77n***		7514
        jho****		7449
        
        ● 지뮤페 초대권 12/10 (일) - 1인 2매
        coo*******	8310
        als********	5170
        duc*****		1675
        phj****		9158
        asd******		3898
        pdg*****		3021
        tjd*****		5132
        tnw*********	5747
        mar****		5881
        tkf*****		7353
        tod****		5534
        khk********	6555
        tmd*******	1084
        gre*****		7039
        coc******		5722
        tls****		1302
        mor******		8123
        dow****		8135
        qwe****		8768
        dlt********		5177
        gs0***		6883
        dle****		2906
        lov*********	4427
        jug*****		0292
        dea*****		3308
        cje****		1123
        sum******		5368
        yuj*******		4139
        suj*******		8353
        koi***		5165`
    },
    {
        id: 2,
        title: '트위터 로그인 오류 및 사용중인 이용권 이관 신청 안내',
        regdate: '2023-11-06',
        views: '395',
        content: `안녕하세요, 지니뮤직 입니다.

        현재 일부 서비스 영역에서 트위터 아이디로 로그인이 안되고 있습니다.
        관련하여 이슈 확인 및 서비스 제공을 위해 노력 중이나 시간이 다소 필요합니다.  
        이용에 불편을 드리게 되어 정말 죄송합니다.
        
        서비스를 바로 사용하고자 하시는 경우,
        불편하시겠지만 고객센터로 문의주시면 다른 ID로 사용중인 이용권을 이관해 드리고 있습니다.
        
        < 이관 신청 방법 >
        1. 먼저 지니뮤직 일반 ID를 준비해 주세요. (SNS아이디가 아닌 일반ID로 회원가입 등 이용)
        2. 지니뮤직 고객센터 1:1 문의를 통해 아래 정보를 보내주세요. 
        (1) 사용중이던 트위터 ID, 이용권 구매 시 인증한 휴대폰 번호 
        (2) 신규가입한 지니 일반 ID, 본인 인증한 휴대폰 번호(회원가입 인증과 별도 인증 필요)
        ※ 단, 위 (1)과 (2)의 폰번호는 동일한 번호여야 합니다. 
        
        ※ 본인 인증 방법
          - 모바일 앱 : 하단 '전체메뉴' 탭 > 상단 ID 영역 선택 > 중간의 '본인 인증' 메뉴를 통해 인증 
        
        ※ 1:1문의 접수 위치
        - 모바일 앱 : 하단 탭 '전체메뉴' > 화면 하단의 '고객센터' > 상단의 '1:1 문의' 선택
        - PC 홈페이지 : 홈페이지 우측 하단 '고객센터' > 상단 탭 '서비스 문의' 선택
        
        지니뮤직 고객센터 운영시간은 평일 오전 9:30 ~ 오후 6:30 (주말 및 공휴일 휴무) 입니다. 
        업무 시간 외 접수된 문의는 다음 업무 시간에 답변 드립니다. 
        
        다시 한번 불편을 드리게 되어 사과 말씀 드립니다. 
        
        감사합니다.  `
    },
    {
        id: 3,
        title: '서비스 시스템 점검 안내 [11.18(토) 00시 ~ 06시]',
        regdate: '2023-11-01',
        views: '212',
        content: `
        안녕하세요. 지니뮤직에서 알려 드립니다.

더욱 안정적인 서비스 제공을 위한 시스템 점검이 11월 18일에 진행될 예정입니다.
점검 시간 동안 지니뮤직 전체 서비스 이용이 불가하오니 이 점 양해 부탁드립니다.

[작업 안내]

■ 작업 일시
2023년 11월 18일 (토) 00:00~06:00 (6시간)

■ 작업 내용
지니뮤직 시스템 점검 작업

■ 작업 영향
지니뮤직 App, PC/Mobile Web, 안드로이드 TV app, 기가지니, 클로버 지니, 커넥티카, 지니 등 지니뮤직 전체 서비스 이용 제한

신속히 점검하여 보다 나은 서비스를 제공하겠습니다.
서비스 이용에 불편을 드리게 된 점 사과드립니다.
고객님들의 많은 양해 부탁드립니다.

감사합니다.`
    }
]

// 회사 엠블렘
const emblemList = [
    '//image.genie.co.kr/imageg/web/common/emblem_kdce.png',
    '//image.genie.co.kr/imageg/web/common/emblem_copyright.png',
    '//image.genie.co.kr/imageg/web/common/emblem_amo.png',
    '//image.genie.co.kr/imageg/web/common/emblem_kib.png',
    '//image.genie.co.kr/imageg/web/common/emblem_brand_2018.png',
    '//image.genie.co.kr/imageg/web/common/emblem_user.png',
    '//image.genie.co.kr/imageg/web/common/emblem_qs.png',
    '//image.genie.co.kr/imageg/web/common/emblem_music_220420.png'
]

// 최신가요
const newMusic = [
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/418/84493418_1700198919721_1_200x200.JPG",
        "artist": "정이한 (더 넛츠)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/500/029/84500029_1700206755011_1_200x200.JPG",
        "artist": "더 라임"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/991/84499991_1700207983427_1_200x200.JPG",
        "artist": "구만 (9.10000)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/715/84498715_1700184426476_1_200x200.JPG",
        "artist": "김지훈"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/502/835/84502835_1700203220565_1_200x200.JPG",
        "artist": "황가람"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/500/430/84500430_1700122227873_1_200x200.JPG",
        "artist": "콜린 (COLL!N)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/500/452/84500452_1700211873481_1_200x200.JPG",
        "artist": "윗공아공"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/490/716/84490716_1700204666450_1_200x200.JPG",
        "artist": "임세모"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/864/84493864_1700205204263_1_200x200.JPG",
        "artist": "아웃오브캠퍼스"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/503/150/84503150_1700203510931_1_200x200.JPG",
        "artist": "스타데이즈 (STARDAYS)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/504/049/84504049_1700204906518_1_200x200.JPG",
        "artist": "nochexintoma"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/954/84498954_1700205183426_1_200x200.JPG",
        "artist": "주현민"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/478/765/84478765_1699634499015_1_200x200.JPG",
        "artist": "COLOR WHITE"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/494/040/84494040_1700122751732_1_200x200.JPG",
        "artist": "홈메이드레코딩"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/670/84499670_1700123265043_1_200x200.JPG",
        "artist": "박민규"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/778/84499778_1700206267708_1_200x200.JPG",
        "artist": "에일리 (Ailee) & 최상엽 & 고영배 (소란)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/503/260/84503260_1700186732707_1_200x200.JPG",
        "artist": "DEAN"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/919/84493919_1700198528427_1_200x200.JPG",
        "artist": "나르샤"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/655/84498655_1700199854952_1_200x200.JPG",
        "artist": "케이시 (Kassy)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/503/044/84503044_1700184338093_1_200x200.JPG",
        "artist": "그래쓰 (GRASS)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/504/229/84504229_1700204104157_1_200x200.JPG",
        "artist": "로켓펀치 (Rocket Punch)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/686/84498686_1700181833013_1_200x200.JPG",
        "artist": "윤토벤 (YounToven)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/007/84499007_1700204321439_1_200x200.JPG",
        "artist": "Pagaehun (박태훈)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/412/190/84412190_1700212337677_1_200x200.JPG",
        "artist": "임재영"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/818/84499818_1700202765222_1_200x200.JPG",
        "artist": "류민희"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/494/177/84494177_1700204089076_1_200x200.JPG",
        "artist": "Various Artists"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/451/976/84451976_1700199045443_1_200x200.JPG",
        "artist": "키츠요지 (kitsyojii)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/926/84493926_1700205903952_1_200x200.JPG",
        "artist": "비지 (Bizzy)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/504/144/84504144_1700204841977_1_200x200.JPG",
        "artist": "윤지성 & 이진혁 & 이대휘 (AB6IX) & 은정 (Eunjung) & ChangJo"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/503/850/84503850_1700204330830_1_200x200.JPG",
        "artist": "윤진우 & 윤희찬 & 정중식"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/504/074/84504074_1700204575729_1_200x200.JPG",
        "artist": "츄 (CHUU)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/667/84498667_1700181780458_1_200x200.JPG",
        "artist": "모레 (more)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/494/797/84494797_1700207845380_1_200x200.JPG",
        "artist": "나기철"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/500/316/84500316_1700119570772_1_200x200.JPG",
        "artist": "Jayd"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/460/918/84460918_1699290627929_1_200x200.JPG",
        "artist": "Felic (펠릭)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/449/749/84449749_1700201361316_1_200x200.JPG",
        "artist": "TNDR"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/849/84493849_1700205397878_1_200x200.JPG",
        "artist": "Slowcity"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/284/84498284_1700211214228_1_200x200.JPG",
        "artist": "다무 (Damu)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/503/257/84503257_1700204672240_1_200x200.JPG",
        "artist": "안예슬"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/621/84499621_1700123133747_1_200x200.JPG",
        "artist": "여은"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/962/84499962_1700122560000_1_200x200.JPG",
        "artist": "I-Rohm (아이롬)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/280/84499280_1700180194157_1_200x200.JPG",
        "artist": "ENHYPEN"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/466/84498466_1700198156786_1_200x200.JPG",
        "artist": "박재범"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/500/428/84500428_1700201077798_1_200x200.JPG",
        "artist": "양다일"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/490/368/84490368_1700198429239_1_200x200.JPG",
        "artist": "노라조"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/884/84493884_1700196987980_1_200x200.JPG",
        "artist": "김정민"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/139/84499139_1700104532166_1_200x200.JPG",
        "artist": "unofficialboyy & gamma"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/495/630/84495630_1700197442204_1_200x200.JPG",
        "artist": "형표"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/489/877/84489877_1700121609014_1_200x200.JPG",
        "artist": "이민휘"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/490/812/84490812_1700036820154_1_200x200.JPG",
        "artist": "blah"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/503/967/84503967_1700202327933_1_200x200.JPG",
        "artist": "Drake"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/494/772/84494772_1700187728582_1_200x200.JPG",
        "artist": "NCT DREAM & JVKE"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/960/84498960_1700187410703_1_200x200.JPG",
        "artist": "TWICE (트와이스)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/483/036/84483036_1699690828428_1_200x200.JPG",
        "artist": "Wildberry"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/488/806/84488806_1700012643950_1_200x200.JPG",
        "artist": "NOVAZ"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/473/230/84473230_1700119169744_1_200x200.JPG",
        "artist": "Vince"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/487/551/84487551_1700182309945_1_200x200.JPG",
        "artist": "Low Hanging Fruits"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/865/84499865_1700120116490_1_200x200.JPG",
        "artist": "Various Artists"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/459/766/84459766_1699522681168_1_200x200.JPG",
        "artist": "음율"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/500/256/84500256_1700184170329_1_200x200.JPG",
        "artist": "싸비 (XAVII)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/418/84493418_1700198919721_1_200x200.JPG",
        "artist": "정이한 (더 넛츠)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/500/029/84500029_1700206755011_1_200x200.JPG",
        "artist": "더 라임"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/991/84499991_1700207983427_1_200x200.JPG",
        "artist": "구만 (9.10000)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/715/84498715_1700184426476_1_200x200.JPG",
        "artist": "김지훈"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/502/835/84502835_1700203220565_1_200x200.JPG",
        "artist": "황가람"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/500/430/84500430_1700122227873_1_200x200.JPG",
        "artist": "콜린 (COLL!N)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/500/452/84500452_1700211873481_1_200x200.JPG",
        "artist": "윗공아공"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/490/716/84490716_1700204666450_1_200x200.JPG",
        "artist": "임세모"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/864/84493864_1700205204263_1_200x200.JPG",
        "artist": "아웃오브캠퍼스"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/503/150/84503150_1700203510931_1_200x200.JPG",
        "artist": "스타데이즈 (STARDAYS)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/504/049/84504049_1700204906518_1_200x200.JPG",
        "artist": "nochexintoma"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/954/84498954_1700205183426_1_200x200.JPG",
        "artist": "주현민"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/478/765/84478765_1699634499015_1_200x200.JPG",
        "artist": "COLOR WHITE"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/494/040/84494040_1700122751732_1_200x200.JPG",
        "artist": "홈메이드레코딩"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/670/84499670_1700123265043_1_200x200.JPG",
        "artist": "박민규"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/778/84499778_1700206267708_1_200x200.JPG",
        "artist": "에일리 (Ailee) & 최상엽 & 고영배 (소란)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/503/260/84503260_1700186732707_1_200x200.JPG",
        "artist": "DEAN"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/919/84493919_1700198528427_1_200x200.JPG",
        "artist": "나르샤"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/655/84498655_1700199854952_1_200x200.JPG",
        "artist": "케이시 (Kassy)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/503/044/84503044_1700184338093_1_200x200.JPG",
        "artist": "그래쓰 (GRASS)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/504/229/84504229_1700204104157_1_200x200.JPG",
        "artist": "로켓펀치 (Rocket Punch)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/686/84498686_1700181833013_1_200x200.JPG",
        "artist": "윤토벤 (YounToven)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/007/84499007_1700204321439_1_200x200.JPG",
        "artist": "Pagaehun (박태훈)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/412/190/84412190_1700212337677_1_200x200.JPG",
        "artist": "임재영"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/818/84499818_1700202765222_1_200x200.JPG",
        "artist": "류민희"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/494/177/84494177_1700204089076_1_200x200.JPG",
        "artist": "Various Artists"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/451/976/84451976_1700199045443_1_200x200.JPG",
        "artist": "키츠요지 (kitsyojii)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/926/84493926_1700205903952_1_200x200.JPG",
        "artist": "비지 (Bizzy)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/504/144/84504144_1700204841977_1_200x200.JPG",
        "artist": "윤지성 & 이진혁 & 이대휘 (AB6IX) & 은정 (Eunjung) & ChangJo"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/503/850/84503850_1700204330830_1_200x200.JPG",
        "artist": "윤진우 & 윤희찬 & 정중식"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/504/074/84504074_1700204575729_1_200x200.JPG",
        "artist": "츄 (CHUU)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/667/84498667_1700181780458_1_200x200.JPG",
        "artist": "모레 (more)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/494/797/84494797_1700207845380_1_200x200.JPG",
        "artist": "나기철"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/500/316/84500316_1700119570772_1_200x200.JPG",
        "artist": "Jayd"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/460/918/84460918_1699290627929_1_200x200.JPG",
        "artist": "Felic (펠릭)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/449/749/84449749_1700201361316_1_200x200.JPG",
        "artist": "TNDR"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/849/84493849_1700205397878_1_200x200.JPG",
        "artist": "Slowcity"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/284/84498284_1700211214228_1_200x200.JPG",
        "artist": "다무 (Damu)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/503/257/84503257_1700204672240_1_200x200.JPG",
        "artist": "안예슬"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/621/84499621_1700123133747_1_200x200.JPG",
        "artist": "여은"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/962/84499962_1700122560000_1_200x200.JPG",
        "artist": "I-Rohm (아이롬)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/466/84498466_1700198156786_1_200x200.JPG",
        "artist": "박재범"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/500/428/84500428_1700201077798_1_200x200.JPG",
        "artist": "양다일"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/490/368/84490368_1700198429239_1_200x200.JPG",
        "artist": "노라조"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/884/84493884_1700196987980_1_200x200.JPG",
        "artist": "김정민"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/139/84499139_1700104532166_1_200x200.JPG",
        "artist": "unofficialboyy & gamma"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/495/630/84495630_1700197442204_1_200x200.JPG",
        "artist": "형표"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/489/877/84489877_1700121609014_1_200x200.JPG",
        "artist": "이민휘"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/490/812/84490812_1700036820154_1_200x200.JPG",
        "artist": "blah"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/483/036/84483036_1699690828428_1_200x200.JPG",
        "artist": "Wildberry"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/488/806/84488806_1700012643950_1_200x200.JPG",
        "artist": "NOVAZ"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/280/84499280_1700180194157_1_200x200.JPG",
        "artist": "ENHYPEN"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/494/772/84494772_1700187728582_1_200x200.JPG",
        "artist": "NCT DREAM & JVKE"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/960/84498960_1700187410703_1_200x200.JPG",
        "artist": "TWICE (트와이스)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/473/230/84473230_1700119169744_1_200x200.JPG",
        "artist": "Vince"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/499/865/84499865_1700120116490_1_200x200.JPG",
        "artist": "Various Artists"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/498/638/84498638_1700185925736_1_200x200.JPG",
        "artist": "Various Artists"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/487/551/84487551_1700182309945_1_200x200.JPG",
        "artist": "Low Hanging Fruits"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/459/766/84459766_1699522681168_1_200x200.JPG",
        "artist": "음율"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/500/256/84500256_1700184170329_1_200x200.JPG",
        "artist": "싸비 (XAVII)"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/503/967/84503967_1700202327933_1_200x200.JPG",
        "artist": "Drake"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/481/004/84481004_1699660229093_1_200x200.JPG",
        "artist": "Tate McRae"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/452/251/84452251_1699005642618_1_200x200.JPG",
        "artist": "비비 (BIBI) & Becky G"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/488/042/84488042_1699867530313_1_200x200.JPG",
        "artist": "Foy Vance"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/496/363/84496363_1700184957056_1_200x200.JPG",
        "artist": "Sabrina Carpenter"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/393/572/84393572_1697621742280_1_200x200.JPG",
        "artist": "Steve Aoki"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/476/925/84476925_1699956316148_1_200x200.JPG",
        "artist": "Emeli Sande"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/485/252/84485252_1699769734789_1_200x200.JPG",
        "artist": "Lah Pat"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/489/636/84489636_1699917033289_1_200x200.JPG",
        "artist": "SIIGHTS"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/496/362/84496362_1700069428059_1_200x200.JPG",
        "artist": "Julia Michaels & Wish - Cast & Disney"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/444/057/84444057_1698712232678_1_200x200.JPG",
        "artist": "Tom Odell"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/492/844/84492844_1699990255693_1_200x200.JPG",
        "artist": "X Ambassadors"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/325/84493325_1700181342327_1_200x200.JPG",
        "artist": "Mika"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/473/389/84473389_1699519233355_1_200x200.JPG",
        "artist": "Water From Your Eyes"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/441/545/84441545_1698656137267_1_200x200.JPG",
        "artist": "natori"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/466/847/84466847_1699397465501_1_200x200.JPG",
        "artist": "David Guetta & Kim Petras"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/469/963/84469963_1699584367815_1_200x200.JPG",
        "artist": "2 Chainz & Lil Wayne"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/462/230/84462230_1699305329004_1_200x200.JPG",
        "artist": "Dove Cameron"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/467/164/84467164_1699404933416_1_200x200.JPG",
        "artist": "Jason Derulo"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/488/957/84488957_1699905364015_1_200x200.JPG",
        "artist": "No Guidnce"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/386/126/84386126_1699377347773_1_200x200.JPG",
        "artist": "Bleachers"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/443/797/84443797_1698702329356_1_200x200.JPG",
        "artist": "Baby Jungle"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/484/902/84484902_1699925743512_1_200x200.JPG",
        "artist": "Norah Jones & Rufus Wainwright"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/468/534/84468534_1699425930905_1_200x200.JPG",
        "artist": "Trippie Redd"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/463/031/84463031_1699316128020_1_200x200.JPG",
        "artist": "Cannons"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/490/822/84490822_1700032316980_1_200x200.JPG",
        "artist": "Rival"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/487/863/84487863_1700030967102_1_200x200.JPG",
        "artist": "Coco & Breezy & Zak Leever"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/493/763/84493763_1700098494597_1_200x200.JPG",
        "artist": "Noah Davis"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/409/706/84409706_1697953004786_1_200x200.JPG",
        "artist": "Tors"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/490/773/84490773_1700029642518_1_200x200.JPG",
        "artist": "Stangen"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/485/441/84485441_1699782342316_1_200x200.JPG",
        "artist": "aimyon"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/469/044/84469044_1699586742696_1_200x200.JPG",
        "artist": "Norah Jones & Laufey"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/490/883/84490883_1700013475467_1_200x200.JPG",
        "artist": "CRAVITY"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/463/039/84463039_1699316150149_1_200x200.JPG",
        "artist": "Mimi Webb"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/487/583/84487583_1699858721694_1_200x200.JPG",
        "artist": "Yuna"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/487/180/84487180_1699835729582_1_200x200.JPG",
        "artist": "Ariana DeBose & Angelique Cabral & Wish - Cast & Disney"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/443/796/84443796_1698702328509_1_200x200.JPG",
        "artist": "UPSAHL"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/465/156/84465156_1699374062515_1_200x200.JPG",
        "artist": "Jenna Raine"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/465/316/84465316_1699375352042_1_200x200.JPG",
        "artist": "Phoenix"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/459/945/84459945_1699261846726_1_200x200.JPG",
        "artist": "Basement Jaxx & 100 gecs"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/464/989/84464989_1699370437165_1_200x200.JPG",
        "artist": "BRELAND"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/467/214/84467214_1699579544100_1_200x200.JPG",
        "artist": "Lauren Spencer-Smith"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/477/006/84477006_1699927445636_1_200x200.JPG",
        "artist": "Sweet William & Kota the Friend"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/490/563/84490563_1699949395352_1_200x200.JPG",
        "artist": "SLANDER & Wooli & Trivecta"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/476/882/84476882_1699943204089_1_200x200.JPG",
        "artist": "NSH"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/467/346/84467346_1699407947177_1_200x200.JPG",
        "artist": "Mina Okabe"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/475/518/84475518_1699573238096_1_200x200.JPG",
        "artist": "Måneskin"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/472/390/84472390_1699485334284_1_200x200.JPG",
        "artist": "Jack Harlow"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/468/747/84468747_1699505484805_1_200x200.JPG",
        "artist": "KYLE & Teezo Touchdown"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/465/918/84465918_1699931862127_1_200x200.JPG",
        "artist": "Bella Poarch"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/469/031/84469031_1699584365253_1_200x200.JPG",
        "artist": "Chelsea Cutler"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/469/576/84469576_1699444528954_1_200x200.JPG",
        "artist": "Alexander Stewart"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/449/303/84449303_1698862227771_1_200x200.JPG",
        "artist": "Walker Hayes"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/469/081/84469081_1699584369183_1_200x200.JPG",
        "artist": "070 Shake"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/463/190/84463190_1699318252412_1_200x200.JPG",
        "artist": "Kevin Gates"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/472/740/84472740_1699495839317_1_200x200.JPG",
        "artist": "HYBS"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/447/615/84447615_1698804929614_1_200x200.JPG",
        "artist": "Eyedress"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/487/493/84487493_1699860540664_1_200x200.JPG",
        "artist": "Kyle Dion"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/457/761/84457761_1699211429023_1_200x200.JPG",
        "artist": "The Smile"
    },
    {
        "img": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/472/437/84472437_1699486843554_1_200x200.JPG",
        "artist": "Chris Brown"
    }
]

/*
const recommendationArray = [];
document.querySelectorAll('.recommend').forEach((li, index) => {
  const coverMainSrc = li.querySelector('.cover-main img').getAttribute('src');
  const coverLeftSrc = li.querySelector('.cover-left img').getAttribute('src');
  const coverRightSrc = li.querySelector('.cover-right img').getAttribute('src');

  recommendationArray.push({
    main: coverMainSrc,
    left: coverLeftSrc,
    right: coverRightSrc
  });
});

const infoArray = [];
document.querySelectorAll('.recommend .info').forEach((infoLink, index) => {
  const categoryElement = infoLink.querySelector('.category');
  const titleElement = infoLink.querySelector('.title');
  const djNameElement = infoLink.querySelector('.dj .dj-name');

  // 요소가 존재하는지 체크 후 텍스트 값을 가져옴
  const category = categoryElement ? categoryElement.textContent : '';
  const title = titleElement ? titleElement.textContent : '';
  const djName = djNameElement ? djNameElement.textContent : '';

  infoArray.push({
    category: category,
    title: title,
    djName: djName
  });
});
const mergedArray = recommendationArray.map((recommendation, index) => ({
  main: recommendation.main,
  left: recommendation.left,
  right: recommendation.right,
  category: infoArray[index].category,
  title: infoArray[index].title,
  djName: infoArray[index].djName,
}));

console.log(mergedArray);
*/
// 에디터 추천
const editorRecommendList = [
    {   
        "main": "//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_20231117172312.jpg/dims/resize/Q_80,0",
        "left": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/469/044/84469044_1699586742696_1_140x140.JPG/dims/resize/Q_80,0",
        "right": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/321/151/81321151_1574923528631_1_140x140.JPG/dims/resize/Q_80,0",
        "category": "추천선곡",
        "title": "크리스마스 오브제를 담은 플레이리스트 🎁🎄",
        "djName": "DJ 알잘딱깔센"
    },
    {
        "main": "//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023111718350.png/dims/resize/Q_80,0",
        "left": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/698/023/81698023_1603942597915_1_140x140.JPG/dims/resize/Q_80,0",
        "right": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/056/496/81056496_1675752332925_1_140x140.JPG/dims/resize/Q_80,0",
        "category": "추천선곡",
        "title": "벽난로 앞에서 고요히 즐기는 겨울의 낭만",
        "djName": "DJ 157"
    },
    {
        "main": "//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_20231117164133.png/dims/resize/Q_80,0",
        "left": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/920/464/80920464_1486631409810_1_140x140.JPG/dims/resize/Q_80,0",
        "right": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/055/770/025/55770025_1_140x140.jpg/dims/resize/Q_80,0",
        "category": "추천선곡",
        "title": "재즈 음악이 흐르는 뉴올리언스의 어느 바에서🍸",
        "djName": "DJ 삐삐"
    },
    {
        "main": "//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023111620150.png/dims/resize/Q_80,0",
        "left": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/451/913/84451913_1698990029441_1_140x140.JPG/dims/resize/Q_80,0",
        "right": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/494/146/84494146_1700101051447_1_140x140.JPG/dims/resize/Q_80,0",
        "category": "추천선곡",
        "title": "가볍고 폭닥한 알앤비로 오늘의 감성충전💞",
        "djName": "DJ 수수"
    },
    {
        "main": "//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_20231114173323.png/dims/resize/Q_80,0",
        "left": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/021/088/593/21088593_1409644354684_1_140x140.JPG/dims/resize/Q_80,0",
        "right": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/347/602/81347602_1669342756142_1_140x140.JPG/dims/resize/Q_80,0",
        "category": "추천선곡",
        "title": "찬 바람이 불어도 내 하루는 펑키해 ✨💃",
        "djName": "DJ 자몽"
    },
    {
        "main": "//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_20231110171953.png/dims/resize/Q_80,0",
        "left": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/569/159/82569159_1646430332817_1_140x140.JPG/dims/resize/Q_80,0",
        "right": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/964/303/82964303_1662767462385_1_140x140.JPG/dims/resize/Q_80,0",
        "category": "추천선곡",
        "title": "뒹굴뒹굴, 누워있는 게 내 취미야🙃",
        "djName": "DJ 솝"
    },
    {
        "main": "//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023111015117.jpg/dims/resize/Q_80,0",
        "left": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/111/231/81111231_1666934442396_1_140x140.JPG/dims/resize/Q_80,0",
        "right": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/069/199/820/69199820_1386753884476_1_140x140.JPG/dims/resize/Q_80,0",
        "category": "추천선곡",
        "title": "나만 벌써 설레? 크리스마스 마켓에서 듣고싶은 캐럴🎄",
        "djName": "DJ 뮤"
    },
    {
        "main": "//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_2023111084934.png/dims/resize/Q_80,0",
        "left": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/083/393/527/83393527_1672726301905_1_140x140.JPG/dims/resize/Q_80,0",
        "right": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/307/797/81307797_1573628737716_1_140x140.JPG/dims/resize/Q_80,0",
        "category": "추천선곡",
        "title": "삿포로에 갈까요, 멍을 덮으러",
        "djName": "DJ 자몽"
    },
    {
        "main": "//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_20231110102345.png/dims/resize/Q_80,0",
        "left": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/050/761/862/50761862_1407809133312_1_140x140.JPG/dims/resize/Q_80,0",
        "right": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/643/926/80643926_1437557593986_1_140x140.JPG/dims/resize/Q_80,0",
        "category": "추천선곡",
        "title": "가을의 뉴욕 속으로, 재즈와 함께~",
        "djName": "DJ 란나"
    },
    {
        "main": "//image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/main/mainEditorChoice_202311719324.png/dims/resize/Q_80,0",
        "left": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/117/097/81117097_1540358395075_1_140x140.JPG/dims/resize/Q_80,0",
        "right": "//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/280/642/84280642_1695013846710_1_140x140.JPG/dims/resize/Q_80,0",
        "category": "추천선곡",
        "title": "찬 바람 불 땐, 핫초코 앤 알앤비☕",
        "djName": "DJ 삐삐"
    }
]

export { announcementList, emblemList, newMusic, editorRecommendList }