// ㅜ rafce 명령어로 컴포넌트 생성하면 된다.
import { Button_1, MAROON_COLOR_1, WHITE_COLOR_1 } from "../../base_style";
import Default_component from "../../component/default_component";
import { useDispatch, useSelector } from "react-redux";
import Footer_layout from "../../layout/footer_layout";
import Top_layout from "../../layout/top_layout";
import {
  register_collector_user_fn,
  register_cafe_user_fn,
  register_emission_fn,
  default_action_fn,
  login_user_fn,
} from "../../redux/middleware";

const Default_page = () => {
  const cafe_user_data = {
    login_id: "hello1223",
    login_password: "12324",
    user_name: "김지훈2",
    user_type: "Cafe",
    wallet_address: null,
    wallet_privatekey: null,
    cafe_name: "메가커피1",
    address_si: "인천광역시1",
    address_gu: "미추홀구1",
    address_dong: "용현동1",
    total_emissions: null,
  };

  const company_user_data = {
    login_id: "imcompany",
    login_password: "1234",
    user_name: "나수거",
    user_type: "Collector",
    wallet_address: null,
    wallet_privatekey: null,
    company_name: "나수거업체명",
  };
  const login_user_data = {
    login_id: "hello1223",
    login_password: "12324",
  };
  const members_cafe_collection_data = {
    coffee_amount: 20,
    coffee_status: "drying",
    updated_at: null,
  };
  //

  const dispatch = useDispatch();
  const team_message = useSelector(
    (state) => state.default_reducer.team_message
  );

  const button_fn = () => {
    //

    dispatch(default_action_fn());
    console.log(`team_message : ${team_message}`);
  };

  return (
    <>
      <Top_layout />
      <div
        style={{
          width: "100%",
          padding: "5vw 0",
          backgroundColor: WHITE_COLOR_1,
        }}
      >
        <h1 style={{ color: MAROON_COLOR_1 }}>Default_page</h1>
        <h1 style={{ color: MAROON_COLOR_1 }}>h1 style</h1>
        <h2 style={{ color: MAROON_COLOR_1 }}>h2 style</h2>
        <h3 style={{ color: MAROON_COLOR_1 }}>h3 style</h3>
        <h4 style={{ color: MAROON_COLOR_1 }}>h4 style</h4>
        <h5 style={{ color: MAROON_COLOR_1 }}>h5 style</h5>
        <h6 style={{ color: MAROON_COLOR_1 }}>h6 style</h6>
        <Button_1 onClick={button_fn}>버튼1 style</Button_1>
        <h6>{team_message}</h6>
      </div>
      <Default_component />
      <Button_1 onClick={() => dispatch(login_user_fn(login_user_data))}>
        로그인
      </Button_1>
      <Button_1 onClick={() => register_cafe_user_fn(cafe_user_data)}>
        카페유저등록
      </Button_1>
      <Button_1 onClick={() => register_collector_user_fn(company_user_data)}>
        수거자등록
      </Button_1>
      <Button_1
        onClick={() =>
          dispatch(register_emission_fn(members_cafe_collection_data))
        }
      >
        카페배출입력(카페유저입장)
      </Button_1>

      <Footer_layout />
    </>
  );
};

export default Default_page;

// ㅜ 메타마스트 확장 프로그램 사용 시 2가지 에러 발생함
// Lockdown failed: TypeError: At intrinsics.Object.groupBy expected boolean not function
// lockdown-more.js:99 Protecting intrinsics failed: ReferenceError: harden is not defined
