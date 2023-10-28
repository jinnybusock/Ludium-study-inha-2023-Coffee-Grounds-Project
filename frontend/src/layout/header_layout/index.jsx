// 모든 화면에 보일 Header_layout 컴포넌트


import { First_brown, Arrow_button, First_white, Second_brown, Second_white, Toggle_button } from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux"


const Header_layout = () => {
    //

    const nav = useNavigate();
    const location = useLocation();
    const current_path = location.pathname;


    // 로그인한 유저가 카페일 경우 카페명 표시
    const cafe_name = useSelector((state) => state.user_reducer.cafe_name);


    // 수거자일 경우 수거자명 표시
    const user_name = useSelector((state) => state.user_reducer.user_name);


    const get_header_title_fn = () => {
        switch (current_path) {
            //

            // 1_MAIN
            case "/":
                return "메인";

            // GNB
            case "/gnb":
                return "메뉴 목록";

            // 2_JOIN_CHOICE
            case "/join/choice":
                return "회원가입";

            // 3_JOIN_CAFE
            case "/join/cafe":
                return "회원가입";

            // 4_JOIN_COLLECTOR
            case "/join/collector":
                return "회원가입";

            // 5_LOGIN
            case "/login":
                return "로그인";

            // 6_MY_PAGE_CAFE_COFFEE
            case "/emission":
                return "배출 목록";

            // 7_MY_PAGE_CAFE_COFFEE_IINPUT
            case "/emission/input":
                return "배출 입력";

            // 8_MY_PAGE_CAFE_INSENTIVE
            case "/insentive":
                return "배출 성과";

            // 9_MY_PAGE_CAFE_TOKEN
            case "/insentive/token":
                return "토큰 상세";

            // 10_MY_PAGE_CAFE_TOKEN_EXCHANGE
            case "/insentive/token/exchange":
                return "토큰 환전";

            // 11_MY_PAGE_COLLECTOR
            case "/collection":
                return "수거 목록";

            // 12_MY_PAGE_COLLECTOR_INPUT
            case "/collection/input":
                return "수거 입력";

            // 13_MY_PAGE_COLLECTOR_CHECK
            case "/collection/check":
                return "수거 검증";

            // 14_COLLECTION_ONCHAIN
            case "/collection/onchain":
                return "보상 목록";

            default:
                return "";
        }
    }


    return (
        <>
            <div style={{ display: 'flex' }}>
                <Arrow_button onClick={() => nav(-1)}>←</Arrow_button>
                <First_brown>{get_header_title_fn()}</First_brown>
                <Toggle_button onClick={() => nav("/gnb")}>☰</Toggle_button>
            </div>
            <First_white></First_white>
            <Second_brown>{cafe_name || user_name || "커피 한 잔의 자원"}</Second_brown>
            <Second_white></Second_white>


            <Outlet />
        </>
    );
};


export default Header_layout;
