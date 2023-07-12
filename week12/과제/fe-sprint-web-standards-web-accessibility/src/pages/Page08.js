const Page08 = () => {
    return (
        <article>
            <h1>문제 8 : Cmarket Redux 리팩토링</h1>
            <p>지금까지 학습한 내용을 바탕으로 Cmarket Redux의 웹 표준과 웹 접근성을 개선해보세요.</p>
            <li>이 문제는 자유도가 높고 정답이 없습니다. 여러분이 판단하기에 웹 표준, 웹 접근성을 향상시킬 수 있는 방법이 있다면 자유롭게 적용해보세요.
                <li>필요하다면 새로운 요소를 추가해서 사용하거나 삭제하는 것도 괜찮습니다.</li>
                <li>시간이 허락한다면 애플리케이션의 스타일, 디자인을 바꾸는 것도 좋습니다.</li>
                <li>학습한 내용의 연습장으로 사용해 보는 것도 좋습니다.</li>
            </li>
            <section>
                <h2>준비하기</h2>
                <li>Cmarket Redux의 레퍼런스 레포지토리를 클론하여 진행합니다.</li>
                <li>학습한 내용을 복습하고 실습한다고 생각하고 진행해주세요. 제출 하지 않아도 됩니다. </li>
            </section>
            <section>
                <h2>시작하기</h2>
                <li>{`<div>`}요소와 {`<span>`}요소를 시맨틱 요소로 바꾸는 것부터 시작해보세요.
                    <li>시맨틱 요소로 바꾸면서 필요없어진 class가 있다면 삭제하고, CSS 속성도 바꾼 요소에 맞춰서 다시 연결해주세요.</li>
                    <li>다른 개선점은 찾아보지 않아도 괜찮습니다. 적절한 시맨틱 요소를 사용하는 연습은 꼭 해보세요. 웹 표준, 웹 접근성을 모두 챙길 수 있는 가장 기본적이고 쉬운 방법입니다.</li>
                </li>
                <li>상품 이미지에 대체 텍스트가 작성되어 있나요?
                    <li>대체 텍스트로 어떤 값을 사용하고 있나요?</li>
                    <li>스크린 리더로 확인했을 때 어색하진 않나요? 어떻게 개선할 수 있을까요?</li>
                    <li>이미지 외에도 어색한 요소가 없는지 확인하고 개선해보세요.</li>
                </li>
                <li>{`<input>`}요소에 적합한 레이블이 작성되어 있나요?
                    <li>어떤 방식으로 레이블을 작성해주는게 좋을까요?</li>
                    <li>레이블이 눈에 보이는 것이 더 좋지는 않을까요?</li>
                </li>
                <li>이 외에도 개선점이 있을까요?</li>
            </section>
        </article>
    )
}

export default Page08