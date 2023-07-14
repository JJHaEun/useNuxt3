<template>
    <!-- 
        1. 그리드가 그려지기 위해 div가 아래와 같이 선언되어 있어야 합니다.
        2. div 속성으로 :id="parentid" 값이 들어가야 합니다.
            ※ 이유는 div의 id 값을 통해 그리드가 그려지기 때문입니다.
        3. :id="parentid" 해당 parentid 값은 본 컴포넌트 18번째 줄에서 생성됩니다.
            ※ 18번째 줄의 this.id는 props.id 입니다. 상위 컴포넌트에서 SBGrid 컴포넌트 속성으로 작성한 id 값 입니다.
     -->
    <div :id="parentid"></div>
</template>

<script>
export default {
    props: ['id', 'columns', 'data', 'gridattr', 'bind'], // props에 담기는 값들은 SBGrid 컴포넌트 커스텀 속성명들을 선언하는 것입니다.
    data: function(){
        return {
            gridObject: null, // gridObject는 현재 컴포넌트에 그리드 객체를 할당하기 위해 null으로 초기 선언해줍니다. (23번째 줄에서 그리드 객체가 gridObject에 할당될 예정)
            parentid: this.id // SBGrid 컴포넌트 속성 중 id 값으로 이 parentid에 id 값을 할당합니다. SBGrid가 그려질 div의 id값이 됩니다.
        }
    },
    mounted: function(){
        // _SBGrid.create를 할 때에 window.가 붙는 이유는 index.html에서 SBGrid2.5 Library를 전역으로 선언하였기 때문에 해당 _SBGrid를 찾기 위해 window.을 붙이게 된 것입니다.
        this.gridObject = window._SBGrid.create({ 
            /**
             * ...this.gridattr은 SBGrid 컴포넌트 속성 설정 시, gridattr의 값을 그대로 입력해줍니다.
             * || 뒤에 { rowheader: ['seq'], explorerbar: 'sortmove'} 의 경우 gridattr 속성이 선언되지 않았을 때 기본적으로 적용될 속성들입니다.
             */
            ...this.gridattr || { rowheader: ['seq'], explorerbar: 'sortmove'},
            id: this.id, // SBGrid 컴포넌트 속성 중, id 값이 이 id에 할당됩니다.
            parentid: this.parentid, // SBGrid 컴포넌트 속성 중, id 값 + 'Area'(18번째 줄에서 id + 'Area'처리)가 이 parentid에 할당됩니다.
            /**
             * SBGrid 속성 중, columns에 입력된 배열의 오브젝트가 이 columns에 할당됩니다.
             * 만약 SBGrid 속성 설정 시 columns 값을 입력하지 않으면 || 이후의 값으로 컬럼이 생성됩니다.
             */
            columns: this.columns || [
                {
                    caption : ['col1'],	// 캡션명을 'col1'으로 설정합니다.
                    ref : 'selectHeader_col1', // 해당 열의 ref값을 'selectHeader_col1'으로 설정합니다.
                    width : '200px', // 해당 열의 너비를 200px으로 설정합니다.
                    style : 'text-align:center', // 해당 열의 style을 설정합니다.
                    type : 'input', // 해당 열의 타입을 input으로 설정합니다.
                },
                {
                    caption : ['col2'],
                    ref : 'selectHeader_col2',
                    width : '200px',
                    style : 'text-align:center',
                    type : 'input',
                }
            ],
            /**
             * SBGrid 컴포넌트 속성 설정 중, jsonref의 값을 이 jsonref에 할당합니다.
             * 만약 SBGrid 컴포넌트 속성인 jsonref의 값을 입력하지 않으면 빈 배열로 할당됩니다.
             */
            jsonref: this.data || [],
        })
        if(this.bind != null) { // SBGrid 속성 설정 중, bind 라는 속성의 값이 null이 아닐 경우, 본 컴포넌트에 이벤트를 할당합니다.
            for(let i = 0 ; i < Object.keys(this.bind).length; i++){ // 할당할 이벤트의 Key의 개수만큼 for문을 돌려 SBGrid 컴포넌트에 할당합니다.
                this.gridObject.bind(Object.keys(this.bind)[i], Object.values(this.bind)[i]) // this.gridObject는 23번째 줄에 gridObject에 할당한 객체이며, bind() 메소드의 파라미터는 아래를 참조해주세요.
                /**
                 * 메소드 예시 : this.gridObject.bind("click", "fnClick");
                 * 파라미터 구성 : 1번째 파라미터는 그리드에서 지원하는 이벤트명,   2번째 파라미터는 호출할 함수명
                 * 
                 * 위 60번째 줄의 코드를 분석한다면 SBGrid 컴포넌트 속성 설정 중, bind="{'click': 'fnClickEvent'}" 이와 같은 형태로 값이 들어가며,
                 * Object.keys(this.bind)[i]는 SBGrid 컴포넌트 속성인 bind 객체에 i번째 Key명을 입력해줍니다.
                 * 마찬가지로 Object.values(this.bind[i])는 i번째 객체의 value값을 입력해주어 최종적으로 61번째 줄과 같은 형태가 됩니다.
                 */
            }
        }
    }
}
</script>

<style>
</style>