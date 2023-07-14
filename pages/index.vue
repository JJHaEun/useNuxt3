<template>
  <div class="wrapGridArea">
    <div class="title">
      합계/소계 그리드
      <span style="font-size: 12px; color: #aaa; font-style: italic"
        >정렬 상태를 수정하여 결과를 확인할 수 있습니다.</span
      >
    </div>
    <span>정렬 상태설정 : </span>

    <select id="totalStatus" onChange="totalStatusChanged(value)">
      <option value="none">기본</option>
      <option value="top">상단</option>
      <option value="bottom">하단</option>
    </select>

    <!-- 
      ■■■■■ SBGrid 속성 안내 ■■■■■
        id              입력한 값이 그리드 엘리먼트(<div>)의 id 값으로 사용됩니다. (필수)
        style           해당 div 요소의 스타일을 지정합니다.
        ref             Vue 객체에서 접근할 때 사용됩니다. (ex_ window.vl.$refs.view.$refs.grid)
        :data           그리드에 들어갈 행들의 데이터 객체를 입력합니다.
        :columns        그리드 컬럼들의 대한 설정 객체를 입력합니다.
        :gridattr       그리드의 속성들을 객체 형태로 입력합니다.

      ■■■■■ gridattr 속성 안내 ■■■■■
        backalternate   그리드 행들의 짝수마다 #efefef 배경색상이 들어가도록 설정
        rowheight       데이터 영역의 행 높이를 일괄적으로 26px으로 설정 (특정 행들에만 높이 설정은 제품 특성상 불가능)
        rowheader       입력된 값에 따라 Column의 0번째부터 각각 기능들이 표출됩니다.
                        seq             오름차순으로 행들의 index 값을 보여줍니다.
                        reverseseq      내림차순으로 행들의 index 값을 보여줍니다.
                        update          행 데이터가 추가, 수정, 삭제 되었을 때 상태를 표시해줍니다.
                        select          선택한 행의 위치를 표시해줍니다.
        selectmode      그리드의 선택모드를 변경합니다.
                        byrows(기본값)  다중 행 단위로 데이터를 선택할 수 있습니다.
                        byrow           단일 행만 선택할 수 있습니다.
                        free            셀 단위로 선택이 가능하며 다중 선택이 가능합니다.
        mergecells      그리드 데이터 영역에서 설정값에 따라 데이터를 병합해줍니다.
                        bycol           상하로 이웃한 셀의 데이터 값이 동일할 경우 상하로 병합
                        byrow           좌우로 이웃한 셀의 데이터 값이 동일할 경우 좌우로 병합
                        bycolrec        상하로 이웃한 셀의 데이터 값이 동일할 경우 상하로 병합후, 병합된 결과에 따라 좌우로 병합
                        byrestriccol    첫번째 열부터 동일한 값의 셀을 순서대로 상하병합한 후 다음열의 병합은 앞 열의 병합 결과에 따라 병합
        saveorgdata     그리드의 초기 데이터들을 저장해둡니다. (추후 데이터를 최초 상태로 되돌릴 때 사용됩니다.)
     -->
    <SBGrid
      id="grid"
      style="width: 100%; height: 550px"
      ref="grid"
      :data="gridJson"
      :columns="grid1columns"
      :gridattr="{
        backcoloralternate: '#efefef',
        rowheight: '26',
        rowheader: 'seq',
        selectmode: 'free',
        saveorgdata: true,
      }"
    ></SBGrid>
  </div>
</template>

<script>
import SBGrid from "./SBGrid.vue"; // SBGrid 컴포넌트를 불러옵니다.
export default {
  data: function () {
    return {
      gridJson: [
        // 그리드의 행 데이터로 표현될 Arrary Object입니다.
        {
          col0: "수입",
          col1: "매출",
          col2: "음식판매수입",
          col3: "10000",
          col4: "20000",
          col5: "1522",
          col6: "11",
          col7: "600",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "610.00",
          col13: "650.00",
          col14: "150.00",
          col15: "",
        },
        {
          col0: "수입",
          col1: "매출",
          col2: "농산물판매수입",
          col3: "11000",
          col4: "22000",
          col5: "1622",
          col6: "12",
          col7: "670",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "620.00",
          col13: "650.00",
          col14: "250.00",
          col15: "",
        },
        {
          col0: "수입",
          col1: "매출",
          col2: "농산물가공수입",
          col3: "10000",
          col4: "20000",
          col5: "1522",
          col6: "11",
          col7: "600",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "630.00",
          col13: "650.00",
          col14: "350.00",
          col15: "",
        },
        {
          col0: "수입",
          col1: "매출",
          col2: "음식판매수입",
          col3: "10000",
          col4: "20000",
          col5: "1522",
          col6: "11",
          col7: "600",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "640.00",
          col13: "650.00",
          col14: "450.00",
          col15: "",
        },
        {
          col0: "수입",
          col1: "매출",
          col2: "농산물판매수입",
          col3: "10000",
          col4: "20000",
          col5: "1522",
          col6: "11",
          col7: "600",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "650.00",
          col13: "650.00",
          col14: "550.00",
          col15: "",
        },
        {
          col0: "수입",
          col1: "매출",
          col2: "농산물가공수입",
          col3: "10000",
          col4: "20000",
          col5: "1522",
          col6: "11",
          col7: "600",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "660.00",
          col13: "650.00",
          col14: "650.00",
          col15: "",
        },
        {
          col0: "수입",
          col1: "매출",
          col2: "기타수입",
          col3: "10000",
          col4: "20000",
          col5: "1522",
          col6: "11",
          col7: "600",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "670.00",
          col13: "650.00",
          col14: "750.00",
          col15: "",
        },
        {
          col0: "수입",
          col1: "영업외수입",
          col2: "이자수입",
          col3: "10000",
          col4: "20000",
          col5: "1522",
          col6: "11",
          col7: "600",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "680.00",
          col13: "650.00",
          col14: "850.00",
          col15: "",
        },
        {
          col0: "지출",
          col1: "매출원가",
          col2: "체험재료비",
          col3: "10000",
          col4: "20000",
          col5: "1522",
          col6: "11",
          col7: "600",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "690.00",
          col13: "650.00",
          col14: "950.00",
          col15: "",
        },
        {
          col0: "지출",
          col1: "매출원가",
          col2: "체험인건비",
          col3: "10000",
          col4: "20000",
          col5: "1522",
          col6: "11",
          col7: "600",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "600.00",
          col13: "650.00",
          col14: "1050.00",
          col15: "",
        },
        {
          col0: "지출",
          col1: "판매관리비",
          col2: "급여",
          col3: "10000",
          col4: "20000",
          col5: "1522",
          col6: "11",
          col7: "600",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "610.00",
          col13: "650.00",
          col14: "1150.00",
          col15: "",
        },
        {
          col0: "지출",
          col1: "판매관리비",
          col2: "보험료",
          col3: "10000",
          col4: "20000",
          col5: "1522",
          col6: "11",
          col7: "600",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "620.00",
          col13: "650.00",
          col14: "1250.00",
          col15: "",
        },
        {
          col0: "지출",
          col1: "판매관리비",
          col2: "복리후생",
          col3: "10000",
          col4: "20000",
          col5: "1522",
          col6: "11",
          col7: "600",
          col8: "550",
          col9: "800",
          col10: "650.00",
          col11: "650.00",
          col12: "630.00",
          col13: "650.00",
          col14: "1350.00",
          col15: "",
        },
      ],
      grid1columns: [
        // 그리드 컬럼에 대한 설정값으로 아래 설정들로 그리드 컬럼들을 생성합니다.
        {
          caption: ["구분"],
          ref: "col0",
          width: "100px",
          style: "text-align:center",
          type: "input",
        },
        {
          caption: ["분류"],
          ref: "col1",
          width: "100px",
          style: "text-align:center",
          type: "input",
        },
        {
          caption: ["항목"],
          ref: "col2",
          width: "150px",
          style: "text-align:center",
          type: "input",
        },
        {
          caption: ["1월"],
          ref: "col3",
          width: "100px",
          style: "text-align:right",
          type: "input",
          format: { type: "number", rule: "#,##0.00" },
          merge: false,
        },
        {
          caption: ["2월"],
          ref: "col4",
          width: "100px",
          style: "text-align:right",
          type: "input",
          format: { type: "number", rule: "#,##0.00" },
          merge: false,
        },
        {
          caption: ["3월"],
          ref: "col5",
          width: "100px",
          style: "text-align:right",
          type: "input",
          format: { type: "number", rule: "#,##0.00" },
          merge: false,
        },
        {
          caption: ["4월"],
          ref: "col6",
          width: "100px",
          style: "text-align:right",
          type: "input",
          format: { type: "number", rule: "#,##0.00" },
          merge: false,
        },
        {
          caption: ["5월"],
          ref: "col7",
          width: "100px",
          style: "text-align:right",
          type: "input",
          format: { type: "number", rule: "#,##0.00" },
          merge: false,
        },
        {
          caption: ["6월"],
          ref: "col8",
          width: "100px",
          style: "text-align:right",
          type: "input",
          format: { type: "number", rule: "#,##0.00" },
          merge: false,
        },
        {
          caption: ["7월"],
          ref: "col9",
          width: "100px",
          style: "text-align:right",
          type: "input",
          format: { type: "number", rule: "#,##0.00" },
          merge: false,
        },
        {
          caption: ["8월"],
          ref: "col10",
          width: "100px",
          style: "text-align:right",
          type: "input",
          format: { type: "number", rule: "#,##0.00" },
          merge: false,
        },
        {
          caption: ["9월"],
          ref: "col11",
          width: "100px",
          style: "text-align:right",
          type: "input",
          format: { type: "number", rule: "#,##0.00" },
          merge: false,
        },
        {
          caption: ["10월"],
          ref: "col12",
          width: "100px",
          style: "text-align:right",
          type: "input",
          format: { type: "number", rule: "#,##0.00" },
          merge: false,
        },
        {
          caption: ["11월"],
          ref: "col13",
          width: "100px",
          style: "text-align:right",
          type: "input",
          format: { type: "number", rule: "#,##0.00" },
          merge: false,
        },
        {
          caption: ["12월"],
          ref: "col14",
          width: "100px",
          style: "text-align:right",
          type: "input",
          format: { type: "number", rule: "#,##0.00" },
          merge: false,
        },
      ],
    };
  },
  components: {
    SBGrid, // 불러온 SBGrid 컴포넌트를 TotalGrid.vue에서 사용할 수 있도록 등록합니다.
  },
  mounted: function () {
    this.nextTick(function () {
      // mounted 시점에 SBGrid 컴포넌트에 메소드를 사용할 경우 nextTick 함수 안에서 코드를 작성해야 합니다.
      // window.vl.$refs.view.$refs.grid.gridObject.getJsonRef(); // 해당 SBGrid 컴포넌트의 Json Ref 정보를 반환
    });
  },
};
window.totalStatusChanged = function (value) {
  // select 요소의 option 값을 바꿨을 때 동작하는 함수입니다.
  if (value == "none") {
    // 선택한 옵션이 기본 상태일 경우
    vl.$refs.view.$refs.grid.gridObject.clearTotal(); // Total 적용 상태를 해제합니다.
  } else {
    // 선택한 option이 기본이 아닌 경우
    let objTotal = {
      type: "subgrand", // subgrand : 소계 및 합계  / sub : 소계  / grand : 합계
      position: value, //  나타날 위치를 설정하는데 option 값으로 position이 정해짐  (top : 상단정렬 / bottom : 하단정렬)
      standardvaluechange: true, // 합계 행의 기준 컬럼의 데이터를 기준 데이터로 변경할지 말지 여부 설정
      columns: {
        standard: [1, 2], // 기준 컬럼 설정
        sum: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], // 4~15번째 컬럼들은 행들의 값을 더함
      },
      subtotalrow: {
        // 소계 행들에 대한 설정
        1: {
          // 117줄에 @값을 1번째 컬럼에서 찾음
          titlecol: 2, // 117번째 내용이 2번째 컬럼에 나타남
          titlevalue: "@ 소계", // 나타낼 소계 내용
          style:
            "background-color: rgb(146, 178, 197); font-weight: bold; color: rgb(255, 255, 255);", // 해당 행의 스타일 설정
          stylestartcol: 2, // 몇번째 컬럼부터 스타일을 입힐지 설정
        },
        2: {
          titlecol: 3,
          titlevalue: "@ 소계",
          style:
            "background-color: rgb(146, 178, 197); font-weight: bold; color: rgb(255, 255, 255);",
          stylestartcol: 3,
        },
      },
      grandtotalrow: {
        // 합계 행에 대한 설정
        titlecol: 1, // 130번째 줄 내용이 나올 컬럼
        titlevalue: "합계", // 나타낼 합계 내용
        style:
          "background-color: rgb(146, 178, 197); font-weight: bold; color: rgb(255, 255, 255);", // 해당 행의 스타일 설정
        stylestartcol: 1, // 면전째 컬럼부터 스타일을 입힐지 설정
      },
      datasorting: true, // 데이터 정렬여부 설정
    };
    vl.$refs.view.$refs.grid.gridObject.setTotal(objTotal); // 위 objTotal 객체 값으로 그리드를 Total화함.
  }
};
</script>

<style></style>
