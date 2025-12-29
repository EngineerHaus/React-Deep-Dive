# ✅ 12주차 스터디 운영 방식

---

## **W1. useState 알아보기**

**목표:** useState의 동작 원리, 렌더링 사이클, 클로저와의 관계 이해

### 📌 스터디 구성

1. **사전 과제 공유 (온라인)**

   - 공식 docs 읽기
   - useState 간단 실험 코드 작성

2. **모임 시간 진행**

   - 각자 정리한 포인트 공유
     → “state 업데이트가 비동기처럼 보이는 이유?”
     → “Batching 언제 일어나는가?”
   - React 소스 코드 중 useState 관련 부분 간단 리뷰
   - useState의 작동을 그림으로 설명해보기 (Fiber 흐름 간단히)

3. **실습**

   - 간단한 카운터/폼 실험하며 렌더링 횟수 콘솔로 확인

4. **마무리**

   - 다음 주 구현 목표 공유

## **W2. useState 직접 구현해보기**

**목표:** 최소한의 React-like useState 만드는 경험

### 📌 스터디 구성

1. **사전 과제**

   - 각자 미니 useState 구현해보기 (최소 기능)

2. **모임 시간 진행**

   - 각자의 구현 코드 비교

     - state 저장 방식?
     - re-render를 어떻게 트리거했는가?

   - 공통적인 문제점/개선점 토론

3. **라이브 코딩**

   - 모두의 아이디어를 모아 “스터디 버전 useState” 완성
   - 단일 컴포넌트 → 다중 컴포넌트 확장 시 어려운 점 논의

4. **회고**

   - React가 왜 Fiber를 사용하는지 감을 잡기

## **W3. useState 총 정리**

## **W4. useEffect 알아보기**

**목표:** useEffect의 타이밍, dependency array 동작, 클린업 개념 명확화

### 📌 스터디 구성

1. **사전 과제**

   - useEffect 동작 실험: deps 변화, 클린업 타이밍 관찰

2. **모임 시간 진행**

   - useEffect 실행 타이밍에 대한 오해 정리

     - 렌더 → DOM 커밋 → Effect 실행

   - Unrealistic example들도 살펴보기 (무한루프 등)
   - React 공식 문서의 “Effects를 언제 써야 하는가?” 논의

3. **실습**

   - 다양한 deps 조합에서 어떤 효과가 발생하는지 실험

4. **토론**

   - “렌더링과 사이드이펙트의 분리” 철학 이야기

## **W5. useEffect 직접 구현해보기**

**목표:** 간단한 Effect 시스템 구현

### 📌 스터디 구성

1. **사전 과제**

   - 최소 useEffect 구현 (deps 시스템 포함)

2. **모임 시간**

   - 각자의 구현 방식을 비교
   - deps 비교 로직을 정확히 어떻게 구현했는지 검토
   - 클린업 함수는 언제 실행하는지 확인

3. **라이브 코딩**

   - 스터디 버전의 작은 런타임 만들기

     - render() 후 effectQueue 실행
     - deps 비교 및 cleanup 순서 구현

4. **회고**

   - React가 commit phase를 분리한 이유 직관적으로 이해

## **W6. useEffect 총 정리**

## **W7. useRef 알아보기**

**목표:** useRef의 특징, mutable object, re-render 비발생 구조 이해

### 📌 스터디 구성

1. **사전 과제**

   - useRef 실험: DOM 접근, 값 보존 테스트

2. **모임 시간**

   - useRef의 “상태와 ref의 차이” 토론
   - React 내부에서는 ref를 어떻게 저장하는지 이해
   - “Closure vs ref” 비교 실험

3. **실습**

   - timeout ID 저장
   - 이전 값 기억하는 usePrevious 만들어 보기

## **W8. useRef 직접 구현해보기**

**목표:** 간단한 ref 시스템 설계

### 📌 스터디 구성

1. **사전 과제**

   - useRef Mock 구현 (원시적인 형태라도 OK)

2. **모임 시간**

   - 구현 코드 리뷰
   - 왜 re-render를 발생시키지 않는지 설명해보기
   - React에서 fiber.memoizedState에 ref가 어떻게 저장되는지 구조적으로 설명

3. **라이브 코딩**

   - 기존에 만든 useState/useEffect mini-react에 useRef 추가하기

## **W9. useRef 총 정리**

## **W10. SSR 알아보기**

**목표:** SSR의 동작 원리 전반 이해

### 📌 스터디 구성

1. **사전 과제**

   - SSR 개념 정리 (렌더링 종류 CSR/SSR/SSG/ISR 비교)
   - Next.js/Remix의 SSR 흐름 읽어보기

2. **모임 시간**

   - SSR 렌더링 프로세스 화이트보드로 정리
   - hydration 개념 설명
   - SSR에서 발생하는 문제들 토론
     → “Flash of Unstyled Content”, “hydration mismatch”

3. **실습**

   - ReactDOMServer.renderToString 간단 테스트

## **W11. 프레임워크 없이 SSR 구현해보기**

**목표:** React 없이 직접 SSR 구조 구현

### 📌 스터디 구성

1. **사전 과제**

   - 간단한 SSR 예제 구현해보기

     - Node + 템플릿 문자열 + fetch + HTML 반환

2. **모임 시간**

   - 각자의 SSR 방식 공유
   - 최소 SSR 프레임워크 만들기

     - 서버에서 데이터 fetch
     - HTML 템플릿에 데이터 삽입
     - 클라이언트에서 hydration 비슷한 로직 붙이기

3. **완성하기**

   - “우리 스터디 버전 SSR” 합치기
   - 예: 상품 리스트 페이지 SSR 미니 프로젝트

4. **회고**

   - React/Next가 해결하는 문제들의 깊은 이해
  
## **W12. SSR 총 정리 및 스터디 마무리**
