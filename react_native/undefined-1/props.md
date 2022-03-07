---
description: properties
---

# props

컴포넌트의 특정 부분을 동적으로 가져와 할당시킬 수 있다.

```
function Greeting(props) {
return (
    <View>
        <Text>안녕하세요 {props.name}!이렇게 </Text>
    </View>
    );
}
```

&#x20;이 코드를 참고하면, 함수에서 props라는 파라미터를 설정하고 기준에 '함수 컴포넌트가 있던 부분을 저렇게 중괄호로 감싸(JSX 표현식)서 할당&#x20;

그럼 나중에 이 component를 사용할 때 간단히 \<Greeting name='바보' /> 이렇게 할당해주면 저절로 들어   &#x20;



defaultprops

만약에 props에 아무것도 할당이 되지 않았을 경우 빈칸이 아닌 다른 걸로 기본값을 할당해주고 싶을 경우 저 밑에 Greeting.defaultProps = {name: '바보'} 이렇게 해주면  &#x20;
